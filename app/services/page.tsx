"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuHammer,
  LuPaintbrush,
  LuHouse,
  LuWrench,
  LuFence,
  LuArrowUp,
  LuPhone,
  LuCheck,
} from "react-icons/lu";

export default function ServicesPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // SEO-Optimized Services Data
  const services = useMemo(
    () => [
      {
        Icon: LuHammer,
        iconColor: "text-amber-500",
        title: "Construction and structural work",
        desc: "",
        imageUrl: "/assets/saemi-kim-4hcTkOw-EKE-unsplash.jpg",
        includes: [
          "Ground works",
          "Reinforced concrete",
          "Block wall construction",
          "Timber frame structures",
          "Garden rooms/granny flats",
          "Small construction jobs",
        ],
      },
      {
        Icon: LuPaintbrush,
        iconColor: "text-cyan-500",
        title: "Interior finishes",
        desc: "",
        imageUrl: "/assets/painter-2.jpeg",
        includes: [
          "Plasterboard installation",
          "Joint taping and skimming",
          "Painting and decorating",
          "Door and window installation",
        ],
      },
      {
        Icon: LuHouse,
        iconColor: "text-blue-400",
        title: "Property maintenance",
        desc: "",
        imageUrl: "/assets/exterior-painter.jpg",
        includes: [
          "Gutter cleaning up to 2 storeys",
          "Power washing",
          "Driveway patios, wall and exterior cleaning",
        ],
      },
      {
        Icon: LuWrench,
        iconColor: "text-stone-400",
        title: "General Home Repairs",
        desc: "",
        imageUrl: "/assets/property-maintenance.jpeg",
        includes: [
          "Not every task fits in a box, talk to us about your specific project.",
        ],
      },
      // {
      //   Icon: LuFence,
      //   iconColor: "text-emerald-500",
      //   title: "Dublin Driveway & Patio Power Washing",
      //   desc: "Over time, Dublin's damp climate causes driveways, patios, and walkways to accumulate a thick, slippery layer of algae, moss, and dirt. This not only diminishes your property's appearance but creates a serious slipping hazard. Our commercial-grade high-pressure washing service safely blasts away years of built-up grime, instantly restoring your exterior surfaces. It is the fastest way to rejuvenate your outdoor spaces and prep decks for new stain.",
      //   imageUrl: "/assets/powerwashing.jpg",
      //   includes: [
      //     "Concrete driveway and sidewalk deep cleaning",
      //     "Patio, decking, and paving stone restoration",
      //     "Wooden fence and deck moss/algae removal",
      //     "Brickwork and exterior wall washdowns",
      //     "Slippery green algae and weed clearing",
      //     "Outdoor furniture and bin area sanitization",
      //   ],
      // },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 py-24 md:py-34 selection:bg-handy-orange selection:text-white relative overflow-hidden">
      {/* === PAGE HEADER === */}
      <section className="bg-slate-950 p-5 pb-10 text-center border-b border-slate-900">
        <div className="max-w-4xl mx-auto mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            <span className="text-handy-orange"> Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            Comprehensive property maintenance, expert painting, and reliable
            repairs for homeowners across Dublin City and County Dublin.
          </motion.p>
        </div>
      </section>

      {/* === INTRODUCTION SECTION === */}
      <section className="bg-slate-900/50 py-16 px-6 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            The Right Builders for Your Property.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Maintaining a home takes time, effort, and a wide variety of skills.
            Instead of calling a separate local painter, carpenter, and
            repairman, Prime Build Construction offers a complete, all-in-one
            building and maintenance solution tailored to the Dublin market.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            We pride ourselves on doing the job right the first time. Whether we
            are completing a full interior painting project in South Dublin or
            working through a monthly property maintenance checklist in North
            Dublin, we bring professional-grade equipment, premium materials,
            and a meticulous eye for detail to every property we enter. Explore
            our core services below.
          </p>
        </div>
      </section>

      {/* === EXPANDED SERVICES LIST === */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {services.map((service, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col lg:items-center ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-16 group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <Image
                  src={service.imageUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={`Prime Build Construction - ${service.title}`}
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-slate-900 rounded-2xl border border-slate-700 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-handy-orange transition-colors duration-500">
                    <service.Icon
                      className={`w-8 h-8 ${service.iconColor}`}
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    {service.title}
                  </h2>
                </div>

                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* Dark Mode Checklist */}
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 shadow-lg relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-handy-orange opacity-5 blur-3xl rounded-full pointer-events-none" />

                  {/* <h3 className="font-bold text-slate-300 mb-6 tracking-wide uppercase text-sm border-b border-slate-800 pb-3">
                    Commonly Included in our Dublin Services:
                  </h3> */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <LuCheck
                          className="w-5 h-5 text-handy-orange shrink-0 mt-0.5"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                        <span className="text-slate-400 font-medium leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* === BOTTOM CTA === */}
      <section className="bg-slate-900 py-24 px-6 mt-auto border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Need a Custom Build or Repair in Dublin?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Every home is unique. If you have a custom project, structural
            extension, or need a combination of construction services across
            County Dublin, just give us a call. We&apos;re happy to discuss how
            we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/contact"
              className="bg-handy-orange text-white font-extrabold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request a Local Quote
            </Link>
            <a
              href="tel:+353000000000"
              className="flex items-center justify-center gap-3 bg-slate-800/50 backdrop-blur-md text-white font-extrabold text-lg px-10 py-4 rounded-full border border-slate-700 hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <LuPhone size={24} aria-hidden="true" />
              Call Our Team
            </a>
          </div>
        </div>
      </section>

      {/* === FLOATING BACK TO TOP BUTTON === */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-handy-orange text-white rounded-full shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:bg-orange-600 transition-all z-50 flex items-center justify-center back-to-top-btn active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Scroll back to the top of the page"
          >
            <LuArrowUp size={24} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
