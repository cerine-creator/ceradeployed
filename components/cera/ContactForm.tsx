'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const projectTypes = [
  { value: 'ecommerce', label: 'E-commerce (vente en ligne)' },
  { value: 'vitrine', label: 'Site vitrine (présentation activité)' },
  { value: 'refonte', label: 'Refonte de site existant' },
  { value: 'seo', label: 'Optimisation / SEO' },
  { value: 'autre', label: 'Autre / je ne sais pas encore' },
] as const;

const schema = z.object({
  name: z.string().min(2, 'Merci d\u2019indiquer votre nom complet'),
  phone: z.string().min(6, 'Numéro de téléphone invalide'),
  email: z.string().email('Email invalide').optional().or(z.literal('')),
  social: z.string().optional().or(z.literal('')),
  projectType: z.string().min(1, 'Choisissez un type de projet'),
  message: z.string().min(10, 'Décrivez votre projet en quelques mots (10 caractères min.)'),
  website: z.string().max(0).optional(), // honeypot field — must stay empty
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      social: '',
      projectType: '',
      message: '',
      website: '',
    },
  });

  const projectType = watch('projectType');

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('failed');
      toast.success('Message envoyé !', {
        description: 'Nous revenons vers vous très rapidement.',
      });
      reset();
    } catch {
      toast.error('Une erreur est survenue', {
        description: 'Merci de réessayer dans un instant.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:border-cera-emerald focus-visible:ring-cera-emerald/25';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-left">
      {/* Honeypot field — hidden from real users, catches bots */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Nom complet" required error={errors.name?.message}>
          <Input placeholder="Votre nom" className={inputClass} {...register('name')} />
        </Field>
        <Field label="Numéro de téléphone" required error={errors.phone?.message}>
          <Input placeholder="+213 5XX XX XX XX" className={inputClass} {...register('phone')} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <Input
            type="email"
            placeholder="vous@exemple.com"
            className={inputClass}
            {...register('email')}
          />
        </Field>
        <Field label="Instagram / Facebook (si disponible)" error={errors.social?.message}>
          <Input placeholder="@votre_compte" className={inputClass} {...register('social')} />
        </Field>
      </div>

      <Field label="Type de projet" required error={errors.projectType?.message}>
        <Select
          value={projectType}
          onValueChange={(v) => setValue('projectType', v, { shouldValidate: true })}
        >
          <SelectTrigger className={inputClass + ' w-full'}>
            <SelectValue placeholder="Choisissez le type de projet" />
          </SelectTrigger>
          <SelectContent>
            {projectTypes.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field
        label="Expliquez votre projet (produits, objectifs, idée…)"
        required
        error={errors.message?.message}
      >
        <Textarea
          rows={5}
          placeholder="Parlez-moi de votre projet…"
          className={inputClass}
          {...register('message')}
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cera-emerald px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cera-emerald-dark disabled:pointer-events-none disabled:opacity-70"
      >
        {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        Lancer mon projet
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-white/90">
        {label} {required && <span className="text-cera-emerald-light">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
