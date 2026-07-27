import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { posts } from "@/data/academy";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Study Tips & Guidance | Paradeshi Academy" },
      { name: "description", content: "Study plans, board exam habits and career guidance articles written by the faculty of Paradeshi Academy, Panvel." },
      { property: "og:title", content: "Paradeshi Academy Blog" },
      { property: "og:description", content: "Practical study and career guidance for students and parents." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Guidance from our classrooms" intro="Study techniques, exam strategy and career advice from our faculty." />
      <section className="section-pa">
        <div className="container-pa grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{p.date} · {p.readTime}</p>
                <h2 className="mt-3 text-lg font-extrabold text-foreground group-hover:text-primary">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">Read more <ArrowRight size={15} /></span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
