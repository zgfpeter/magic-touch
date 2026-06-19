"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuHeartHandshake,
  LuClock,
  LuShieldCheck,
  LuSparkles,
  LuAward,
} from "react-icons/lu";

// 1. STABILITY FIX: Move data outside the component.
// We pass the icon component itself, not the JSX element, to stay safe.
const stats = [
  { label: "Years Experience", value: "12+" },
  { label: "Projects Completed", value: "450+" },
  { label: "Dublin Local Area", value: "100%" },
  { label: "Customer Satisfaction", value: "5/5" },
];

const coreValues = [
  {
    Icon: LuClock,
    color: "text-blue-400",
    title: "Always on Time",
    desc: "We respect your schedule. When we say we will be there at 8:00 AM, we are there at 8:00 AM. No endless waiting windows.",
  },
  {
    Icon: LuShieldCheck,
    color: "text-handy-orange",
    title: "Fully Insured",
    desc: "Peace of mind is standard. We carry comprehensive insurance to protect you, your family, and your property while we work.",
  },
  {
    Icon: LuSparkles,
    color: "text-amber-400",
    title: "Immaculate Cleanup",
    desc: "We treat your home like our own. We use drop cloths, dust barriers, and always leave the workspace cleaner than we found it.",
  },
  {
    Icon: LuHeartHandshake,
    color: "text-teal-400",
    title: "Honest Pricing",
    desc: "No hidden fees or surprise charges. We provide clear, upfront quotes so you know exactly what to expect before we lift a hammer.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-handy-orange selection:text-white">
      {/* === HERO SECTION === */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-handy-orange font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Our Legacy
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">
              Precision in every <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Magic Touch.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
              Dublin&apos;s trusted team for homeowners who refuse to compromise
              on quality, reliability, and professional craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === STATS BAR === */}
      <section className="bg-slate-900/50 border-y border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR STORY SECTION === */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Image Side - Asymmetric shadow & borders */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative group"
            >
              <div className="absolute -inset-4 border border-handy-orange/20 rounded-3xl -z-10 group-hover:-inset-2 transition-all duration-500" />
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <Image
                  src="/assets/about-us-image.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 mix-blend-luminosity group-hover:mix-blend-normal"
                  alt="Magic Touch team at work"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl hidden md:block">
                <LuAward className="text-handy-orange w-10 h-10 mb-2" />
                <div className="text-white font-bold">Certified Local</div>
                <div className="text-slate-500 text-xs">Dublin Specialist</div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                Trust isn&apos;t given. <br />
                <span className="text-slate-500">It&apos;s built.</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
                <p>
                  Finding a reliable contractor in Dublin shouldn&apos;t feel
                  like a gamble. Magic Touch was born out of a simple
                  observation: homeowners were tired of unreturned calls, messy
                  job sites, and average results.
                </p>
                <p>
                  We believe that professional handyman work is more than just
                  fixing what is broken. It is about **respecting the sanctuary
                  of your home**. We treat every wall we paint and every shelf
                  we mount as if it were in our own living room.
                </p>
                <p className="border-l-4 border-handy-orange pl-6 italic text-slate-300">
                  &quot;Our mission is to eliminate the stress of home
                  maintenance through transparent communication and
                  uncompromising attention to detail.&quot;
                </p>
                <p>
                  From the initial quote to the final walkthrough, you work with
                  a team that values your time as much as you do. No surprises,
                  no mess—just a professional finish every single time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === CORE VALUES GRID === */}
      <section className="bg-slate-900/30 py-24 px-6 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              The Magic Touch <span className="text-slate-500">DNA.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-handy-orange to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-950/40 backdrop-blur-md p-10 rounded-3xl border border-slate-800 hover:border-handy-orange transition-all duration-500 group"
              >
                <div className="mb-8 p-4 bg-slate-900 rounded-2xl inline-block shadow-inner border border-slate-800 group-hover:scale-110 transition-transform">
                  <value.Icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CALL TO ACTION === */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-handy-orange opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Let&apos;s start your next <br />
              <span className="text-handy-orange">Home Refresh.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
              Whether it is a small repair or a full interior transformation, we
              are ready to help. Reach out for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="bg-handy-orange text-white font-extrabold text-lg px-12 py-5 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/contact"
                className="bg-slate-800/50 backdrop-blur-md text-white font-extrabold text-lg px-12 py-5 rounded-full border border-slate-700 hover:bg-slate-800 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
