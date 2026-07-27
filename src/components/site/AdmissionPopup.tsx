import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X, Sparkles } from "lucide-react";

export function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("pa-admission-popup")) return;
    const t = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    sessionStorage.setItem("pa-admission-popup", "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-foreground/50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Admissions open announcement"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-card p-8 text-center shadow-2xl"
          >
            <div className="gradient-brand absolute inset-x-0 top-0 h-1.5" />
            <button onClick={close} aria-label="Close" className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
              <X size={18} />
            </button>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent/20 text-accent-foreground">
              <Sparkles className="text-primary" size={24} />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold text-foreground">Admissions Open 2026-27</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Limited seats per batch from Nursery to 12th Commerce. Book a free
              demo lecture and secure early-bird scholarship benefits.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Link to="/admission" onClick={close} className="btn-pa">Enroll Now</Link>
              <button onClick={close} className="btn-pa-outline">Maybe later</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
