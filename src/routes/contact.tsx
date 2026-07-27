import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Clock, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { academy } from "@/data/academy";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Paradeshi Academy — Karanjade, Panvel" },
      { name: "description", content: "Contact Paradeshi Academy: call +91 73047 73704, email pardeshiacademy01@gmail.com or visit us at Labh Aspire, Sector 4, Karanjade, Panvel (W)." },
      { property: "og:title", content: "Contact Paradeshi Academy" },
      { property: "og:description", content: "Phone, email, Instagram and campus address in Karanjade, Panvel." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you" intro="Call, message or walk in — our counsellors are happy to help." />

      <section className="section-pa">
        <div className="container-pa grid gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="grid gap-4">
              {[
                { Icon: Phone, label: "Phone", value: academy.phone, href: `tel:${academy.phoneRaw}` },
                { Icon: Mail, label: "Email", value: academy.email, href: `mailto:${academy.email}` },
                { Icon: Instagram, label: "Instagram", value: academy.instagramHandle, href: academy.instagram },
                { Icon: Clock, label: "Timings", value: academy.hours },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><Icon size={19} /></span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block break-words font-semibold text-foreground hover:text-primary">{value}</a>
                    ) : (
                      <span className="block font-semibold text-foreground">{value}</span>
                    )}
                  </span>
                </div>
              ))}
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><MapPin size={19} /></span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Address</span>
                  <address className="not-italic font-semibold text-foreground">
                    {academy.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
                  </address>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-extrabold text-foreground">Send us a message</h2>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-secondary p-10 text-center">
                  <CheckCircle2 className="text-primary" size={36} />
                  <p className="font-bold text-foreground">Message received. We'll be in touch soon.</p>
                </div>
              ) : (
                <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <label className="text-sm font-semibold text-foreground">
                    Full Name
                    <input required name="name" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-primary" />
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-semibold text-foreground">
                      Mobile
                      <input required type="tel" name="phone" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-primary" />
                    </label>
                    <label className="text-sm font-semibold text-foreground">
                      Email
                      <input type="email" name="email" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-primary" />
                    </label>
                  </div>
                  <label className="text-sm font-semibold text-foreground">
                    Message
                    <textarea required name="message" rows={5} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-primary" />
                  </label>
                  <button type="submit" className="btn-pa mt-2">Send Message</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <div className="container-pa mt-10">
          <div className="h-[380px] overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Paradeshi Academy on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(academy.mapQuery)}&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
