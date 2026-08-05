import { cn } from '@/utils/cn';

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-8', className)}
      aria-hidden="true"
    >
      <path
        d="M50 20C45.9 13.7 38.9 9.5 31 9.5C18.5735 9.5 8.5 19.5735 8.5 32C8.5 44.4265 18.5735 54.5 31 54.5C38.9 54.5 45.9 50.3 50 44"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="50" cy="44" r="5.6" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  showWeb = false,
}: {
  className?: string;
  markClassName?: string;
  showWeb?: boolean;
}) {
  return (
    <span className={cn('inline-flex items-baseline', className)}>
      <LogoMark className={cn('mr-0.5 h-8 w-8 self-center text-cera-emerald', markClassName)} />
      <span className="font-display text-xl font-bold tracking-tight">era</span>
      {showWeb && (
        <span className="ml-1.5 font-display text-xl font-medium tracking-tight opacity-60">
          Web
        </span>
      )}
    </span>
  );
}
