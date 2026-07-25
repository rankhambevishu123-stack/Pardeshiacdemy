import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { gallery } from "@/data/site";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Maison Auréa" },
      { name: "description", content: "Fragments of our nights — interiors, food, ambience, and moments at Maison Auréa." },
      { property: "og:title", content: "Gallery — Maison Auréa" },
      { property: "og:description", content: "Fragments of our nights — interiors, food, ambience, and moments at Maison Auréa." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Fragments of our nights." image={gallery[0].src} />
      <section className="bg-[#F7F4EF] py-24 md:py-32">
        <div className="container-luxe">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[260px]">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className={`group relative overflow-hidden ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-veil-fade"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-[#C9A96E] hover:text-[#F7F4EF]"
            onClick={() => setOpen(null)}
          >
            <X size={28} />
          </button>
          <img
            src={gallery[open].src}
            alt={gallery[open].alt}
            className="max-h-[85vh] max-w-[92vw] object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}