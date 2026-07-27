import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, BookOpen, Calculator, GraduationCap, Lightbulb, Trophy,
  Phone, Download, Bell, CalendarDays, Award, Compass, Play, Sparkles, Quote,
} from "lucide-react";
import { academy, stats, courses, whyChooseUs, gallery, notices, events, results, scholarships, faqs, posts, achievements, faculty } from "@/data/academy";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CourseCard } from "@/components/site/CourseCard";
import { FeatureIcon } from "@/components/site/FeatureIcon";
import { Testimonials } from "@/components/site/Testimonials";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paradeshi Academy — Nursery to Commerce Coaching in Panvel" },
      { name: "description", content: "Paradeshi Academy, Karanjade Panvel: quality education from Nursery to 12th Commerce with experienced faculty, small batches and 95% success rate." },
      { property: "og:title", content: "Paradeshi Academy — Our Effort, Your Result." },
      { property: "og:description", content: "Nursery to 12th Commerce coaching in Karanjade, Panvel with experienced faculty and personal attention." },
    ],
  }),
  component: Home,
});

const floatIcons = [
  { Icon: BookOpen, className: "left-[6%] top-[22%]", delay: 0 },
  { Icon: Calculator, className: "right-[10%] top-[16%]", delay: 1.2 },
  { Icon: GraduationCap, className: "left-[14%] bottom-[16%]", delay: 2.1 },
  { Icon: Lightbulb, className: "right-[6%] bottom-[24%]", delay: 0.8 },
  { Icon: Trophy, className: "left-[45%] top-[10%]", delay: 1.7 },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-brand relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        {floatIcons.map(({ Icon, className, delay }, i) => (
          <span key={i} className={`pointer-events-none absolute hidden text-white/15 lg:block ${className} animate-float-soft`} style={{ animationDelay: `${delay}s` }}>
            <Icon size={44} />
          </span>
        ))}

        <div className="container-pa relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md"
            >
              <Sparkles size={14} className="text-accent" /> Admissions open for 2026-27
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]"
            >
              Empowering Students.
              <span className="block text-accent">Building Bright Futures.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              Paradeshi Academy provides quality education from Nursery to Commerce
              with experienced faculty, personalized attention, and a result-oriented
              learning environment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/admission" className="btn-pa !bg-accent !text-accent-foreground hover:!bg-white">
                Admission Open <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-pa-outline !border-white/50 !text-white hover:!text-accent-foreground">
                Contact Us
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-accent"
            >
              {academy.tagline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/25 shadow-2xl">
              <img src={academy.heroImage} alt="Happy students of Paradeshi Academy" width={1280} height={1280} className="h-full w-full object-cover" />
            </div>
            <div className="glass-card absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-2xl px-5 py-3 !bg-background/85">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-primary"><Trophy size={18} /></span>
              <span>
                <span className="block text-lg font-extrabold text-foreground">95% Success Rate</span>
                <span className="block text-xs text-muted-foreground">10+ years of consistent results</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ANNOUNCEMENT MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-secondary py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm font-semibold text-muted-foreground">
          {[...notices, ...notices].map((n, i) => (
            <span key={i} className="flex items-center gap-2">
              <Bell size={14} className="text-accent-foreground/70" />
              <span className="text-primary">{n.tag}:</span> {n.title}
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="section-pa">
        <div className="container-pa grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-3xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-xl hover:shadow-primary/5">
                <p className="text-4xl font-extrabold text-gradient-brand md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="section-pa bg-secondary/60">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="Our Courses" title="Programmes from Nursery to Commerce" intro="Structured learning at every stage — designed around the age, board and ambition of each student." /></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.07}><CourseCard course={c} /></Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="gradient-brand flex h-full flex-col justify-between rounded-3xl p-7 text-white">
                <div>
                  <h3 className="text-xl font-extrabold">Not sure which batch fits?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Speak to our counsellor and book two free demo lectures before you decide.
                  </p>
                </div>
                <a href={`tel:${academy.phoneRaw}`} className="btn-pa mt-6 !bg-accent !text-accent-foreground hover:!bg-white">
                  <Phone size={15} /> Talk to us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pa">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="Why Choose Us" title="A learning environment built around results" intro="Eight promises that shape every classroom, every test and every parent conversation." /></Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05} direction={i % 2 ? "right" : "left"}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-primary/5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <FeatureIcon name={w.icon} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION BANNER */}
      <section className="container-pa">
        <Reveal>
          <div className="gradient-brand relative overflow-hidden rounded-[2rem] px-8 py-14 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <h2 className="relative text-3xl font-extrabold text-white md:text-[2.6rem]">
              Admissions Open for Academic Year 2026-27
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-white/80">
              Limited seats per batch. Reserve your child's place today and unlock
              early-bird scholarship benefits.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/admission" className="btn-pa !bg-accent !text-accent-foreground hover:!bg-white">Enroll Now</Link>
              <a href="/brochure.txt" download className="btn-pa-outline !border-white/50 !text-white hover:!text-accent-foreground">
                <Download size={15} /> Download Brochure
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* NOTICE BOARD + EVENTS */}
      <section className="section-pa">
        <div className="container-pa grid gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-3xl border border-border bg-card p-8">
              <p className="eyebrow-pa"><Bell size={14} /> Notice Board</p>
              <h2 className="mt-3 text-2xl font-extrabold text-foreground">Latest Announcements</h2>
              <ul className="mt-6 space-y-4">
                {notices.map((n) => (
                  <li key={n.title} className="flex gap-4 rounded-2xl bg-secondary/70 p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-[11px] font-bold text-primary-foreground">
                      {n.date.split(" ")[0]}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-foreground">{n.title}</span>
                      <span className="text-xs text-muted-foreground">{n.date} · {n.tag}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="h-full rounded-3xl border border-border bg-card p-8">
              <p className="eyebrow-pa"><CalendarDays size={14} /> Upcoming Events</p>
              <h2 className="mt-3 text-2xl font-extrabold text-foreground">What's Coming Up</h2>
              <ul className="mt-6 space-y-5">
                {events.map((e) => (
                  <li key={e.title} className="border-l-2 border-accent pl-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{e.date}</p>
                    <p className="mt-1 font-bold text-foreground">{e.title}</p>
                    <p className="text-sm text-muted-foreground">{e.place}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTS + ACHIEVEMENTS */}
      <section className="section-pa bg-secondary/60">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="Result Highlights" title="Our students, their milestones" intro="A snapshot of the 2025 academic year across the school and commerce sections." /></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {results.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.06}>
                  <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/20 text-primary"><Award size={22} /></span>
                    <span className="min-w-0">
                      <span className="block text-2xl font-extrabold text-gradient-brand">{r.score}</span>
                      <span className="block truncate font-semibold text-foreground">{r.name}</span>
                      <span className="block text-xs text-muted-foreground">{r.detail}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal direction="right">
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <h3 className="text-xl font-extrabold text-foreground">Student Achievements</h3>
                <ul className="mt-5 space-y-4">
                  {achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Trophy size={17} className="mt-0.5 shrink-0 text-accent-foreground/70" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-pa">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="Photo Gallery" title="Life at Paradeshi Academy" intro="Classrooms, activities, events, prize distributions and annual functions." /></Reveal>
          <div className="mt-12 grid auto-rows-[190px] grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={g.alt} delay={i * 0.05} className={g.span}>
                <figure className="group relative h-full overflow-hidden rounded-3xl">
                  <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-xs font-bold uppercase tracking-[0.14em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {g.category}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-pa-outline">View Full Gallery <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="section-pa bg-secondary/60">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="Video Gallery" title="See our classrooms in motion" intro="Campus tours, student stories and event highlights." /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Campus Tour 2026", "Annual Function Highlights", "Topper Talks: Study Routine"].map((t, i) => (
              <Reveal key={t} delay={i * 0.08}>
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

      {/* TESTIMONIALS */}
      <section className="section-pa">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="Testimonials" title="What students and parents say" intro="Honest words from the families who learn with us every day." /></Reveal>
          <Testimonials />
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-pa bg-secondary/60">
        <div className="container-pa grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={gallery[0].src} alt="Paradeshi Academy classroom" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal direction="right">
            <SectionHeader center={false} eyebrow="About Us" title="About Paradeshi Academy" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Paradeshi Academy is committed to providing quality education with a
              focus on academic excellence, discipline, and holistic student
              development. We nurture young minds from Nursery to Commerce, ensuring
              every student receives personal attention and the right guidance to
              achieve success.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[["Nursery to 12th", "One academy for the full journey"], ["Small batches", "12–18 students per batch"], ["Weekly reports", "Parents always in the loop"], ["Doubt sessions", "Daily one-on-one slots"]].map(([t, s]) => (
                <div key={t} className="rounded-2xl border border-border bg-card p-4">
                  <p className="font-bold text-foreground">{t}</p>
                  <p className="text-sm text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-pa mt-8">Read Our Story <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      {/* FACULTY */}
      <section className="section-pa">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="Our Faculty" title="Teachers who know every student by name" intro="Experienced subject specialists guiding each batch personally." /></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.07}>
                <article className="group overflow-hidden rounded-3xl border border-border bg-card text-center transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="aspect-square overflow-hidden">
                    <img src={f.photo} alt={f.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-foreground">{f.name}</h3>
                    <p className="text-sm text-primary">{f.subject}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{f.experience} experience</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOLARSHIP + CAREER GUIDANCE */}
      <section className="section-pa bg-secondary/60">
        <div className="container-pa grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal direction="left">
            <div className="h-full rounded-3xl border border-border bg-card p-8">
              <p className="eyebrow-pa"><Award size={14} /> Scholarships</p>
              <h2 className="mt-3 text-2xl font-extrabold text-foreground">Support for deserving students</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {scholarships.map((s) => (
                  <div key={s.title} className="rounded-2xl bg-secondary/70 p-5">
                    <p className="font-bold text-foreground">{s.title}</p>
                    <p className="mt-1 text-sm font-semibold text-primary">{s.amount}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="gradient-brand flex h-full flex-col rounded-3xl p-8 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><Compass size={22} /></span>
              <h2 className="mt-5 text-2xl font-extrabold">Career Guidance</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Stream selection after 10th, CA / CS / BBA pathways after 12th, aptitude
                sessions and one-to-one counselling for both students and parents.
              </p>
              <Link to="/contact" className="btn-pa mt-auto !bg-accent !text-accent-foreground hover:!bg-white">Book a session</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BLOG */}
      <section className="section-pa">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="From the Blog" title="Study guidance worth reading" intro="Practical advice from our faculty for students and parents." /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{p.date} · {p.readTime}</p>
                  <h3 className="mt-3 text-lg font-extrabold text-foreground group-hover:text-primary">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <Link to="/blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">Read more <ArrowRight size={15} /></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pa bg-secondary/60">
        <div className="container-pa">
          <Reveal><SectionHeader eyebrow="FAQ" title="Questions parents ask us most" /></Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="mb-3 overflow-hidden rounded-2xl border border-border bg-card px-5">
                  <AccordionTrigger className="text-left text-base font-bold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section-pa">
        <div className="container-pa grid gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <SectionHeader center={false} eyebrow="Visit Us" title="Come see the academy for yourself" intro="Walk in for a campus tour, meet the faculty and book a free demo lecture." />
            <ul className="mt-7 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Quote size={0} />
                <span className="text-muted-foreground">{academy.addressLines.join(", ")}</span>
              </li>
              <li><a href={`tel:${academy.phoneRaw}`} className="font-bold text-primary hover:text-accent-foreground">{academy.phone}</a></li>
              <li><a href={`mailto:${academy.email}`} className="font-bold text-primary hover:text-accent-foreground">{academy.email}</a></li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-pa">Contact Us</Link>
              <Link to="/admission" className="btn-pa-outline">Enroll Now</Link>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="h-[340px] overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Paradeshi Academy location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(academy.mapQuery)}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
