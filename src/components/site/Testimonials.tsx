import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/academy";

export function Testimonials() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12">
        <Quote className="absolute right-6 top-6 text-accent/40" size={56} />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-5 text-lg leading-relaxed text-foreground md:text-xl">“{t.quote}”</p>
            <footer className="mt-6">
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={() => go(-1)} aria-label="Previous review" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-accent hover:text-accent">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, d) => (
            <button
              key={d}
              onClick={() => setI(d)}
              aria-label={`Go to review ${d + 1}`}
              className={`h-2 rounded-full transition-all ${d === i ? "w-6 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next review" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-accent hover:text-accent">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
