import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/db';
import { contactLeads } from '@/db/schemas/contact-leads';
import { handleApiError } from '@/lib/api-error-response';
import { ValidationError } from '@/lib/errors';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email().optional().or(z.literal('')),
  social: z.string().optional().or(z.literal('')),
  projectType: z.string().min(1),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot field
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      throw new ValidationError('Données de formulaire invalides');
    }

    const { name, phone, email, social, projectType, message, website } = parsed.data;

    // Honeypot check: if bot filled the hidden field, silently pretend success
    if (website) {
      return NextResponse.json({ success: true, data: { id: 'ok' } }, { status: 201 });
    }

    const [lead] = await db
      .insert(contactLeads)
      .values({
        name,
        phone,
        email: email || null,
        social: social || null,
        projectType,
        message,
      })
      .returning({ id: contactLeads.id });

    // Send instant notification via Telegram Bot if TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are set
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (botToken && chatId) {
      const text = `📬 *Nouveau message client (Cera)*\n\n👤 *Nom:* ${name}\n📞 *Téléphone:* ${phone}\n📧 *Email:* ${email || 'Non renseigné'}\n📱 *Réseaux:* ${social || 'Non renseigné'}\n🚀 *Projet:* ${projectType}\n📝 *Message:* ${message}`;

      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      }).catch((err) => console.error('[TELEGRAM NOTIFICATION ERROR]', err));
    }

    // Send email notification via Resend if RESEND_API_KEY and NOTIFICATION_EMAIL are set
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    if (resendApiKey && notificationEmail) {
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Cera Website <onboarding@resend.dev>',
          to: [notificationEmail],
          subject: `📬 Nouveau lead: ${name} (${projectType})`,
          html: `
            <h2>Nouveau message depuis ceradz.vercel.app</h2>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || 'N/A'}</p>
            <p><strong>Réseaux:</strong> ${social || 'N/A'}</p>
            <p><strong>Type de projet:</strong> ${projectType}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        }),
      }).catch((err) => console.error('[RESEND EMAIL ERROR]', err));
    }

    return NextResponse.json({ success: true, data: { id: lead.id } }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
