import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CourseCard } from "@/components/site/CourseCard";
import { courses, faqs } from "@/data/academy";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Nursery to 12th Commerce | Paradeshi Academy" },
      { name: "description", content: "Explore Paradeshi Academy courses: Nursery, Jr KG, Sr KG, School Section (1st–10th) and Commerce (11th–12th) with small batches and weekly tests." },
      { property: "og:title", content: "Courses at Paradeshi Academy" },
      { property: "og:description", content: "Nursery, Jr KG, Sr KG, 1st–10th and 11th–12th Commerce programmes in Panvel." },
    ],
  }),
  component: Courses,
});

function Courses() {
  return (
    <>
      <PageHero eyebrow="Courses" title="Programmes for every stage of learning" intro="From a child's very first classroom to board and commerce examinations." />

      <section className="section-pa">
        <div className="container-pa grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.07}><CourseCard course={c} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section-pa bg-secondary/60">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="Good to know" title="Course FAQs" /></Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`c-${i}`} className="mb-3 overflow-hidden rounded-2xl border border-border bg-card px-5">
                  <AccordionTrigger className="text-left text-base font-bold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <div className="mt-10 text-center">
            <Link to="/admission" className="btn-pa">Apply for Admission <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
