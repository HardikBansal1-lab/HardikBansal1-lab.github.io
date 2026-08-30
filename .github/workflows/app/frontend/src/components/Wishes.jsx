import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Asterisk, PartyPopper } from "lucide-react";
import { FadeIn, ChapterLabel } from "./Reveal";
import { fireConfetti } from "../lib/confetti";
import { SITE } from "../config/site";

export default function Wishes() {
  return (
    <section data-testid="wishes-section" className="py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <FadeIn>
          <ChapterLabel index="03" title="Wishes" />
        </FadeIn>
      </div>

      <div
        className="mt-12 border-y border-line bg-sand py-8 md:py-10"
        data-testid="wishes-marquee"
      >
        <Marquee speed={35} gradient={false} pauseOnHover>
          {SITE.marqueeWords.map((word) => (
            <span key={word} className="mx-8 flex items-center gap-16">
              <span className="font-serif text-4xl italic tracking-tight md:text-6xl">
                {word}
              </span>
              <Asterisk size={28} className="text-coral" strokeWidth={1.5} />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-3xl px-6 pt-20 text-center md:pt-28">
        <FadeIn>
          <h2
            className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
            data-testid="wishes-headline"
          >
            May your coffee be warm, your classes be kind, and your heart as
            full as <em className="italic text-coral">you make ours.</em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-8 text-base leading-relaxed text-stone sm:text-lg">
            From every student you have ever believed in — thank you. We hope
            today brings you even a fraction of the joy you give us all year.
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={fireConfetti}
            data-testid="wishes-confetti-button"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 hover:border-coral hover:bg-coral hover:text-ivory"
          >
            <PartyPopper size={14} />
            One more burst of joy
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
}
