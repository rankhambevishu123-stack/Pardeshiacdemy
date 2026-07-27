import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, HeartHandshake, Eye, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Counter } from "@/components/site/Counter";
import { stats, gallery, achievements } from "@/data/academy";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Paradeshi Academy — Karanjade, Panvel" },
      { name: "description", content: "Learn about Paradeshi Academy: our mission, values and 10+ year record of academic excellence from Nursery to 12th Commerce in Panvel." },
      { property: "og:title", content: "About Paradeshi Academy" },
      { property: "og:description", content: "Our mission, values and record of academic excellence in Karanjade, Panvel." },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Target, title: "Our Mission", text: "To make quality, affordable education accessible to every family in Panvel, and to turn effort into measurable results." },
  { icon: Eye, title: "Our Vision", text: "An academy where discipline, curiosity and confidence grow together — producing students ready for any board or career path." },
  { icon: HeartHandshake, title: "Our Values", text: "Honesty with parents, patience with students, and consistency in the classroom, every single day." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="About Paradeshi Academy" intro="Our Effort, Your Result — a promise we have kept for over a decade." />

      <section className="section-pa">
        <div className="container-pa grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <img src={gallery[0].src} alt="Paradeshi Academy classroom" loading="lazy" className="w-full rounded-[2rem] object-cover" />
          </Reveal>
          <Reveal direction="right">
            <SectionHeader center={false} eyebrow="Our Story" title="Education built on personal attention" />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Paradeshi Academy is committed to providing quality education with a
              focus on academic excellence, discipline, and holistic student
              development. We nurture young minds from Nursery to Commerce, ensuring
              every student receives personal attention and the right guidance to
              achieve success.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              What began as a small tuition class in Karanjade has grown into a full
              academy serving over a thousand students — yet the batch sizes have
              stayed deliberately small, because that is where our results come from.
            </p>
            <Link to="/admission" className="btn-pa mt-8">Join the Academy <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pa bg-secondary/60">
        <div className="container-pa">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div className="rounded-3xl border border-border bg-card p-8 text-center">
                  <p className="text-4xl font-extrabold text-gradient-brand"><Counter to={s.value} suffix={s.suffix} /></p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary"><p.icon size={22} /></span>
                  <h3 className="mt-5 text-lg font-extrabold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pa">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="Achievements" title="Milestones we are proud of" /></Reveal>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4">
            {achievements.map((a, i) => (
              <Reveal key={a} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card px-6 py-5 text-sm font-medium text-foreground">{a}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
