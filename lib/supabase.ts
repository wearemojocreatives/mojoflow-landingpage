import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Lead, SaveLeadParams } from './storage';

let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  // SECURITY: SUPABASE_SERVICE_ROLE_KEY is kept strictly server-side (no NEXT_PUBLIC_ prefix)
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  if (!supabaseClient) {
    supabaseClient = createClient(url, key);
  }

  return supabaseClient;
}

export async function saveLeadToSupabase(
  params: SaveLeadParams
): Promise<{ lead: Lead; isDuplicate: boolean } | null> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return null; // Return null to fallback to local storage
  }

  const normalizedEmail = params.email.trim().toLowerCase();

  try {
    // 1. Check for existing duplicate lead in waitlist_leads table
    const { data: existing, error: searchError } = await supabase
      .from('waitlist_leads')
      .select('*')
      .ilike('email', normalizedEmail)
      .maybeSingle();

    if (searchError && searchError.code !== 'PGRST116') {
      console.warn('Supabase query warning:', searchError.message);
    }

    if (existing) {
      return {
        lead: {
          id: existing.id,
          name: existing.name,
          email: existing.email,
          created_at: existing.created_at,
          source: existing.source || 'MOJO FLOW Waitlist',
          utm_source: existing.utm_source,
          utm_medium: existing.utm_medium,
          utm_campaign: existing.utm_campaign,
          utm_content: existing.utm_content,
          utm_term: existing.utm_term,
        },
        isDuplicate: true,
      };
    }

    // 2. Insert new lead into waitlist_leads table with UTM attribution
    const newRecord = {
      name: params.name.trim(),
      email: normalizedEmail,
      source: 'MOJO FLOW Waitlist',
      created_at: new Date().toISOString(),
      utm_source: params.utm_source || null,
      utm_medium: params.utm_medium || null,
      utm_campaign: params.utm_campaign || null,
      utm_content: params.utm_content || null,
      utm_term: params.utm_term || null,
    };

    const { data: inserted, error: insertError } = await supabase
      .from('waitlist_leads')
      .insert([newRecord])
      .select()
      .single();

    if (insertError) {
      console.error('Supabase insert error:', insertError.message);
      return null;
    }

    return {
      lead: {
        id: inserted.id,
        name: inserted.name,
        email: inserted.email,
        created_at: inserted.created_at,
        source: inserted.source,
        utm_source: inserted.utm_source,
        utm_medium: inserted.utm_medium,
        utm_campaign: inserted.utm_campaign,
        utm_content: inserted.utm_content,
        utm_term: inserted.utm_term,
      },
      isDuplicate: false,
    };
  } catch (error) {
    console.error('Supabase integration error:', error);
    return null;
  }
}
