"use client";

import { motion } from "framer-motion";

export default function HandymanDivider() {
  return (
    <div className="w-full bg-slate-950 h-40 md:h-48 relative z-20 overflow-hidden select-none pointer-events-none border-y border-slate-900/60">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px]" />

      <div className="max-w-5xl mx-auto h-full relative px-4 md:px-12">
        {/* --- ENVIRONMENT --- */}
        {/* Main Ground Line */}
        <div className="absolute bottom-6 left-0 right-0 h-[2px] bg-slate-800" />
        {/* Ground Measurement Ticks */}
        {/* <div className="absolute bottom-4 left-0 right-0 h-2 flex justify-between px-8 opacity-40"> */}
        {/* {Array.from({ length: 30 }).map((_, i) => ( */}
        {/* // <div key={i} className="w-[1px] h-full bg-slate-600" /> */}
        {/* ))} */}
        {/* </div> */}

        {/* --- SURVEYOR WORKER (Left) --- */}
        <div className="absolute bottom-6 left-4 md:left-12 w-[32px] h-[40px]">
          <svg
            width="32"
            height="40"
            viewBox="0 0 32 40"
            className="overflow-visible"
          >
            {/* Tripod Legs */}
            <path
              d="M 24 12 L 16 40 M 24 12 L 32 40 M 24 12 L 24 40"
              stroke="#475569"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Total Station */}
            <rect x="21" y="8" width="6" height="6" rx="1" fill="#ea580c" />
            <rect x="24" y="10" width="6" height="2" fill="#fff" /> {/* Lens */}
            {/* Human Head */}
            <circle cx="12" cy="8" r="2.5" fill="#94a3b8" />
            {/* Orange Hardhat */}
            <path d="M 9 8 A 3 3 0 0 1 15 8 Z" fill="#ea580c" />
            {/* Body */}
            <path
              d="M 12 12 L 12 26"
              stroke="#94a3b8"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Legs */}
            <path
              d="M 12 26 L 8 40 M 12 26 L 15 40"
              stroke="#94a3b8"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Arms Operating Device */}
            <path
              d="M 12 14 L 18 16 L 21 12"
              stroke="#94a3b8"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* --- RECEIVER WORKER (Right) --- */}
        <div className="absolute bottom-6 right-4 md:right-12 w-[24px] h-[40px]">
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            className="overflow-visible"
          >
            {/* Leveling Pole */}
            <line
              x1="8"
              y1="2"
              x2="8"
              y2="40"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Pole Orange Stripes */}
            <line
              x1="7"
              y1="6"
              x2="9"
              y2="6"
              stroke="#ea580c"
              strokeWidth="2"
            />
            <line
              x1="7"
              y1="14"
              x2="9"
              y2="14"
              stroke="#ea580c"
              strokeWidth="2"
            />
            <line
              x1="7"
              y1="22"
              x2="9"
              y2="22"
              stroke="#ea580c"
              strokeWidth="2"
            />
            {/* Target Prism */}
            <rect x="6" y="8" width="4" height="6" fill="#ea580c" rx="0.5" />
            <circle
              cx="8"
              cy="11"
              r="1.5"
              fill="#fff"
              className="animate-pulse"
            />
            {/* Human Head */}
            <circle cx="18" cy="10" r="2.5" fill="#94a3b8" />
            {/* Orange Hardhat */}
            <path d="M 15 10 A 3 3 0 0 1 21 10 Z" fill="#ea580c" />
            {/* Body */}
            <path
              d="M 18 14 L 18 28"
              stroke="#94a3b8"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Legs */}
            <path
              d="M 18 28 L 14 40 M 18 28 L 22 40"
              stroke="#94a3b8"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Arms Holding Pole */}
            <path
              d="M 18 16 L 12 18 L 8 18"
              stroke="#94a3b8"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* --- LIVE LASER MATRIX --- */}
        {/* The line connecting the exact pixel height of the Total Station lens to the Prism */}
        <div className="absolute bottom-[60px] left-[48px] md:left-[80px] right-[38px] md:right-[70px] h-[1px] bg-gradient-to-r from-transparent via-handy-orange/80 to-handy-orange shadow-[0_0_10px_#ea580c] flex items-center overflow-hidden">
          {/* Animated Laser Data Packet */}
          <motion.div
            animate={{ x: ["-100%", "4000%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            className="w-24 h-[1px] bg-red-800 shadow-[0_0_15px_#242424]"
          />
        </div>

        {/* --- TECHNICAL HUD DATA --- */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-slate-950/60 px-4 py-2 rounded-lg border border-slate-800/80 backdrop-blur-sm"> */}
        {/* Crosshair Graphic */}
        {/* <div className="relative w-8 h-8 mb-1 flex items-center justify-center"> */}
        {/* <div className="absolute w-full h-[1px] bg-slate-700" /> */}
        {/* <div className="absolute h-full w-[1px] bg-slate-700" /> */}
        {/* <div className="w-2 h-2 border border-handy-orange rounded-full animate-ping absolute" /> */}
        {/* <div className="w-2 h-2 bg-handy-orange rounded-full" /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
