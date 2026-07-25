import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { venues } from "@/data/site";
import { MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/venues")({
  head: () => ({
    meta: [
      { title: "Our Venues — Maison Auréa" },
      { name: "description", content: "Auburn, The Vault, Atrium, and Salon Privé — four rooms under one house." },
      { property: "og:title", content: "Our Venues — Maison Auréa" },
      { property: "og:description", content: "Auburn, The Vault, Atrium, and Salon Privé — four rooms under one house." },
    ],
    links: [{ rel: "canonical", href: "/venues" }],
  }),
  component: VenuesPage,
});

function VenuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Venues"
        title="Four rooms. One house."
        intro="Each address is a different mood — but all share the same standard of craft and welcome."
        image={venues[0].image}
      />

      <section className="bg-[#F7F4EF] py-24 md:py-32">
        <div className="container-luxe space-y-24">
          {venues.map((v, i) => (
            <article key={v.slug} className="grid gap-10 md:gap-16 md:grid-cols-12 items-center">
              <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="overflow-hidden">
                  <img src={v.image} alt={v.name} loading="lazy" className="w-full aspect-[16/11] object-cover" />
                </div>
              </div>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                <p className="eyebrow">{v.tagline}</p>
                <h2 className="h-display mt-3 text-4xl md:text-5xl text-[#111111]">{v.name}</h2>
                <span className="divider-gold mt-5" />
                <p className="mt-6 text-[#2B211B]/75 leading-relaxed">{v.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-[#2B211B]/80">
                  <li className="inline-flex items-center gap-2"><MapPin size={14} className="text-[#C9A96E]" /> {v.location}</li>
                  <li className="flex items-center gap-2"><Clock size={14} className="text-[#C9A96E]" /> {v.hours}</li>
                </ul>
                <div className="mt-8 flex gap-3 flex-wrap">
                  <Link to="/book" className="btn-gold-solid">Book Now</Link>
                  <Link to="/menu" className="btn-gold">Explore Menu</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}