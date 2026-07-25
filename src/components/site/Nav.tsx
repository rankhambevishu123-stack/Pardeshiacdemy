import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/venues", label: "Venues" },
  { to: "/menu", label: "Menu" },
  { to: "/experiences", label: "Experiences" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#C9A96E]/15"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A96E] text-[#C9A96E] font-display text-lg italic">
            A
          </span>
          <span className="h-display text-[#F7F4EF] text-lg tracking-widest uppercase">
            Maison <span className="text-[#C9A96E]">Auréa</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] uppercase tracking-[0.28em] text-[#F7F4EF]/80 hover:text-[#C9A96E] transition-colors"
              activeProps={{ className: "text-[#C9A96E]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/book" className="btn-gold hidden md:inline-flex !px-5 !py-3 !text-[10px]">
            Book a Table
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden text-[#F7F4EF] p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#111111] border-t border-[#C9A96E]/15">
          <div className="container-luxe py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.3em] text-[#F7F4EF]/85"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="btn-gold-solid mt-2 self-start">
              Book a Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}