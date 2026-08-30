import { Quote } from "lucide-react";
import { FadeIn, ChapterLabel } from "./Reveal";

const BOOKS =
  "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHw0fHx2aW50YWdlJTIwYm9va3N8ZW58MHx8fHwxNzg4MDczMzkwfDA&ixlib=rb-4.1.0&q=85&w=1200&auto=format&fit=crop";

const QUOTES = [
  {
    text: "A teacher affects eternity; he can never tell where his influence stops.",
    author: "Henry Adams",
    span: "md:col-span-2",
  },
  {
    text: "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.",
    author: "Albert Einstein",
    span: "md:col-span-2",
  },
  {
    text: "Every child deserves a champion — an adult who will never give up on them.",
    author: "Rita Pierson",
    span: "",
  },
];

const QuoteCard = ({ quote, index }) => (
  <FadeIn
    delay={0.1 + index * 0.1}
    className={`${quote.span} flex flex-col justify-between gap-8 rounded-xl border border-line bg-paper p-8 md:p-10`}
  >
    <Quote size={20} className="text-coral" strokeWidth={1.5} />
    <p
      className="font-serif text-xl leading-snug tracking-tight sm:text-2xl"
      data-testid={`quote-text-${index}`}
    >
      &ldquo;{quote.text}&rdquo;
    </p>
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-stone">
      {quote.author}
    </p>
  </FadeIn>
);

export default function Quotes() {
  return (
    <section
      data-testid="quotes-section"
      className="mx-auto max-w-screen-xl px-6 py-24 md:px-12 md:py-32"
    >
      <FadeIn>
        <ChapterLabel index="02" title="Wisdom" />
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        <QuoteCard quote={QUOTES[0]} index={0} />
        <FadeIn
          delay={0.2}
          className="overflow-hidden rounded-xl border border-line"
        >
          <img
            src={BOOKS}
            alt="Well-loved books, the quiet companions of every teacher"
            className="h-full min-h-56 w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            data-testid="quotes-image"
          />
        </FadeIn>
        <QuoteCard quote={QUOTES[2]} index={2} />
        <QuoteCard quote={QUOTES[1]} index={1} />
      </div>
    </section>
  );
}
