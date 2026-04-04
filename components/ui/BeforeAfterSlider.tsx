"use client";
import { useState } from "react";
import Image from "next/image";
import { LuMoveHorizontal } from "react-icons/lu";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(event.target.value));
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group select-none">
      {/* Background Image (The "Before" picture - Visible on the right) */}
      <Image
        src={beforeImage}
        fill
        priority
        alt="Before the work was done"
        className="object-cover pointer-events-none"
      />

      {/* "Before" Label (Anchored to the right) */}
      <div className="absolute top-4 right-4 bg-slate-900/80 text-white px-3 py-1 rounded-md font-bold text-sm backdrop-blur-sm z-10">
        BEFORE
      </div>

      {/* Foreground Image (The "After" picture - Visible on the left) */}
      {/* FIX: We use clip-path to slice the image instead of trying to measure it with Refs! */}
      <div
        className="absolute inset-0 z-0"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={afterImage}
          fill
          priority
          alt="After the work was completed"
          className="object-cover pointer-events-none"
        />
      </div>

      {/* "After" Label (Anchored to the left) */}
      <div
        className="absolute top-4 left-4 bg-handy-orange text-white px-3 py-1 rounded-md font-bold text-sm backdrop-blur-sm z-10 transition-opacity"
        style={{
          opacity: sliderPosition > 10 ? 1 : 0,
        }} /* Fades out if the slider covers it */
      >
        AFTER
      </div>

      {/* The Invisible Range Input (Handles all the mobile touch/desktop drag logic) */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Drag to compare before and after images"
      />

      {/* The Custom Visual Handle (The white line and arrows) */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none flex items-center justify-center transition-all duration-75"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="bg-white text-slate-900 p-1.5 rounded-full shadow-lg group-hover:scale-110 transition-transform">
          <LuMoveHorizontal size={24} />
        </div>
      </div>
    </div>
  );
}
