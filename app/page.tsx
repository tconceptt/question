"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonSize, setNoButtonSize] = useState(1);
  const [escapeCount, setEscapeCount] = useState(0);

  const escapeMessages = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again!",
    "Please?",
    "Pretty please?",
    "I'll be sad...",
    "Don't do this!",
    "NOOO!",
    "🥺",
  ];

  const handleNoHover = () => {
    const buttonWidth = 150;
    const buttonHeight = 60;
    const padding = 20;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Keep button within viewport bounds with padding
    const maxX = (viewportWidth - buttonWidth) / 2 - padding;
    const maxY = (viewportHeight - buttonHeight) / 2 - padding;

    const newX = (Math.random() * 2 - 1) * Math.min(maxX, 150);
    const newY = (Math.random() * 2 - 1) * Math.min(maxY, 200);

    setNoButtonPosition({ x: newX, y: newY });
    setNoButtonSize((prev) => Math.max(0.5, prev - 0.05));
    setEscapeCount((prev) => Math.min(prev + 1, escapeMessages.length - 1));
  };

  const handleYesClick = () => {
    router.push("/yes");
  };

  return (
    <div className="vhs-container min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* VHS overlay effects */}
      <div className="scanlines"></div>
      <div className="vhs-noise"></div>

      {/* VHS tracking lines */}
      <div className="tracking-lines"></div>

      {/* Main content */}
      <div className="z-10 text-center px-4">
        {/* VHS timestamp */}
        <div className="vhs-timestamp">REC ● 02.14</div>

        {/* Heart decorations */}
        <div className="hearts-container">
          <span className="floating-heart">❤️</span>
          <span className="floating-heart delay-1">💕</span>
          <span className="floating-heart delay-2">💖</span>
        </div>

        {/* Main question */}
        <h1 className="glitch-text text-4xl md:text-6xl font-bold mb-8 text-pink-500">
          Abby, Will You Be My Valentine?
        </h1>

        {/* Buttons container */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center min-h-[120px]">
          {/* Yes button - stays put and looks inviting */}
          <button
            onClick={handleYesClick}
            className="retro-button yes-button px-12 py-4 text-2xl font-bold transition-all duration-300 hover:scale-110"
          >
            Yes! 💝
          </button>

          {/* No button - runs away */}
          <button
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            onClick={handleNoHover}
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) scale(${noButtonSize})`,
              transition: "transform 0.2s ease-out",
            }}
            className="retro-button no-button px-12 py-4 text-2xl font-bold"
          >
            {escapeMessages[escapeCount]}
          </button>
        </div>

      </div>

      {/* VHS corner decorations */}
      <div className="vhs-corner top-left">▶ SP</div>
      <div className="vhs-corner top-right">HiFi</div>
      <div className="vhs-corner bottom-left">STEREO</div>
      <div className="vhs-corner bottom-right">► ► ►</div>
    </div>
  );
}
