import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const ChapterLabel = ({ index, title }) => (
  <div className="flex items-center gap-4" data-testid={`chapter-label-${title.toLowerCase()}`}>
    <span className="font-serif text-lg italic text-coral">{index}</span>
    <span className="h-px w-10 bg-line" />
    <span className="text-xs font-medium uppercase tracking-[0.25em] text-stone">{title}</span>
  </div>
);
