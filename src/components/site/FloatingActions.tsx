import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone, MessageCircle } from "lucide-react";
import { academy } from "@/data/academy";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && (
          <motion.button
            key="top"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`tel:${academy.phoneRaw}`}
        aria-label="Call Paradeshi Academy"
        className="grid h-12 w-12 place-items-center rounded-full bg-destructive text-destructive-foreground shadow-xl transition-transform hover:scale-105"
      >
        <Phone size={19} />
      </a>
      <a
        href={`https://wa.me/${academy.whatsapp}?text=${encodeURIComponent("Hello Paradeshi Academy, I would like to know more about admissions.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[oklch(0.72_0.17_150)] text-white shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
