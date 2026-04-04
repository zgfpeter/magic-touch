"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuHeartHandshake,
  LuClock,
  LuShieldCheck,
  LuSparkles,
} from "react-icons/lu";

export default function AboutPage() {
  const coreValues = [
    {
      icon: <LuClock className="w-8 h-8 text-handy-blue" />,
      title: "Always on Time",
      desc: "We respect your schedule. When we say we will be there at 8:00 AM, we are there at 8:00 AM. No endless waiting windows.",
    },
    {
      icon: <LuShieldCheck className="w-8 h-8 text-handy-orange" />,
      title: "Fully Insured",
      desc: "Peace of mind is standard. We carry comprehensive insurance to protect you, your family, and your property while we work.",
    },
    {
      icon: <LuSparkles className="w-8 h-8 text-amber-500" />,
      title: "Immaculate Cleanup",
      desc: "We treat your home like our own. We use drop cloths, dust barriers, and always leave the workspace cleaner than we found it.",
    },
    {
      icon: <LuHeartHandshake className="w-8 h-8 text-teal-600" />,
      title: "Honest Pricing",
      desc: "No hidden fees or surprise charges. We provide clear, upfront quotes so you know exactly what to expect before we lift a hammer.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* === PAGE HEADER === */}
      <section className="bg-slate-950 py-24 px-6 text-center border-b border-slate-800">
        <div className="max-w-3xl mx-auto mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6"
          >
            About <span className="text-handy-orange">Magic Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            We are Dublin&apos;s premier local team for professional home
            repairs, maintenance, and precision painting.
          </motion.p>
        </div>
      </section>

      {/* === OUR STORY SECTION === */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="/assets/about-us-image.jpg" // Swap this out for a real photo of your brother working!
              fill
              className="object-cover"
              alt="Magic Touch founder working on a home project"
              priority
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Built on Trust and <br />
              <span className="text-handy-blue">Exceptional Craftsmanship</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Finding a reliable contractor in Dublin shouldn&apos;t be
                stressful. Magic Touch was founded to solve a simple problem:
                homeowners were tired of unreturned phone calls, late arrivals,
                and messy workspaces.
              </p>
              <p>
                We believe that being a great handyman isn&apos;t just about
                swinging a hammer or cutting a straight line with a paintbrush.
                It is about customer service. It is about respecting your home,
                communicating clearly, and delivering a finished product that
                lasts.
              </p>
              <p>
                From patching a small hole in the drywall to completely
                repainting the exterior of your home, we bring the same level of
                dedication and meticulous attention to detail to every single
                project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === CORE VALUES GRID === */}
      <section className="bg-white py-24 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Magic Touch Difference
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-handy-blue to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm border border-slate-100">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CALL TO ACTION === */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Check Off Your To-Do List?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Let us handle the heavy lifting. Reach out today for a free,
            no-obligation quote on your next home project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-handy-orange text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:bg-orange-600 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="bg-slate-800 text-white font-bold text-lg px-8 py-4 rounded-md border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
