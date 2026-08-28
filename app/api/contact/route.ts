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

    return NextResponse.json({ success: true, data: { id: lead.id } }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
