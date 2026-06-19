"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuHardHat,
  LuClock,
  LuShieldCheck,
  LuHeartHandshake,
  LuClipboardPen,
  LuHammer,
  LuKey,
} from "react-icons/lu";

// Data outside component for stability
const processSteps = [
  {
    stepNumber: "01",
    Icon: LuClipboardPen,
    title: "Consultation & Scoping",
    desc: "Every successful build starts with complete clarity. We begin with a thorough site visit at your Dublin property to understand your vision and assess the project requirements.",
    img: "/assets/about-us.jpg", // Replace with an image of planning/consulting
  },
  {
    stepNumber: "02",
    Icon: LuHammer,
    title: "The Build Phase",
    desc: "Once the plan is set, our dedicated multi-trade team takes over. From foundational groundworks to the final coat of paint, we manage everything. We maintain a clean, respectful job site and provide you with consistent updates so you never have to wonder what is happening with your home.",
    img: "/assets/repairs.jpg", // Replace with an image of active construction
  },
  {
    stepNumber: "03",
    Icon: LuKey,
    title: "Final Handover",
    desc: "We don't consider the job done until the site is spotless and the finish is flawless. We conduct a rigorous final walkthrough alongside you to ensure every detail meets our strict internal standards and your exact expectations.",
    img: "/assets/interior-painter.jpg", // Replace with an image of a finished room
  },
];

const coreValues = [
  {
    Icon: LuHardHat,
    color: "text-amber-500",
    title: "Multi-Trade Expertise",
    desc: "We eliminate the headache of juggling plumbers, electricians, and carpenters. Our comprehensive team handles every phase of the build under one roof.",
  },
  {
    Icon: LuHeartHandshake,
    color: "text-handy-orange",
    title: "Upfront Transparency",
    desc: "No hidden fees, no sudden timeline extensions. We provide detailed, accurate quotes and keep you updated at every stage of the construction process.",
  },
  {
    Icon: LuShieldCheck,
    color: "text-emerald-500",
    title: "Certified & Insured",
    desc: "Your property is fully protected. We operate with strict adherence to Irish building regulations, comprehensive insurance, and rigorous site safety standards.",
  },
  {
    Icon: LuClock,
    color: "text-blue-400",
    title: "Reliable Execution",
    desc: "We respect your time and your property. When we commit to a start date and a daily schedule, our crew is on-site and working—no excuses.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-handy-orange selection:text-white pt-20">
      {/* === HERO SECTION === */}
      <section className="relative pt-24 pb-16 flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-tight">
              Driven by results.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light mb-6">
              PrimeBuildConstruction provides high-quality building, renovation,
              and maintenance services across Dublin. Our team of professionals
              delivers quality results for every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === OUR APPROACH (THE 3 STEPS) === */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800/80 relative overflow-hidden">
        {/* Architectural grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Our <span className="text-handy-orange">Approach.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-handy-orange to-orange-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
              A smooth project requires a solid plan. Our streamlined three-step
              process ensures complete transparency and minimizes disruption to
              your daily life.
            </p>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col lg:items-center ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-20 relative`}
              >
                {/* Giant Background Number */}
                <div
                  className={`absolute top-0 md:-top-10 text-[12rem] md:text-[18rem] font-black text-slate-800/20 leading-none select-none pointer-events-none -z-10 ${
                    idx % 2 === 0
                      ? "left-0 lg:-left-12"
                      : "right-0 lg:-right-12"
                  }`}
                >
                  {step.stepNumber}
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col pt-8 md:pt-0 z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-slate-950 rounded-2xl border border-slate-700 shadow-xl text-handy-orange">
                      <step.Icon size={32} aria-hidden="true" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl group">
                  <Image
                    src={step.img}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    alt={`TotalBuild Construction Process - ${step.title}`}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CALL TO ACTION === */}
      <section className="py-24 md:py-32 px-4 sm:px-6 text-center relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-handy-orange opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Ready to break ground on <br className="hidden sm:block" />
              <span className="text-handy-orange">your next project?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
              Whether it is a structural extension, a custom garden room, or a
              full property renovation across Dublin, our team is ready to
              deliver.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="bg-handy-orange text-white font-extrabold text-base md:text-lg px-10 md:px-12 py-4 md:py-5 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-handy-orange"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="bg-slate-900/50 backdrop-blur-md text-white font-extrabold text-base md:text-lg px-10 md:px-12 py-4 md:py-5 rounded-full border border-slate-700 hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-slate-300"
              >
                View Contact Info
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
