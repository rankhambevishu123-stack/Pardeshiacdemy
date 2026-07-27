import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { faculty } from "@/data/academy";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Our Faculty — Paradeshi Academy, Panvel" },
      { name: "description", content: "Meet the experienced teachers of Paradeshi Academy — subject specialists in maths, science, accounts, economics, languages and pre-primary education." },
      { property: "og:title", content: "Faculty of Paradeshi Academy" },
      { property: "og:description", content: "Experienced subject specialists guiding every batch personally." },
    ],
  }),
  component: Faculty,
});

function Faculty() {
  return (
    <>
      <PageHero eyebrow="Faculty" title="The teachers behind the results" intro="Subject specialists who know every student by name, strength and weakness." />
      <section className="section-pa">
        <div className="container-pa grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.07}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card text-center transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10">
                <div className="aspect-square overflow-hidden">
                  <img src={f.photo} alt={f.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h2 className="font-extrabold text-foreground">{f.name}</h2>
                  <p className="text-sm text-primary">{f.subject}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{f.experience} experience</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
