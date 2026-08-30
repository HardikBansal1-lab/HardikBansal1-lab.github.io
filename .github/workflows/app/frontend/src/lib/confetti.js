import confetti from "canvas-confetti";

const COLORS = ["#E56B55", "#F2B25C", "#1A1C20", "#EBE5D9"];

export const fireConfetti = () => {
  confetti({
    particleCount: 130,
    spread: 85,
    startVelocity: 45,
    origin: { y: 0.85 },
    colors: COLORS,
    disableForReducedMotion: true,
  });
  window.setTimeout(
    () =>
      confetti({
        particleCount: 70,
        spread: 110,
        startVelocity: 32,
        origin: { y: 0.72 },
        colors: COLORS,
        disableForReducedMotion: true,
      }),
    220
  );
};
