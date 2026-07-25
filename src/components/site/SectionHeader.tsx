export function SectionHeader({
  eyebrow,
  title,
  intro,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`h-display mt-4 text-4xl md:text-5xl lg:text-6xl ${
          light ? "text-[#F7F4EF]" : "text-[#111111]"
        }`}
      >
        {title}
      </h2>
      <span className={`divider-gold mt-6 ${center ? "mx-auto" : ""}`} />
      {intro && (
        <p
          className={`mt-6 text-base leading-relaxed ${
            light ? "text-[#E8DED0]/75" : "text-[#2B211B]/75"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}