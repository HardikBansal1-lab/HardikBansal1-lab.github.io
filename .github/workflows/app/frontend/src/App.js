import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import Gratitude from "./components/Gratitude";
import Quotes from "./components/Quotes";
import Wishes from "./components/Wishes";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      data-testid="teachers-day-app"
      className="min-h-screen bg-ivory font-sans text-ink antialiased"
    >
      <div className="noise-overlay" aria-hidden="true" />
      <main>
        <Hero />
        <Gratitude />
        <Quotes />
        <Wishes />
      </main>
      <Footer />
    </div>
  );
}
