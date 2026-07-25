import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Auréa" },
      { name: "description", content: "Our story, philosophy, and the people who built Maison Auréa." },
      { property: "og:title", content: "About — Maison Auréa" },
      { property: "og:description", content: "Our story, philosophy, and the people who built Maison Auréa." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { t: "Our Story", b: "Founded in 2018 as a single dining room in Colaba, Maison Auréa has grown into a small collection of restaurants, bars, and private rooms — each held together by the same idea of the perfect evening." },
  { t: "Our Vision", b: "To become the most trusted address in Indian hospitality — a place where guests return, not for what is new, but for what is remembered." },
  { t: "Our Mission", b: "To design evenings that feel private, considered, and quietly luxurious — from the first greeting at the door to the last pour of the night." },
  { t: "Our Philosophy", b: "Hospitality is a craft of attention. We choose ingredients, light, music, and words with the same care." },
  { t: "What Sets Us Apart", b: "A ratio of one host to every eight guests. A wine list personally kept by our master sommelier. A kitchen that writes menus like letters, seasonally." },
  { t: "Our Commitment", b: "To every guest, whether it is their first evening or their fiftieth: an unhurried welcome, and a table that feels like it was waiting only for them." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the House"
        title="Hospitality, quietly perfected."
        intro="Six years, four venues, and one obsession — the modern art of the evening."
        image={site.aboutImg}
      />

      <section className="bg-[#F7F4EF] py-28 md:py-36">
        <div className="container-luxe grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={site.aboutImg} alt="Our kitchen" className="w-full aspect-[3/4] object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-7 space-y-12">
            {pillars.map((p) => (
              <div key={p.t}>
                <p className="eyebrow">{p.t}</p>
                <h3 className="h-display mt-3 text-3xl md:text-4xl text-[#111111]">{p.b.split(".")[0]}.</h3>
                <span className="divider-gold mt-4" />
                <p className="mt-5 text-[#2B211B]/75 leading-relaxed max-w-2xl">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-28">
        <div className="container-luxe grid gap-10 md:grid-cols-3 text-center">
          {[
            ["06", "Years of hospitality"],
            ["04", "Venues under one house"],
            ["120k", "Evenings served"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="h-display text-6xl md:text-7xl text-[#C9A96E]">{n}</p>
              <p className="mt-4 eyebrow text-[#E8DED0]/70">{l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}