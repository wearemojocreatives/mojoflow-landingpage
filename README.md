# MOJO FLOW — Creator OS Waitlist Landing Page

A production-ready, standalone marketing and waitlist website for **MOJO FLOW — The Creator OS**.

---

## Technical Stack & Architecture

```
Next.js 14+
TypeScript
Tailwind CSS
Lucide React
        │
        ├── Landing Page
        │
        └── /api/waitlist
                  │
                  ├── Validate
                  ├── Sanitize
                  ├── Honeypot
                  ├── Rate Limit
                  ├── Duplicate Check
                  │
                  ├──────────────► Supabase (`waitlist_leads` table)
                  │
                  └──────────────► Nodemailer / SMTP (no-reply@mojoflow.in)
```

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Icons**: Lucide React
- **Database**: Supabase (`waitlist_leads` table) + Local JSON Fallback
- **Email Notifications**: Nodemailer / SMTP (`no-reply@mojoflow.in`)

---

## Supabase Database Setup

Run the following SQL in your Supabase SQL Editor to create the `waitlist_leads` table:

```sql
CREATE TABLE IF NOT EXISTS waitlist_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT DEFAULT 'MOJO FLOW Waitlist'
);

-- Index for fast duplicate email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_leads_email ON waitlist_leads(email);
```

---

## Getting Started

### 1. Installation

```bash
git clone https://github.com/mojoflow/mojoflow-landingpage.git
cd mojoflow-landingpage
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 2. Environment Variables (.env.local)

```env
NOTIFICATION_EMAIL=no-reply@mojoflow.in

# Nodemailer / SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=no-reply@mojoflow.in
SMTP_PASS=your-smtp-app-password
SMTP_FROM="MOJO FLOW" <no-reply@mojoflow.in>

# Supabase Integration
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Waitlist API Specification (`POST /api/waitlist`)

### Request
```json
{
  "name": "Alex Rivers",
  "email": "alex@creator.com",
  "honeypot": ""
}
```

### Execution Pipeline
1. **Validate**: Name length (min 2 chars) and RFC email syntax.
2. **Sanitize**: HTML tag stripping against XSS.
3. **Honeypot**: Silent bot detection.
4. **Rate Limit**: Max 10 submissions per hour per IP.
5. **Duplicate Check & Storage**: Queries Supabase `waitlist_leads` table for duplicate email. Inserts record if unique.
6. **Notification Email**: Sends notification email to `no-reply@mojoflow.in`.

### Response (200 OK)
```json
{
  "success": true,
  "message": "You're on the list. MOJO FLOW is coming soon.",
  "leadId": "767639a3-3c6f-4063-85e3-5706396da6e8",
  "storageProvider": "supabase"
}
```
