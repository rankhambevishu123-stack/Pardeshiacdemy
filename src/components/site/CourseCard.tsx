import { Link } from "@tanstack/react-router";
import { ArrowRight, Baby, Blocks, Pencil, BookOpen, LineChart } from "lucide-react";

const icons = { Baby, Blocks, Pencil, BookOpen, LineChart } as const;

export function CourseCard({
  course,
}: {
  course: { slug: string; icon: string; title: string; age: string; description: string; highlights: string[] };
}) {
  const Icon = icons[course.icon as keyof typeof icons] ?? BookOpen;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
      <div className="gradient-brand absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon size={24} />
      </span>
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground/70">{course.age}</p>
      <h3 className="mt-1.5 text-xl font-extrabold text-foreground">{course.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
      <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
        {course.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>
      <Link
        to="/courses"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-accent-foreground"
      >
        Learn More <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
