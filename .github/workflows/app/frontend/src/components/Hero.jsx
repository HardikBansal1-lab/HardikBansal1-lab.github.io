import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Sparkles, Sparkle, ArrowDown } from "lucide-react";
import { fireConfetti } from "../lib/confetti";
import { SITE } from "../config/site";

const EASE = [0.16, 1, 0.3, 1];

const RevealLine = ({ children, delay = 0, className = "" }) => (
  <span className="-my-[0.06em] block overflow-hidden py-[0.06em]">
    <motion.span
      className={`block will-change-transform ${className}`}
      initial={{ y: "115%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

const RotatingBadge = () => (
  <div
    className="pointer-events-none absolute bottom-10 right-10 hidden md:block"
    data-testid="hero-rotating-badge"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="relative h-28 w-28"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full fill-ink">
        <defs>
          <path
            id="badge-circle"
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
          />
        </defs>
        <text fontSize="7.6" letterSpacing="2.4" className="font-sans uppercase">
          <textPath href="#badge-circle" textLength="236">
            Happy Teacher's Day · 2026 ·
          </textPath>
        </text>
      </svg>
    </motion.div>
    <Sparkles size={16} className="absolute inset-0 m-auto text-coral" />
  </div>
);

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const ringX = useTransform(sx, (v) => v * 50);
  const ringY = useTransform(sy, (v) => v * 50);
  const starX = useTransform(sx, (v) => v * -35);
  const starY = useTransform(sy, (v) => v * -35);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const handleMouse = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      data-testid="hero-section"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none absolute -left-24 top-[12%] h-72 w-72 rounded-full border border-line md:h-96 md:w-96"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none absolute -right-32 bottom-[8%] h-80 w-80 rounded-full border border-line"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: starX, y: starY }}
        className="pointer-events-none absolute right-[12%] top-[16%] text-coral"
        aria-hidden="true"
      >
        <Sparkles size={28} strokeWidth={1.5} />
      </motion.div>
      <motion.div
        style={{ x: starX, y: starY }}
        className="pointer-events-none absolute bottom-[18%] left-[10%] text-coral/70"
        aria-hidden="true"
      >
        <Sparkle size={18} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        style={{ y: headY, opacity: fade }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-stone"
          data-testid="hero-date-overline"
        >
          {SITE.date} — with love & gratitude
        </motion.p>

        <h1
          className="font-serif text-[clamp(3.6rem,15vw,10.5rem)] leading-[0.95] tracking-tight"
          data-testid="hero-headline"
        >
          <RevealLine delay={0.3}>
            <em className="font-light italic">Happy</em>
          </RevealLine>
          <RevealLine delay={0.45}>Teacher&rsquo;s</RevealLine>
          <RevealLine delay={0.6}>
            Day{" "}
            <span className="font-light italic text-coral">2026</span>
          </RevealLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
          className="mt-8 max-w-md text-base leading-relaxed text-stone sm:text-lg"
          data-testid="hero-subtitle"
        >
          To the mentors who turned our questions into courage — today is
          yours.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={fireConfetti}
          data-testid="confetti-cta-button"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 hover:border-coral hover:bg-coral hover:text-ivory"
        >
          <Sparkles size={14} />
          Tap for joy
        </motion.button>
      </motion.div>

      <RotatingBadge />

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-stone"
        data-testid="scroll-hint"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
