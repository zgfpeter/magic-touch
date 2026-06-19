"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  LuMapPin,
  LuCheck,
  LuArrowUp,
  LuCamera,
  LuFolderOpen,
} from "react-icons/lu";

import HandymanDivider from "@/components/ui/HandymanDivider";

// --- DATA: MOVED OUTSIDE COMPONENT FOR TURBOPACK STABILITY ---
const projectsData = [
  {
    id: "rathmines-restoration",
    title: "Victorian Heritage Restoration",
    location: "Rathmines, Dublin",
    description:
      "A complete interior revitalization of a 19th-century redbrick home. The client wanted to modernize the living spaces while preserving the original architectural character. We conducted extensive plaster repair, restored the original wood trim, and applied a flawless, durable interior paint finish.",
    services: [
      "Extensive Plaster & Drywall Repair",
      "Custom Color Matching",
      "Heritage Wood Trim Restoration",
      "Premium Interior Painting",
    ],
    // 4 uniform portrait tiles
    images: [
      "/assets/interior-painter.jpg",
      "/assets/saemi-kim-4hcTkOw-EKE-unsplash.jpg",
      "/assets/repairs.jpg",
      "/assets/heading-bg.jpg",
    ],
  },
  {
    id: "howth-exterior",
    title: "Complete Exterior Weatherproofing",
    location: "Howth, Co. Dublin",
    description:
      "Located right on the coast, this property was taking a severe beating from the salty sea air and harsh Irish winds. We began with a deep commercial-grade power wash to remove algae and salt buildup, followed by masonry repairs and two coats of extreme-weather protective masonry paint.",
    services: [
      "Commercial Power Washing",
      "Masonry Crack Injection",
      "Weather-Resistant Exterior Painting",
      "Gutter & Fascia Board Refresh",
    ],
    // 4 uniform portrait tiles
    images: [
      "/assets/exterior-painter.jpg",
      "/assets/powerwashing.jpg",
      "/assets/about-us.jpg",
      "/assets/interior-painter.jpg",
    ],
  },
  {
    id: "ballsbridge-fitout",
    title: "Modern Kitchen Fit-out & Handyman Tasks",
    location: "Ballsbridge, Dublin",
    description:
      "The client needed a rapid turnaround to finish a kitchen modernization before the holidays. Our team stepped in to handle the final assembly of custom cabinetry, secure heavy appliance mounting, install modern hardware, and ensure every door and drawer aligned perfectly.",
    services: [
      "Flat-pack & Custom Cabinet Assembly",
      "Heavy Appliance & TV Mounting",
      "Hardware Installation",
      "Final Precision Adjustments",
    ],
    // 4 uniform portrait tiles
    images: [
      "/assets/saemi-kim-4hcTkOw-EKE-unsplash.jpg",
      "/assets/interior-painter.jpg",
      "/assets/repairs.jpg",
      "/assets/exterior-painter.jpg",
    ],
  },
];

export default function ProjectsPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollY } = useScroll();

  // Scroll listener for back-to-top button
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTopBtn(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 relative selection:bg-handy-orange selection:text-white overflow-hidden">
      <div className="relative min-h-screen flex flex-col">
        {/* === START: HERO SECTION === */}
        <section className="relative h-[60vh] flex flex-col justify-center items-center text-white overflow-hidden px-6">
          <Image
            src={"/assets/heading-bg.jpg"}
            fill
            sizes="100vw"
            alt="TotalBuild Construction past projects and portfolio"
            className="object-cover -z-10 opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950 -z-0" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-5xl text-center flex flex-col items-center gap-6 mt-12"
          >
            <div className="flex items-center justify-center gap-2 mb-2 text-handy-orange font-bold tracking-widest text-xs uppercase bg-orange-950/30 px-4 py-2 rounded-full border border-orange-900/50 w-fit mx-auto">
              <LuFolderOpen size={18} />
              <span>Our Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight drop-shadow-2xl">
              Featured <span className="text-handy-orange">Work.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
              Explore a selection of our recent transformations. From delicate
              interior restorations to robust exterior weatherproofing, the
              proof is in the details.
            </p>
          </motion.div>
        </section>
        {/* === END: HERO SECTION === */}

        {/* === START: PROJECTS SHOWCASE === */}
        <section className="py-12 md:py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col gap-12 lg:gap-16 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Details Side */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-handy-orange font-bold uppercase tracking-wider text-sm mb-4">
                    <LuMapPin size={18} />
                    <span>{project.location}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    {project.title}
                  </h2>

                  <div className="w-16 h-1 bg-gradient-to-r from-handy-orange to-amber-500 mb-8 rounded-full" />

                  <p className="text-lg text-slate-400 leading-relaxed mb-10 font-light">
                    {project.description}
                  </p>

                  <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-handy-orange opacity-[0.05] blur-3xl rounded-full pointer-events-none" />
                    <h3 className="font-bold text-slate-300 mb-6 tracking-wide uppercase text-sm border-b border-slate-800 pb-3">
                      Services Rendered:
                    </h3>
                    <ul className="flex flex-col gap-4">
                      {project.services.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                          <div className="mt-1 p-1 bg-slate-950 rounded-md border border-slate-800 group-hover:border-handy-orange transition-colors">
                            <LuCheck
                              className="w-4 h-4 text-handy-orange"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expanded 4-Photo Tall Tile Gallery */}
                <div className="w-full lg:w-7/12 grid grid-cols-2 gap-4 sm:gap-6 group lg:self-center">
                  {project.images.map((imgSrc, imgIdx) => (
                    <motion.div
                      key={imgIdx}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900"
                    >
                      <Image
                        src={imgSrc}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 25vw"
                        alt={`${project.title} completion photo ${imgIdx + 1}`}
                        className="object-cover opacity-70 hover:opacity-100 transition-all duration-500 mix-blend-luminosity hover:mix-blend-normal"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* === END: PROJECTS SHOWCASE === */}

        <HandymanDivider />

        {/* === START: BOTTOM CTA === */}
        <section className="py-24 px-6 bg-slate-950 border-t border-slate-900">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 px-8 py-16 shadow-2xl sm:px-16 md:py-24 text-center flex flex-col items-center"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-handy-orange opacity-10 blur-[80px]" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-600 opacity-10 blur-[80px]" />

              <div className="flex items-center justify-center gap-2 mb-6 text-handy-orange font-bold tracking-widest text-xs uppercase bg-slate-950/80 px-5 py-2.5 rounded-full border border-slate-700 shadow-inner z-10">
                <LuCamera size={18} />
                <span>Like what you see?</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10">
                Let&apos;s build your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                  masterpiece.
                </span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed relative z-10 font-light">
                Whether you need a complete exterior overhaul or precise
                interior finishing, our team is ready to bring your vision to
                life.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 relative z-10">
                <Link
                  href="/contact"
                  className="bg-handy-orange text-white font-extrabold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all"
                >
                  Request a Free Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* === END: BOTTOM CTA === */}
      </div>

      {/* === FLOATING BACK TO TOP BUTTON === */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-handy-orange text-white rounded-full shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:bg-orange-600 transition-colors z-50 flex items-center justify-center back-to-top-btn"
            aria-label="Scroll to top"
          >
            <LuArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
