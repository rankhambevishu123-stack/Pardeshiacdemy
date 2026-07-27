import { Link } from "@tanstack/react-router";
import { academy } from "@/data/academy";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label={`${academy.name} home`}>
      <span className="gradient-brand grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-base font-extrabold tracking-tight text-white shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-105">
        PA
      </span>
      {!compact && (
        <span className="min-w-0 leading-tight">
          <span className="block truncate text-[15px] font-extrabold uppercase tracking-[0.14em] text-foreground">
            Paradeshi <span className="text-primary">Academy</span>
          </span>
          <span className="block truncate text-[11px] font-medium text-muted-foreground">
            {academy.tagline}
          </span>
        </span>
      )}
    </Link>
  );
}
