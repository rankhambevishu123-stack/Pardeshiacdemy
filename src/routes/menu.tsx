import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { menu } from "@/data/site";
import heroImg from "@/assets/hero.jpg";
import { Leaf, Star } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu — Maison Auréa" },
      { name: "description", content: "Seasonal European craft, coastal Indian ingredients, and a cellar built for the table." },
      { property: "og:title", content: "The Menu — Maison Auréa" },
      { property: "og:description", content: "Seasonal European craft, coastal Indian ingredients, and a cellar built for the table." },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="Written like a letter, changed with the year."
        image={heroImg}
      />
      <section className="bg-[#F7F4EF] py-24 md:py-32">
        <div className="container-luxe max-w-4xl">
          {menu.map((cat) => (
            <div key={cat.category} className="mb-20 last:mb-0">
              <div className="text-center">
                <p className="eyebrow">Chapter</p>
                <h2 className="h-display mt-3 text-4xl md:text-5xl text-[#111111]">{cat.category}</h2>
                <span className="divider-gold mt-5 mx-auto" />
              </div>
              <ul className="mt-12 divide-y divide-[#2B211B]/10">
                {cat.items.map((it) => (
                  <li key={it.name} className="py-6 flex gap-6 items-baseline">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="h-display text-xl md:text-2xl text-[#111111]">{it.name}</h3>
                        {it.veg && (
                          <span title="Vegetarian" className="inline-flex items-center justify-center h-5 w-5 border border-green-700/60 text-green-700">
                            <Leaf size={11} />
                          </span>
                        )}
                        {it.chef && (
                          <span title="Chef's Signature" className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] border border-[#C9A96E]/60 px-2 py-0.5">
                            <Star size={10} /> Signature
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-[#2B211B]/70 italic">{it.desc}</p>
                    </div>
                    <div className="h-display text-xl text-[#C9A96E] whitespace-nowrap">
                      ₹ {it.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-16 text-center text-xs uppercase tracking-[0.3em] text-[#2B211B]/50">
            Prices in INR · Taxes as applicable · Kindly inform us of allergies
          </p>
        </div>
      </section>
    </>
  );
}