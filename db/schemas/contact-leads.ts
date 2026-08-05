import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const contactLeads = pgTable('contact_leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  phone: text('phone').notNull(),
  email: text('email'),
  social: text('social'),
  projectType: text('project_type').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
