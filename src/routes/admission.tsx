import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Download } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { academy, courses, scholarships } from "@/data/academy";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admissions Open 2026-27 — Paradeshi Academy, Panvel" },
      { name: "description", content: "Apply for admission to Paradeshi Academy for 2026-27. Nursery to 12th Commerce, small batches, scholarships and free demo lectures in Karanjade, Panvel." },
      { property: "og:title", content: "Admissions Open 2026-27 — Paradeshi Academy" },
      { property: "og:description", content: "Enroll from Nursery to 12th Commerce. Limited seats per batch." },
    ],
  }),
  component: Admission,
});

function Admission() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero eyebrow="Admission" title="Admissions Open for 2026-27" intro="Limited seats per batch from Nursery to 12th Commerce. Book your free demo lecture today." />

      <section className="section-pa">
        <div className="container-pa grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal direction="left">
            <SectionHeader center={false} eyebrow="How it works" title="Three simple steps" />
            <ol className="mt-7 space-y-5">
              {[
                ["Enquire", "Send the form or call us — we'll understand your child's current standard and needs."],
                ["Free demo", "Attend up to two demo lectures with the actual batch teacher."],
                ["Enroll", "Complete the form, choose a fee plan and begin classes the same week."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <span>
                    <span className="block font-bold text-foreground">{t}</span>
                    <span className="text-sm text-muted-foreground">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8 grid gap-4">
              {scholarships.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-5">
                  <p className="font-bold text-foreground">{s.title}</p>
                  <p className="text-sm font-semibold text-primary">{s.amount}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
            <a href="/brochure.txt" download className="btn-pa-outline mt-8"><Download size={15} /> Download Brochure</a>
          </Reveal>

          <Reveal direction="right">
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-extrabold text-foreground">Admission Enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">We reply within one working day.</p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-secondary p-10 text-center">
                  <CheckCircle2 className="text-primary" size={36} />
                  <p className="font-bold text-foreground">Thank you! Your enquiry has been noted.</p>
                  <p className="text-sm text-muted-foreground">Our counsellor will call you on the number you provided.</p>
                </div>
              ) : (
                <form
                  className="mt-6 grid gap-4"
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-semibold text-foreground">
                      Student Name
                      <input required name="student" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-primary" />
                    </label>
                    <label className="text-sm font-semibold text-foreground">
                      Parent Name
                      <input required name="parent" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-primary" />
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-semibold text-foreground">
                      Mobile Number
                      <input required type="tel" name="phone" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-primary" />
                    </label>
                    <label className="text-sm font-semibold text-foreground">
                      Course
                      <select name="course" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-primary">
                        {courses.map((c) => <option key={c.slug}>{c.title}</option>)}
                      </select>
                    </label>
                  </div>
                  <label className="text-sm font-semibold text-foreground">
                    Message
                    <textarea name="message" rows={4} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-primary" />
                  </label>
                  <button type="submit" className="btn-pa mt-2">Submit Enquiry</button>
                  <p className="text-xs text-muted-foreground">Or call us directly at <a href={`tel:${academy.phoneRaw}`} className="font-semibold text-primary">{academy.phone}</a></p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
