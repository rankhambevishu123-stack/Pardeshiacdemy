import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Play } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { gallery } from "@/data/academy";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo & Video Gallery — Paradeshi Academy" },
      { name: "description", content: "Photos and videos from Paradeshi Academy: classrooms, activities, events, prize distributions and annual functions in Karanjade, Panvel." },
      { property: "og:title", content: "Gallery — Paradeshi Academy" },
      { property: "og:description", content: "Classroom, activity, event and annual function moments from our campus." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments from our campus" intro="Classrooms, activities, events, prize distributions and annual functions." />

      <section className="section-pa">
        <div className="container-pa">
          <div className="grid auto-rows-[190px] grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={g.alt} delay={i * 0.05} className={g.span}>
                <button onClick={() => setActive(i)} className="group relative h-full w-full overflow-hidden rounded-3xl" aria-label={`Open ${g.category} photo`}>
                  <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-left text-xs font-bold uppercase tracking-[0.14em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {g.category}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pa bg-secondary/60">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="Video Gallery" title="Watch our academy in action" /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Campus Tour 2026", "Annual Function Highlights", "Topper Talks: Study Routine"].map((t) => (
              <Reveal key={t}>
                <div className="group relative aspect-video overflow-hidden rounded-3xl gradient-brand">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-white/20 backdrop-blur-md transition-transform group-hover:scale-110">
                      <Play size={24} className="ml-1 text-white" fill="currentColor" />
                    </span>
                  </div>
                  <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm font-bold text-white">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-foreground/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button onClick={() => setActive(null)} aria-label="Close" className="absolute right-5 top-5 text-white"><X size={26} /></button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="max-h-[85vh] w-auto rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
