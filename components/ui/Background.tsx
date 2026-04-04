import { motion } from "framer-motion";

// 1. Define a static array of "random" values outside the component.
// This ensures it never changes between renders or between the Server/Client.
const PARTICLES = [
  { r: 1.2, cx: "12%", cy: "84%", xOffset: -5, duration: 14, delay: 1.2 },
  { r: 0.8, cx: "45%", cy: "23%", xOffset: 8, duration: 18, delay: 3.5 },
  { r: 1.5, cx: "78%", cy: "61%", xOffset: -12, duration: 12, delay: 0.5 },
  { r: 0.6, cx: "22%", cy: "15%", xOffset: 4, duration: 19, delay: 4.1 },
  { r: 1.9, cx: "88%", cy: "92%", xOffset: -7, duration: 11, delay: 2.2 },
  { r: 1.1, cx: "54%", cy: "44%", xOffset: 9, duration: 15, delay: 1.8 },
  { r: 0.9, cx: "31%", cy: "76%", xOffset: -3, duration: 17, delay: 0.9 },
  { r: 1.4, cx: "95%", cy: "33%", xOffset: 6, duration: 13, delay: 2.7 },
  { r: 0.7, cx: "18%", cy: "55%", xOffset: -8, duration: 16, delay: 3.1 },
  { r: 1.6, cx: "67%", cy: "11%", xOffset: 2, duration: 10, delay: 4.5 },
  { r: 1.0, cx: "8%", cy: "39%", xOffset: -10, duration: 18, delay: 1.5 },
  { r: 1.3, cx: "62%", cy: "88%", xOffset: 5, duration: 14, delay: 0.3 },
  { r: 0.5, cx: "39%", cy: "5%", xOffset: -6, duration: 19, delay: 2.9 },
  { r: 1.8, cx: "81%", cy: "49%", xOffset: 7, duration: 12, delay: 1.1 },
  { r: 1.2, cx: "27%", cy: "96%", xOffset: -4, duration: 15, delay: 3.8 },
];

const BlueprintBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
      {/* The Fine Blueprint Grid Pattern */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 opacity-[0.15]"
      >
        <defs>
          <pattern
            id="blueprint-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#0d9488"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-pattern)" />
      </svg>

      {/* Animated 'Sketch' Drawings */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        {/* 1. Technical Drawing of a House Cross-section */}
        <motion.path
          d="M 50 200 L 150 100 L 250 200 Z M 150 100 V 50 M 50 200 V 350 H 250 V 200 M 110 350 V 280 H 190 V 350"
          stroke="#2dd4bf"
          strokeWidth="1.5"
          fill="none"
          className="opacity-30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 10,
            delay: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
        {/* Dimension Line for the House */}
        <motion.path
          d="M 50 370 H 250 M 50 365 V 375 M 250 365 V 375"
          stroke="#2dd4bf"
          strokeWidth="1"
          fill="none"
          className="opacity-20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 12 }}
        />

        {/* 2. Paint Can Schematic */}
        <motion.path
          d="
            M 800 150 C 800 135, 900 135, 900 150 C 900 165, 800 165, 800 150 
            V 270 C 800 285, 900 285, 900 270 V 150 
            M 790 150 C 790 70, 910 70, 910 150 
            M 820 142 V 158 M 850 142 V 158 M 880 142 V 158
          "
          stroke="#5eead4"
          strokeWidth="1.5"
          fill="none"
          className="opacity-30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 12,
            delay: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        {/* 3. Paintbrush Schematic */}
        <motion.path
          d="
            M 130 750 L 170 750 L 160 620 L 140 620 Z 
            M 135 620 L 165 620 L 165 590 L 135 590 Z 
            M 135 590 L 120 510 L 180 510 L 165 590 
            M 150 720 A 5 5 0 1 0 150 710 A 5 5 0 1 0 150 720 
            M 130 530 V 510 M 145 550 V 510 M 155 550 V 510 M 170 530 V 510
          "
          stroke="#f59e0b"
          strokeWidth="1.5"
          fill="none"
          className="opacity-30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 11,
            delay: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        {/* 4. Exploded View of a Bolt/Screw Assembly */}
        <motion.g
          className="opacity-25"
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M 750 400 V 550 H 770 V 400 Z"
            stroke="#5eead4"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, delay: 3, repeat: Infinity }}
          />
          <path
            d="M 750 420 L 770 415 M 750 440 L 770 435 M 750 460 L 770 455 M 750 480 L 770 475"
            stroke="#5eead4"
            strokeWidth="0.5"
            className="opacity-70"
          />
          <motion.path
            d="M 740 370 L 760 360 L 780 370 L 780 390 L 760 400 L 740 390 Z"
            stroke="#5eead4"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, delay: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* 5. Measuring Tape Schematic */}
        <motion.path
          d="M 300 850 H 700 V 890 H 300 Z"
          stroke="#f59e0b"
          strokeWidth="2"
          fill="none"
          className="opacity-40"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeIn" }}
        />
        <path
          d="M 350 850 V 865 M 400 850 V 860 M 450 850 V 865 M 500 850 V 860 M 550 850 V 865 M 600 850 V 860 M 650 850 V 865"
          stroke="#f59e0b"
          strokeWidth="1"
          className="opacity-40"
        />
      </svg>

      {/* Subtle dust/float particles mapped from the static array */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        {PARTICLES.map((p, i) => (
          <motion.circle
            key={i}
            r={p.r}
            cx={p.cx}
            cy={p.cy}
            fill="#81e6d9"
            className="opacity-20"
            animate={{
              y: [0, -40, 0],
              x: [0, p.xOffset, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Blueprint Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#115e59_0%,#020617_100%)] opacity-70"></div>
    </div>
  );
};

export default BlueprintBackground;
