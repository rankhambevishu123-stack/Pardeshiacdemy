import { createFileRoute, Link } from "@tanstack/react-router";
import { site, venues, experiences, gallery } from "@/data/site";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ChevronDown, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Auréa — A House of Modern Hospitality" },
      { name: "description", content: "Signature dining, cocktail atelier, rooftop terrace, and private rooms in the heart of Mumbai." },
      { property: "og:title", content: "Maison Auréa — A House of Modern Hospitality" },
      { property: "og:description", content: "Signature dining, cocktail atelier, rooftop terrace, and private rooms in the heart of Mumbai." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#111111]">
        <img
          src={site.heroImg}
          alt="Maison Auréa dining room"
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        <div className="relative z-10 h-full container-luxe flex flex-col justify-center items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A96E] text-[#C9A96E] font-display text-2xl italic animate-veil-fade">
            A
          </span>
          <p className="eyebrow mt-8 animate-veil-fade">Est. Mumbai · MMXXV</p>
          <h1 className="h-display mt-6 text-[#F7F4EF] text-6xl md:text-8xl lg:text-9xl animate-rise">
            {site.brand}
          </h1>
          <p className="mt-6 text-[#E8DED0]/85 text-lg md:text-xl max-w-xl font-light italic animate-rise">
            {site.tagline}
          </p>
          <span className="divider-gold mt-10 animate-veil-fade" />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-rise">
            <Link to="/experiences" className="btn-gold">Explore Our Experience</Link>
            <Link to="/book" className="btn-gold-solid">Book a Table</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#C9A96E]">
          <span className="text-[10px] tracking-[0.4em] uppercase mb-2">Scroll</span>
          <ChevronDown className="animate-scroll-cue" size={18} />
        </div>
      </section>

      {/* PROLOGUE */}
      <section className="bg-[#F7F4EF] py-28 md:py-36">
        <div className="container-luxe grid gap-14 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow">The House</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl text-[#111111]">
              A quieter kind of luxury.
            </h2>
            <span className="divider-gold mt-6" />
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-[#2B211B]/80 leading-relaxed">
            <p className="text-lg">
              Maison Auréa is a home for the modern connoisseur — a group of
              restaurants, bars, and private rooms bound by craft, quiet
              service, and evenings that unfold slowly.
            </p>
            <p>
              We believe the best hospitality is felt, not announced. Each
              venue is a chapter in the same story: considered ingredients,
              considered light, and rooms that make you want to stay one
              hour longer.
            </p>
            <Link to="/about" className="btn-gold mt-4 inline-flex">Our Story</Link>
          </div>
        </div>
      </section>

      {/* VENUES */}
      <section className="bg-[#111111] py-28 md:py-36">
        <div className="container-luxe">
          <SectionHeader
            light
            eyebrow="Our Venues"
            title="Four rooms. One house."
            intro="Each address is designed for a different mood — from candlelit dinners to rooftop nightcaps and private celebrations."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {venues.map((v) => (
              <article key={v.slug} className="group relative overflow-hidden border border-[#C9A96E]/15">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="eyebrow">{v.tagline}</p>
                  <h3 className="h-display mt-2 text-3xl md:text-4xl text-[#F7F4EF]">{v.name}</h3>
                  <p className="mt-3 text-[#E8DED0]/75 text-sm max-w-md">{v.description}</p>
                  <div className="mt-5 flex flex-wrap gap-6 text-xs uppercase tracking-[0.25em] text-[#C9A96E]">
                    <span className="inline-flex items-center gap-2"><MapPin size={12} /> {v.location}</span>
                    <span className="inline-flex items-center gap-2"><Clock size={12} /> {v.hours}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/venues" className="btn-gold">Discover All Venues</Link>
          </div>
        </div>
      </section>

      {/* MENU TEASER */}
      <section className="bg-[#E8DED0] py-28 md:py-36">
        <div className="container-luxe grid gap-14 md:grid-cols-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <p className="eyebrow">The Kitchen</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl text-[#111111]">
              A menu written like a letter.
            </h2>
            <span className="divider-gold mt-6" />
            <p className="mt-6 text-[#2B211B]/80 leading-relaxed max-w-lg">
              Seasonal ingredients from local growers, techniques from the
              great European kitchens, and the warmth of a family table. Our
              menu changes softly with the year.
            </p>
            <Link to="/menu" className="btn-gold mt-8 inline-flex">View The Menu</Link>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 grid grid-cols-2 gap-4">
            <img src={gallery[3].src} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover" />
            <img src={gallery[1].src} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-[#111111] py-28 md:py-36">
        <div className="container-luxe">
          <SectionHeader
            light
            eyebrow="Experiences"
            title="Nights to remember."
            intro="Chef's counters, wine flights, and celebrations designed with the same care as our nightly service."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {experiences.slice(0, 3).map((e) => (
              <article key={e.title} className="group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-6">{e.date}</p>
                <h3 className="h-display mt-3 text-2xl text-[#F7F4EF]">{e.title}</h3>
                <p className="mt-3 text-sm text-[#E8DED0]/70 leading-relaxed">{e.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/experiences" className="btn-gold">All Experiences</Link>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-[#F7F4EF] py-28 md:py-36">
        <div className="container-luxe">
          <div className="flex items-end justify-between flex-wrap gap-8">
            <SectionHeader eyebrow="Gallery" title="Fragments of our nights." />
            <Link to="/gallery" className="btn-gold">View Gallery</Link>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {gallery.slice(0, 8).map((g, i) => (
              <div key={i} className="overflow-hidden aspect-square">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#2B211B]">
        <img src={gallery[4].src} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative container-luxe text-center">
          <p className="eyebrow">Reservations</p>
          <h2 className="h-display mt-6 text-5xl md:text-7xl text-[#F7F4EF]">
            Your table awaits.
          </h2>
          <span className="divider-gold mt-8 mx-auto" />
          <p className="mt-8 max-w-xl mx-auto text-[#E8DED0]/80">
            Reserve directly with our host team. For parties larger than eight,
            our events atelier will curate a bespoke evening.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-gold-solid">Book a Table</Link>
            <Link to="/contact" className="btn-gold">Speak With Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
