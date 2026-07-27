import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { academy, courses } from "@/data/academy";

export function Footer() {
  return (
    <footer className="gradient-brand relative overflow-hidden text-white">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="container-pa relative grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2 md:max-w-sm">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-base font-extrabold text-primary">PA</span>
            <span className="leading-tight">
              <span className="block text-[15px] font-extrabold uppercase tracking-[0.14em]">Paradeshi Academy</span>
              <span className="block text-[11px] text-accent">{academy.tagline}</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            Quality education from Nursery to Commerce with experienced faculty,
            personalised attention and a result-oriented learning environment in
            Karanjade, Panvel.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={academy.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-foreground">
              <Instagram size={17} />
            </a>
            <a href={`https://wa.me/${academy.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-foreground">
              <MessageCircle size={17} />
            </a>
            <a href={`tel:${academy.phoneRaw}`} aria-label="Call" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-foreground">
              <Phone size={17} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {[["/about","About Us"],["/courses","Courses"],["/faculty","Faculty"],["/gallery","Gallery"],["/admission","Admission"],["/blog","Blog"],["/contact","Contact"]].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-accent">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Courses</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link to="/courses" className="transition-colors hover:text-accent">{c.title}</Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-accent">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li className="flex items-start gap-2"><Phone size={15} className="mt-0.5 shrink-0" /><a href={`tel:${academy.phoneRaw}`} className="hover:text-accent">{academy.phone}</a></li>
            <li className="flex items-start gap-2"><Mail size={15} className="mt-0.5 shrink-0" /><a href={`mailto:${academy.email}`} className="break-all hover:text-accent">{academy.email}</a></li>
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /><span>{academy.addressLines.join(", ")}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-pa flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 md:flex-row">
          <p>© 2026 Paradeshi Academy. All Rights Reserved.</p>
          <p>{academy.hours}</p>
        </div>
      </div>
    </footer>
  );
}
