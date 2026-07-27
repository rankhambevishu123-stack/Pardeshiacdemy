export function SectionHeader({
  eyebrow,
  title,
  intro,
  center = true,
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
      {eyebrow && (
        <p className={`eyebrow-pa ${light ? "!text-accent" : ""}`}>
          <span className={`h-px w-6 ${light ? "bg-accent" : "bg-primary"}`} />
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-extrabold sm:text-4xl md:text-[2.75rem] ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
