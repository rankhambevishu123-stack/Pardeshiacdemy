import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { experiences } from "@/data/site";
import { Calendar, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences & Events — Maison Auréa" },
      { name: "description", content: "Chef's counters, wine series, weddings, and private celebrations at Maison Auréa." },
      { property: "og:title", content: "Experiences & Events — Maison Auréa" },
      { property: "og:description", content: "Chef's counters, wine series, weddings, and private celebrations at Maison Auréa." },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Occasions, made memorable."
        intro="From chef's counters to private celebrations, our team curates evenings you don't have to plan yourself."
        image={experiences[1].image}
      />
      <section className="bg-[#F7F4EF] py-24 md:py-32">
        <div className="container-luxe grid gap-16 md:grid-cols-2">
          {experiences.map((e) => (
            <article key={e.title} className="group">
              <div className="overflow-hidden aspect-[4/3]">
                <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
              </div>
              <h3 className="h-display mt-8 text-3xl md:text-4xl text-[#111111]">{e.title}</h3>
              <span className="divider-gold mt-4" />
              <p className="mt-5 text-[#2B211B]/75 leading-relaxed">{e.description}</p>
              <ul className="mt-6 flex flex-wrap gap-6 text-xs uppercase tracking-[0.25em] text-[#2B211B]/70">
                <li className="inline-flex items-center gap-2"><Calendar size={12} className="text-[#C9A96E]" /> {e.date}</li>
                <li className="inline-flex items-center gap-2"><Clock size={12} className="text-[#C9A96E]" /> {e.time}</li>
                <li className="inline-flex items-center gap-2"><MapPin size={12} className="text-[#C9A96E]" /> {e.location}</li>
              </ul>
              <Link to="/book" className="btn-gold mt-8 inline-flex">Enquire</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}