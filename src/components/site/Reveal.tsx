import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Dir = "up" | "left" | "right" | "none";

const offsets: Record<Dir, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: -36, y: 0 },
  right: { x: 36, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Dir;
  delay?: number;
  className?: string;
}) {
  const o = offsets[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: o.x, y: o.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
