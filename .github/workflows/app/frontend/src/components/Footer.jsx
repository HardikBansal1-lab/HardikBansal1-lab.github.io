import { FadeIn } from "./Reveal";
import { SITE } from "../config/site";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="border-t border-line">
      <div className="mx-auto max-w-screen-xl px-6 py-24 text-center md:px-12 md:py-32">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone">
            With love, from your students
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            className="mt-6 font-serif text-[13vw] leading-none tracking-tight md:text-[9rem]"
            data-testid="footer-school-name"
          >
            {SITE.schoolName}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-stone">
            Teacher&rsquo;s Day · {SITE.year}
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
