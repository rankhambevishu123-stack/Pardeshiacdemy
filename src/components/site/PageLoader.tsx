import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 850);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="gradient-brand fixed inset-0 z-[80] grid place-items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-xl font-extrabold text-primary">PA</span>
            <span className="h-1 w-28 overflow-hidden rounded-full bg-white/25">
              <motion.span
                className="block h-full w-1/2 rounded-full bg-accent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
