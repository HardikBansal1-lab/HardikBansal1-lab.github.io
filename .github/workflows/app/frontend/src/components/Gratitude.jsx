import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, ChapterLabel } from "./Reveal";
import { SITE } from "../config/site";

const BOUQUET =
  "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwZmxvd2VyJTIwYm91cXVldHxlbnwwfHx8fDE3ODgwNzMzOTB8MA&ixlib=rb-4.1.0&q=85&w=1200&auto=format&fit=crop";

export default function Gratitude() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      data-testid="gratitude-section"
      className="mx-auto max-w-screen-xl px-6 py-24 md:px-12 md:py-32"
    >
      <FadeIn>
        <ChapterLabel index="01" title="Gratitude" />
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
              A note for the ones who stayed after the bell.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              className="mt-8 max-w-xl text-base leading-relaxed text-stone sm:text-lg"
              data-testid="gratitude-message"
            >
              Dear teachers, before we knew the answers, you taught us how to
              ask better questions. You turned classrooms into places where it
              was safe to try, to fail, and to try again. The lessons you gave
              us reach far beyond the syllabus — they walk with us into every
              room we will ever enter. Today, and every day, we are grateful.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-10 font-serif text-xl italic text-ink">
              With all our respect,
              <span className="mt-1 block text-sm not-italic tracking-[0.2em] text-stone font-sans uppercase">
                The students of {SITE.schoolName}
              </span>
            </p>
          </FadeIn>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <FadeIn delay={0.15}>
            <div
              ref={imgRef}
              className="aspect-[3/4] overflow-hidden rounded-xl border border-line"
            >
              <motion.img
                style={{ y }}
                src={BOUQUET}
                alt="An elegant bouquet, a small token of appreciation for our teachers"
                className="h-full w-full scale-[1.18] object-cover"
                data-testid="gratitude-image"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-stone">
              For you, today and always
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
