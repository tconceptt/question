"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function YesPage() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="vhs-container min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* VHS overlay effects */}
      <div className="scanlines"></div>
      <div className="vhs-noise"></div>
      <div className="tracking-lines"></div>

      {/* Confetti/hearts animation */}
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className="confetti-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${Math.random() * 20 + 15}px`,
              }}
            >
              {["❤️", "💕", "💖", "💗", "💓", "💝", "🥰", "😍"][
                Math.floor(Math.random() * 8)
              ]}
            </span>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="z-10 text-center px-4">
        {/* VHS timestamp */}
        <div className="vhs-timestamp recording">REC ● FOREVER</div>

        {/* Celebration text */}
        <h1 className="glitch-text text-4xl md:text-7xl font-bold mb-6 text-pink-500">
          Let&apos;s Go!
        </h1>

        <p className="text-2xl md:text-4xl mb-8 text-cyan-400 vhs-flicker">
          I&apos;m so hyped right now
        </p>

        {/* Happy GIF */}
        <div className="gif-container mb-8">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd4OHpxOWZhZzV4Y3BxcjRmMnJ5OXVnbXN2bGZtaWNhZmx0cHg5aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif"
            alt="Happy celebration dance"
            className="rounded-lg vhs-image max-w-full md:max-w-md mx-auto"
          />
        </div>

        <p className="text-xl md:text-2xl text-white mb-8">
          See you on the 14th konjit ❤️
        </p>

        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-pink-400 transition-colors"
        >
          ← Back
        </Link>
      </div>

      {/* VHS corner decorations */}
      <div className="vhs-corner top-left">▶ SP</div>
      <div className="vhs-corner top-right">HiFi ❤️</div>
      <div className="vhs-corner bottom-left">LOVE</div>
      <div className="vhs-corner bottom-right">► ► ►</div>
    </div>
  );
}
