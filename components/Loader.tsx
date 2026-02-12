"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

const phrases = [
  "Soy humano",
  "我是人类",
  "私は人間です",
  "मैं इंसान हूँ",
  "Je suis humain",
  "I am human",
  "أنا إنسان",
  "Я человек",
  "Ich bin Mensch",
  "Sou humano",
];

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.classList.remove("overflow-hidden");
        onComplete();
      },
    });

    // 1. Initial State: Spread them out quite far vertically
    gsap.set(itemsRef.current, {
      y: (i) => (i - phrases.length / 2) * 100, // Large vertical spread
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
    });

    // 2. Step 1: Gentle Reveal of the list
    tl.to(itemsRef.current, {
      opacity: 0.3,
      scale: 1,
      duration: 1.5, // Slower entrance
      stagger: {
        amount: 0.8,
        from: "center",
      },
      ease: "power2.out",
    });

    // 3. Step 2: The Cascading Stretch (Center first, then edges)
    // We use a "center" stagger so the middle ones move first
    tl.to(itemsRef.current, {
      y: 0,
      opacity: (i) => (i === Math.floor(phrases.length / 2) ? 1 : 0.2), 
      duration: 2, // Slow, dramatic movement
      filter: "blur(0px)",
      stagger: {
        each: 0.15, // Delay between each pair of letters moving
        from: "center", // This makes the "near center" phrases move first
      },
      ease: "expo.inOut",
    }, "+=0.2");

    // 4. Step 3: Final Focus
    // Fade out everything except the final center phrase
    tl.to(itemsRef.current.filter((_, i) => i !== Math.floor(phrases.length / 2)), {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "power4.inOut",
    }, "-=1"); // Start fading while they are still moving

    tl.to(itemsRef.current[Math.floor(phrases.length / 2)], {
      opacity: 1,
      scale: 1.2,
      duration: 1.2,
      ease: "power4.out",
    }, "-=0.5");

    // 5. Final Slide Up
    tl.to(loaderRef.current, {
      y: "-100%",
      duration: 1.5,
      ease: "expo.inOut",
      delay: 1,
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 w-screen h-screen bg-black flex items-center justify-center z-[99999] overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center">
        {phrases.map((phrase, i) => (
          <div
            key={i}
            ref={(el) => { itemsRef.current[i] = el; }}
            className="absolute text-white text-3xl md:text-6xl font-medium tracking-tighter font-sans whitespace-nowrap"
            style={{ willChange: "transform, opacity" }}
          >
            {phrase}
          </div>
        ))}
      </div>
    </div>
  );
}