'use client';

import { useEffect, useRef, useState } from 'react';
import { LogoMark } from './Logo';
import { cn } from '@/utils/cn';

type StepKind = 'text' | 'brand' | 'instant';
interface Step {
  kind: StepKind;
  text?: string;
  holdMs: number;
}

const STEPS: Step[] = [
  { kind: 'instant', text: 'Hey', holdMs: 600 },
  { kind: 'brand', holdMs: 1200 },
];

const TYPE_SPEED_MS = 48;

export function IntroOverlay() {
  const [mounted, setMounted] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [leaving, setLeaving] = useState(false);
  const finishRef = useRef<() => void>(() => {});

  useEffect(() => {
    document.body.classList.add('intro-lock');

    let cancelled = false;
    let finished = false;
    let i = 0;
    const pendingTimers: ReturnType<typeof setTimeout>[] = [];

    function finish() {
      if (finished) return;
      finished = true;
      pendingTimers.forEach(clearTimeout);
      setLeaving(true);
      document.body.classList.remove('intro-lock');
      setTimeout(() => setMounted(false), 750);
    }
    finishRef.current = finish;

    function runStep() {
      if (cancelled || i >= STEPS.length) {
        if (!cancelled) finish();
        return;
      }
      const step = STEPS[i];
      setStepIndex(i);
      setTyped('');

      if (step.kind === 'brand' || step.kind === 'instant') {
        if (step.kind === 'instant') setTyped(step.text ?? '');
        const t = setTimeout(() => {
          i += 1;
          runStep();
        }, step.holdMs);
        pendingTimers.push(t);
        return;
      }

      const text = step.text ?? '';
      let charIndex = 0;
      const typeNext = () => {
        if (cancelled) return;
        charIndex += 1;
        setTyped(text.slice(0, charIndex));
        if (charIndex < text.length) {
          const t = setTimeout(typeNext, TYPE_SPEED_MS);
          pendingTimers.push(t);
        } else {
          const t = setTimeout(() => {
            i += 1;
            runStep();
          }, step.holdMs);
          pendingTimers.push(t);
        }
      };
      const t = setTimeout(typeNext, TYPE_SPEED_MS);
      pendingTimers.push(t);
    }

    runStep();

    return () => {
      cancelled = true;
      pendingTimers.forEach(clearTimeout);
    };
  }, []);

  if (!mounted) return null;

  const step = STEPS[stepIndex];

  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cera-ink text-white transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]',
        leaving && '-translate-y-full'
      )}
      onClick={() => finishRef.current()}
      role="button"
      tabIndex={-1}
      aria-label="Passer l'introduction"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 45% at 50% 0%, rgba(16,163,122,0.22), transparent 65%), radial-gradient(45% 40% at 85% 80%, rgba(16,163,122,0.10), transparent 60%)',
        }}
      />

      <div className="relative flex min-h-[10rem] flex-col items-center justify-center px-6 text-center">
        {step?.kind === 'brand' ? (
          <span className="flex items-center gap-2 font-intro text-4xl font-medium italic sm:text-6xl">
            <span>C&rsquo;est</span>
            <span className="flex items-center">
              <LogoMark className="h-9 w-9 text-cera-emerald-light sm:h-12 sm:w-12" />
              <span className="ml-0.5">era</span>
            </span>
          </span>
        ) : (
          <span className="max-w-2xl font-intro text-4xl font-medium italic leading-snug sm:text-6xl">
            {typed}
            {step?.kind === 'text' && (
              <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.05em] animate-[cera-caret_1s_steps(1)_infinite] bg-cera-emerald-light align-middle" />
            )}
          </span>
        )}
      </div>

      <p className="absolute bottom-9 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-white/35 opacity-0 animate-[cera-fade-in_.5s_ease_.8s_forwards]">
        Cliquez pour continuer
      </p>
    </div>
  );
}
