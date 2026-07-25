import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F7F4EF]/80 border-t border-[#C9A96E]/15">
      <div className="container-luxe py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A96E] text-[#C9A96E] font-display text-lg italic">A</span>
            <span className="h-display text-lg tracking-widest uppercase">
              Maison <span className="text-[#C9A96E]">Auréa</span>
            </span>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[#E8DED0]/70">
            A house of modern hospitality — restaurants, bars, and private
            rooms shaped by craft, quiet luxury, and the belief that every
            evening should feel like a private occasion.
          </p>
          <Link to="/book" className="btn-gold mt-8 inline-flex">Book a Table</Link>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/about","About"],["/venues","Venues"],["/menu","Menu"],
              ["/experiences","Experiences"],["/gallery","Gallery"],["/contact","Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-[#C9A96E] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Reach Us</p>
          <ul className="mt-5 space-y-3 text-sm text-[#E8DED0]/75">
            <li>{site.address}</li>
            <li><a href={`tel:${site.phone}`} className="hover:text-[#C9A96E]">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-[#C9A96E]">{site.email}</a></li>
            <li>{site.hours}</li>
          </ul>
          <div className="mt-6 flex gap-4 text-[#C9A96E]">
            <a href={site.socials.instagram} aria-label="Instagram"><Instagram size={18} /></a>
            <a href={site.socials.facebook} aria-label="Facebook"><Facebook size={18} /></a>
            <a href={site.socials.youtube} aria-label="YouTube"><Youtube size={18} /></a>
            <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} aria-label="WhatsApp"><MessageCircle size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#C9A96E]/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.28em] text-[#E8DED0]/50">
          <p>© {new Date().getFullYear()} Maison Auréa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C9A96E]">Privacy</a>
            <a href="#" className="hover:text-[#C9A96E]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}