import { NextRequest, NextResponse } from 'next/server';
import { saveLead } from '@/lib/storage';
import { sendNotificationEmail } from '@/lib/email';
import { checkRateLimit } from '@/lib/rateLimit';

// Basic HTML/XSS input sanitization
function sanitizeInput(str?: string): string {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

// RFC-compliant email regex pattern
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    // Audit Requirement 6: Oversized request body rejection (limit 10KB)
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 10240) {
      return NextResponse.json(
        { success: false, error: 'Payload size exceeds limit.' },
        { status: 413 }
      );
    }

    // 1. IP & Rate Limiting check — EXACT REQUIREMENT: 5 submissions per IP per hour
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || '127.0.0.1';
    const rateLimit = checkRateLimit(clientIp, 5, 60 * 60 * 1000);

    if (!rateLimit.isAllowed) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // 2. Parse request payload
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: 'Invalid payload format' },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      honeypot,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
    } = body;

    // 3. Bot / Spam Honeypot Protection: quiet success without database insert or email send
    if (honeypot && String(honeypot).trim() !== '') {
      return NextResponse.json({
        success: true,
        message: "You're on the list. MOJO FLOW is coming soon.",
      });
    }

    // 4. Validate Name (empty or <2 chars rejected)
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    // 5. Validate Email Syntax (empty or invalid format rejected)
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // 6. Sanitize Input
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanUtmSource = sanitizeInput(utm_source);
    const cleanUtmMedium = sanitizeInput(utm_medium);
    const cleanUtmCampaign = sanitizeInput(utm_campaign);
    const cleanUtmContent = sanitizeInput(utm_content);
    const cleanUtmTerm = sanitizeInput(utm_term);

    // 7. Save Lead (Production enforcing Supabase, Development allowing local fallback)
    let leadResult;
    try {
      leadResult = await saveLead({
        name: cleanName,
        email: cleanEmail,
        utm_source: cleanUtmSource || undefined,
        utm_medium: cleanUtmMedium || undefined,
        utm_campaign: cleanUtmCampaign || undefined,
        utm_content: cleanUtmContent || undefined,
        utm_term: cleanUtmTerm || undefined,
      });
    } catch (storageErr: any) {
      console.error('Waitlist Storage Error:', storageErr.message);
      return NextResponse.json(
        { success: false, error: 'Server configuration error. Storage service unavailable.' },
        { status: 500 }
      );
    }

    const { lead, isDuplicate, storageProvider } = leadResult;

    // 8. Dispatch Nodemailer Notification Email to no-reply@mojoflow.in (only for unique leads)
    if (!isDuplicate) {
      await sendNotificationEmail(lead);
    }

    return NextResponse.json({
      success: true,
      message: isDuplicate
        ? "You're already registered on the waitlist! We'll be in touch soon."
        : "You're on the list. MOJO FLOW is coming soon.",
      leadId: lead.id,
      storageProvider,
    });
  } catch (error) {
    console.error('Waitlist API Unexpected Error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected server error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
