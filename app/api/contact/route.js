import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * POST /api/contact — handle contact form submissions and email them to
 * the sales inbox using SMTP credentials from environment variables.
 *
 * Required env vars (set these in your Hostinger hosting panel, or in a
 * local .env file for development — see .env.example):
 *
 *   SMTP_HOST   e.g. smtp.hostinger.com
 *   SMTP_PORT   465 (SSL) or 587 (STARTTLS)
 *   SMTP_USER   the mailbox that sends the notification, e.g. sales@westestimating.com
 *   SMTP_PASS   that mailbox's password
 *   CONTACT_TO  where submissions are delivered — defaults to
 *               josephwilliamrichards@gmail.com below if not set, so you
 *               don't have to set this env var unless you want to change it
 *
 * If SMTP isn't configured yet (e.g. first local run), submissions are
 * simply logged to the console instead of failing outright.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Default inbox for contact-form submissions. Override by setting the
// CONTACT_TO environment variable in your Hostinger hosting panel.
const DEFAULT_CONTACT_TO = 'josephwilliamrichards@gmail.com';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, phone, company, service, message } = body || {};

  const errors = {};
  if (!name || String(name).trim().length < 2) errors.name = 'Please enter your name.';
  if (!email || !EMAIL_RE.test(String(email))) errors.email = 'Please enter a valid email.';
  if (!message || String(message).trim().length < 10)
    errors.message = 'Please provide a bit more detail (10+ characters).';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const submission = {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: phone ? String(phone).trim() : 'Not provided',
    company: company ? String(company).trim() : 'Not provided',
    service: service ? String(service).trim() : 'Not specified',
    message: String(message).trim(),
    at: new Date().toISOString()
  };

  console.log('[contact]', JSON.stringify(submission));

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      const port = Number(SMTP_PORT) || 465;
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
        auth: { user: SMTP_USER, pass: SMTP_PASS }
      });

      // Verify the connection/auth first so a bad host/port/credential shows
      // up clearly in the server logs instead of failing deep inside sendMail.
      try {
        await transporter.verify();
      } catch (verifyErr) {
        console.error('[contact] SMTP verify failed:', {
          message: verifyErr.message,
          code: verifyErr.code,
          responseCode: verifyErr.responseCode,
          command: verifyErr.command
        });
        throw verifyErr;
      }

      const to = CONTACT_TO || DEFAULT_CONTACT_TO;

      await transporter.sendMail({
        from: `"West Estimating Website" <${SMTP_USER}>`,
        to,
        replyTo: submission.email,
        subject: `New estimate request from ${submission.name}`,
        text: [
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          `Phone: ${submission.phone}`,
          `Company: ${submission.company}`,
          `Service: ${submission.service}`,
          '',
          'Message:',
          submission.message,
          '',
          `Submitted: ${submission.at}`
        ].join('\n'),
        html: `
          <div style="font-family: Arial, sans-serif; color:#0F172A; max-width:560px;">
            <h2 style="color:#0A2540;">New estimate request</h2>
            <table style="border-collapse:collapse; width:100%;">
              <tr><td style="padding:6px 0; font-weight:bold;">Name</td><td>${escapeHtml(submission.name)}</td></tr>
              <tr><td style="padding:6px 0; font-weight:bold;">Email</td><td>${escapeHtml(submission.email)}</td></tr>
              <tr><td style="padding:6px 0; font-weight:bold;">Phone</td><td>${escapeHtml(submission.phone)}</td></tr>
              <tr><td style="padding:6px 0; font-weight:bold;">Company</td><td>${escapeHtml(submission.company)}</td></tr>
              <tr><td style="padding:6px 0; font-weight:bold;">Service</td><td>${escapeHtml(submission.service)}</td></tr>
            </table>
            <p style="margin-top:16px; font-weight:bold;">Message</p>
            <p style="white-space:pre-wrap; background:#F1F5F9; padding:12px; border-radius:8px;">${escapeHtml(submission.message)}</p>
            <p style="color:#94a3b8; font-size:12px; margin-top:16px;">Submitted ${submission.at}</p>
          </div>
        `
      });
    } catch (err) {
      console.error('[contact] email send failed:', {
        message: err.message,
        code: err.code,
        responseCode: err.responseCode,
        command: err.command
      });
      return NextResponse.json(
        {
          ok: false,
          error:
            'We could not send your message right now. Please email sales@westestimating.com directly or call (737) 770-7167.'
        },
        { status: 502 }
      );
    }
  } else {
    console.warn('[contact] SMTP env vars not set — submission logged only, no email sent.');
  }

  return NextResponse.json({
    ok: true,
    message: 'Thanks for reaching out. Our estimating team will follow up within one business day.'
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * GET /api/contact — diagnostic only. Visit this URL directly in a browser
 * on the live site to check whether SMTP env vars are present and whether
 * the server can actually authenticate with your mail provider, without
 * sending a real email or exposing credentials in the response.
 *
 * Delete this handler once the contact form is confirmed working, or leave
 * it — it never reveals SMTP_PASS or full error internals to the client.
 */
export async function GET() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

  const configured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);
  if (!configured) {
    return NextResponse.json({
      configured: false,
      message:
        'SMTP_HOST, SMTP_USER, and/or SMTP_PASS are missing from the environment. Set them in your Hostinger hosting panel (Node.js app → Environment variables), then restart the app.'
    });
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  try {
    await transporter.verify();
    return NextResponse.json({
      configured: true,
      connected: true,
      host: SMTP_HOST,
      port,
      user: SMTP_USER,
      to: CONTACT_TO || DEFAULT_CONTACT_TO,
      message: 'SMTP connection and authentication succeeded.'
    });
  } catch (err) {
    return NextResponse.json({
      configured: true,
      connected: false,
      host: SMTP_HOST,
      port,
      user: SMTP_USER,
      error: err.message,
      code: err.code || null,
      responseCode: err.responseCode || null,
      message:
        'SMTP is configured but the connection/authentication failed. Double-check SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS — and confirm your host allows outbound SMTP on this port.'
    });
  }
}
