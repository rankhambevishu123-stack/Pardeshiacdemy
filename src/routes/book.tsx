import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { venues } from "@/data/site";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Maison Auréa" },
      { name: "description", content: "Reserve your table at Maison Auréa. Our host team confirms every request within a few hours." },
      { property: "og:title", content: "Reserve a Table — Maison Auréa" },
      { property: "og:description", content: "Reserve your table at Maison Auréa. Our host team confirms every request within a few hours." },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Reserve your evening."
        intro="Tell us a little about your visit and our host team will confirm your table shortly."
        image={heroImg}
      />
      <section className="bg-[#F7F4EF] py-24 md:py-32">
        <div className="container-luxe max-w-3xl">
          {sent ? (
            <div className="bg-[#111111] text-[#F7F4EF] p-12 text-center">
              <p className="eyebrow">Confirmed request</p>
              <h2 className="h-display mt-4 text-4xl">Thank you.</h2>
              <span className="divider-gold mt-6 mx-auto" />
              <p className="mt-6 text-[#E8DED0]/80">
                Your request has been received. A member of our host team will
                confirm your reservation within a few hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-[#111111] text-[#F7F4EF] p-8 md:p-14 space-y-6"
            >
              <p className="eyebrow">Book a Table</p>
              <h2 className="h-display text-4xl">Details of your visit</h2>
              <span className="divider-gold" />
              <div className="grid gap-5 md:grid-cols-2 pt-4">
                <Field label="Full name" required />
                <Field label="Phone" type="tel" required />
                <Field label="Email" type="email" required />
                <Select label="Venue" options={venues.map(v => v.name)} />
                <Field label="Date" type="date" required />
                <Field label="Time" type="time" required />
                <Field label="Guests" type="number" defaultValue="2" min={1} max={20} />
                <Select label="Occasion" options={["Dinner", "Anniversary", "Birthday", "Business", "Other"]} />
              </div>
              <label className="block">
                <span className="eyebrow !text-[#E8DED0]/60">Special requests</span>
                <textarea rows={4} className="mt-2 w-full bg-transparent border-b border-[#C9A96E]/40 focus:border-[#C9A96E] outline-none py-2" />
              </label>
              <button className="btn-gold-solid mt-4">Request Reservation</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block">
      <span className="eyebrow !text-[#E8DED0]/60">{label}</span>
      <input {...rest} className="mt-2 w-full bg-transparent border-b border-[#C9A96E]/40 focus:border-[#C9A96E] outline-none py-2 text-[#F7F4EF]" />
    </label>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="eyebrow !text-[#E8DED0]/60">{label}</span>
      <select className="mt-2 w-full bg-transparent border-b border-[#C9A96E]/40 focus:border-[#C9A96E] outline-none py-2 text-[#F7F4EF]">
        {options.map((o) => <option key={o} className="bg-[#111111]">{o}</option>)}
      </select>
    </label>
  );
}