import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/70 via-[#111111]/50 to-[#111111]/85" />
      <div className="relative z-10 h-full container-luxe flex flex-col justify-end pb-20">
        <p className="eyebrow animate-veil-fade">{eyebrow}</p>
        <h1 className="h-display mt-4 text-5xl md:text-7xl text-[#F7F4EF] max-w-4xl animate-rise">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-[#E8DED0]/80 text-lg leading-relaxed animate-rise">
            {intro}
          </p>
        )}
        <span className="divider-gold mt-8 animate-veil-fade" />
        <div className="mt-6">
          <Link to="/book" className="btn-gold">Book a Table</Link>
        </div>
      </div>
    </section>
  );
}