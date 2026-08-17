import nodemailer from 'nodemailer';
import { Lead } from './storage';

export async function sendNotificationEmail(lead: Lead): Promise<{ success: boolean; error?: string }> {
  const recipient = process.env.NOTIFICATION_EMAIL || 'no-reply@mojoflow.in';
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || `"MOJO FLOW" <${recipient}>`;

  let utmDetails = '';
  if (lead.utm_source || lead.utm_medium || lead.utm_campaign || lead.utm_content || lead.utm_term) {
    utmDetails = `\n\nUTM Attribution:
- Source: ${lead.utm_source || 'N/A'}
- Medium: ${lead.utm_medium || 'N/A'}
- Campaign: ${lead.utm_campaign || 'N/A'}
- Content: ${lead.utm_content || 'N/A'}
- Term: ${lead.utm_term || 'N/A'}`;
  }

  const timestampFormatted = new Date(lead.created_at || Date.now()).toUTCString();

  const emailBody = `New customer interested in Mojo Flow

Name: ${lead.name}
Email: ${lead.email}

Source: ${lead.source || 'MOJO FLOW Waitlist'}
Submitted At: ${timestampFormatted}${utmDetails}`;

  // If SMTP environment variables are configured, attempt delivery via Nodemailer
  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: recipient,
        subject: 'New Customer interested in Mojo Flow',
        text: emailBody,
      });

      return { success: true };
    } catch (error: any) {
      console.error('Failed to send notification email via Nodemailer:', error);
      return { success: false, error: error.message || 'SMTP delivery failed' };
    }
  }

  // Fallback mode for development/testing when SMTP credentials are not configured
  console.log('----------------------------------------------------');
  console.log('[WAITLIST EMAIL NOTIFICATION SIMULATION]');
  console.log(`To: ${recipient}`);
  console.log('Subject: New Customer interested in Mojo Flow');
  console.log('Body:\n' + emailBody);
  console.log('----------------------------------------------------');

  return { success: true };
}
