import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";
import venue1 from "@/assets/venue-1.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Auréa" },
      { name: "description", content: "Reach the Maison Auréa host team — reservations, private events, and press enquiries." },
      { property: "og:title", content: "Contact — Maison Auréa" },
      { property: "og:description", content: "Reach the Maison Auréa host team — reservations, private events, and press enquiries." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Say hello." intro="Our host team responds within a few hours, always." image={venue1} />
      <section className="bg-[#F7F4EF] py-24 md:py-32">
        <div className="container-luxe grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5 space-y-8">
            <div>
              <p className="eyebrow">Visit</p>
              <p className="mt-3 flex gap-3 text-[#2B211B]"><MapPin className="text-[#C9A96E] shrink-0" size={18} /> {site.address}</p>
            </div>
            <div>
              <p className="eyebrow">Speak With Us</p>
              <p className="mt-3 flex gap-3 text-[#2B211B]"><Phone className="text-[#C9A96E] shrink-0" size={18} /> <a href={`tel:${site.phone}`}>{site.phone}</a></p>
              <p className="mt-2 flex gap-3 text-[#2B211B]"><Mail className="text-[#C9A96E] shrink-0" size={18} /> <a href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>
            <div>
              <p className="eyebrow">Hours</p>
              <p className="mt-3 flex gap-3 text-[#2B211B]"><Clock className="text-[#C9A96E] shrink-0" size={18} /> {site.hours}</p>
            </div>
            <div>
              <p className="eyebrow">Follow</p>
              <div className="mt-4 flex gap-4 text-[#C9A96E]">
                <a href={site.socials.instagram}><Instagram size={20} /></a>
                <a href={site.socials.facebook}><Facebook size={20} /></a>
                <a href={site.socials.youtube}><Youtube size={20} /></a>
                <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}><MessageCircle size={20} /></a>
              </div>
            </div>
          </div>

          <form
            className="md:col-span-7 space-y-5 bg-[#111111] text-[#F7F4EF] p-8 md:p-12"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <p className="eyebrow">Write to us</p>
            <h3 className="h-display text-3xl md:text-4xl">How can we help?</h3>
            <span className="divider-gold" />
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Email" type="email" name="email" />
              <Field label="Phone" name="phone" />
              <Field label="Subject" name="subject" />
            </div>
            <label className="block">
              <span className="eyebrow !text-[#E8DED0]/60">Message</span>
              <textarea rows={5} className="mt-2 w-full bg-transparent border-b border-[#C9A96E]/40 focus:border-[#C9A96E] outline-none py-2 text-[#F7F4EF]" />
            </label>
            <button className="btn-gold-solid mt-4">
              {sent ? "Thank you — we'll respond soon" : "Send Message"}
            </button>
          </form>
        </div>

        <div className="container-luxe mt-20">
          <div className="overflow-hidden border border-[#2B211B]/10">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Colaba%2C%20Mumbai&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="eyebrow !text-[#E8DED0]/60">{label}</span>
      <input
        type={type}
        name={name}
        className="mt-2 w-full bg-transparent border-b border-[#C9A96E]/40 focus:border-[#C9A96E] outline-none py-2 text-[#F7F4EF]"
      />
    </label>
  );
}