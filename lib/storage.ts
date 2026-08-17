import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { saveLeadToSupabase } from './supabase';

export interface Lead {
  id: string;
  name: string;
  email: string;
  created_at: string;
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface SaveLeadParams {
  name: string;
  email: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'leads.json');

function ensureDataDirectory(): void {
  // Only attempt directory creation in non-production environments to avoid serverless filesystem errors
  if (process.env.NODE_ENV !== 'production') {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf-8');
      }
    } catch (e) {
      console.warn('Local leads file system warning:', e);
    }
  }
}

export function getLocalLeads(): Lead[] {
  if (process.env.NODE_ENV === 'production') {
    return [];
  }
  try {
    ensureDataDirectory();
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, 'utf-8');
      return JSON.parse(data) as Lead[];
    }
    return [];
  } catch (error) {
    console.error('Error reading local leads storage:', error);
    return [];
  }
}

function saveLocalLead(params: SaveLeadParams): { lead: Lead; isDuplicate: boolean } {
  const leads = getLocalLeads();
  const normalizedEmail = params.email.trim().toLowerCase();
  const existing = leads.find((l) => l.email.toLowerCase() === normalizedEmail);

  if (existing) {
    return { lead: existing, isDuplicate: true };
  }

  const newLead: Lead = {
    id: crypto.randomUUID ? crypto.randomUUID() : `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    name: params.name.trim(),
    email: normalizedEmail,
    created_at: new Date().toISOString(),
    source: 'MOJO FLOW Waitlist',
    utm_source: params.utm_source,
    utm_medium: params.utm_medium,
    utm_campaign: params.utm_campaign,
    utm_content: params.utm_content,
    utm_term: params.utm_term,
  };

  if (process.env.NODE_ENV !== 'production') {
    try {
      ensureDataDirectory();
      leads.push(newLead);
      fs.writeFileSync(FILE_PATH, JSON.stringify(leads, null, 2), 'utf-8');
    } catch (err) {
      console.warn('Unable to write to local storage file:', err);
    }
  }

  return { lead: newLead, isDuplicate: false };
}

/**
 * Production-ready saveLead:
 * - In Production: Supabase is mandatory. Throws an explicit server configuration error if Supabase credentials are missing or unreachable.
 * - In Development: Falls back to local leads file if Supabase is unconfigured.
 */
export async function saveLead(params: SaveLeadParams): Promise<{ lead: Lead; isDuplicate: boolean; storageProvider: 'supabase' | 'local' }> {
  const isProduction = process.env.NODE_ENV === 'production';
  const supabaseResult = await saveLeadToSupabase(params);

  if (supabaseResult) {
    if (!isProduction) {
      saveLocalLead(params);
    }
    return { ...supabaseResult, storageProvider: 'supabase' };
  }

  if (isProduction) {
    // Audit Requirement 1: Missing Supabase config in production produces a clear server-side configuration error
    throw new Error('PRODUCTION_STORAGE_CONFIG_ERROR: Supabase is not configured or reachable in production. Verify SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.');
  }

  // Development fallback
  const localResult = saveLocalLead(params);
  return { ...localResult, storageProvider: 'local' };
}
