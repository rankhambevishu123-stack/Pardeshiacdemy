import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="gradient-brand relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="container-pa relative">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow-pa !text-accent"
        >
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            {intro}
          </motion.p>
        )}
        <nav aria-label="Breadcrumb" className="mt-7 flex items-center gap-2 text-xs font-medium text-white/70">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight size={14} />
          <span className="text-accent">{eyebrow}</span>
        </nav>
      </div>
    </section>
  );
}
