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

  // BUG FIX: Wrapped in useMemo.
  // 1. Keeps the reference stable so Framer Motion doesn't stutter.
  // 2. Keeps it inside the component so Turbopack doesn't panic during HMR.
  const services = useMemo(
    () => [
      {
        Icon: LuHammer,
        iconColor: "text-amber-500",
        title: "Professional Handyman Services",
        desc: "Your weekend is too valuable to spend wrestling with flat-pack furniture or trying to figure out why a door won't close properly. Our comprehensive handyman services are designed to tackle your entire 'to-do' list in a single visit. We arrive with the right tools, the right hardware, and the expertise to handle everything from mounting heavy televisions securely to brickwork, to hanging delicate artwork perfectly level. No job is too small when it comes to making your home function perfectly.",
        imageUrl: "/assets/saemi-kim-4hcTkOw-EKE-unsplash.jpg",
        includes: [
          "Flat-pack furniture assembly (IKEA, etc.)",
          "Secure TV mounting & cable management",
          "Shelving, mirror, and picture hanging",
          "Door planning, lock fitting, and hinge adjustments",
          "Curtain pole and blind installation",
          "Smoke alarm and battery replacement",
        ],
      },
      {
        Icon: LuPaintbrush,
        iconColor: "text-cyan-500",
        title: "Interior Painting & Decorating",
        desc: "A fresh coat of paint is the most cost-effective way to completely transform a room, but a truly professional finish is all in the preparation. We don't just roll paint onto a wall. We meticulously prepare your space by filling cracks, sanding uneven surfaces, and taping off edges for perfectly crisp, straight lines. We protect your floors and furniture with heavy-duty drop cloths and use premium paints to ensure a durable, beautiful finish that completely revitalizes your living spaces.",
        imageUrl: "/assets/interior-painter.jpg",
        includes: [
          "Full room repaints (walls, ceilings, feature walls)",
          "Precision trim, baseboard, and door painting",
          "Kitchen and bathroom cabinet refinishing",
          "Extensive drywall prep, sanding, and priming",
          "Water damage stain blocking",
          "Wallpaper removal and wall smoothing",
        ],
      },
      {
        Icon: LuHouse,
        iconColor: "text-blue-400",
        title: "Exterior House Refresh",
        desc: "The harsh Irish weather can take a serious toll on the exterior of your property. Driving rain, wind, and fluctuating temperatures cause paint to peel and wood to rot. Our exterior refresh services are designed not just to make your home look beautiful, but to seal and protect it against the elements. We use high-quality, weather-resistant masonry paints and deep-penetrating wood stains that act as a shield for your home, significantly boosting your curb appeal and protecting your investment.",
        imageUrl: "/assets/exterior-painter.jpg",
        includes: [
          "Weather-resistant masonry and brickwork painting",
          "Exterior wood, siding, and trim touch-ups",
          "Deck, fence, and pergola sanding and staining",
          "Fascia, soffit, and gutterboard painting",
          "Front door restoration and painting",
          "Window sill scraping and repainting",
        ],
      },
      {
        Icon: LuWrench,
        iconColor: "text-stone-400",
        title: "General Home Repairs",
        desc: "Ignoring a small issue in your home almost always leads to a major, expensive emergency down the road. A slightly leaky faucet can cause hidden mold, and a damaged piece of siding can invite water into your walls. We specialize in diagnosing and fixing these structural and mechanical issues quickly. From patching unsightly holes in your drywall to fixing squeaky stairs and repairing cracked grout, we restore the integrity of your home so you can live comfortably and worry-free.",
        imageUrl: "/assets/repairs.jpg",
        includes: [
          "Drywall patching, plastering, and hole repair",
          "Minor plumbing fixes (leaky faucets, running toilets)",
          "Tile replacement and fresh grouting",
          "Squeaky floorboard and stair stabilization",
          "Weatherstripping and draft elimination",
          "Minor fencing and gate repairs",
        ],
      },
      {
        Icon: LuFence,
        iconColor: "text-emerald-500",
        title: "High-Pressure Washing",
        desc: "Over time, driveways, patios, and walkways accumulate a thick layer of dirt, algae, and slippery moss. Not only does this make your property look neglected, but it creates a serious slipping hazard. Our commercial-grade power washing service safely and effectively blasts away years of built-up grime, instantly revealing the original surface underneath. It is the fastest, most satisfying way to completely rejuvenate your outdoor spaces and prepare decks and fences for new stain.",
        imageUrl: "/assets/powerwashing.jpg",
        includes: [
          "Concrete driveway and sidewalk deep cleaning",
          "Patio, decking, and paving stone restoration",
          "Wooden fence and deck moss removal",
          "Brickwork and exterior wall washdowns",
          "Slippery algae and weed clearing",
          "Outdoor furniture and bin area cleaning",
        ],
      },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      // Cleaned up the logic here. React state sets are smart enough to bail out
      // if the value is already true/false, so we don't need to put it in the dependency array.
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array prevents constant re-attaching

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col relative selection:bg-handy-orange selection:text-white">
      {/* === PAGE HEADER === */}
      <section className="bg-slate-950 py-24 px-6 text-center border-b border-slate-900">
        <div className="max-w-3xl mx-auto mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            OUR <span className="text-handy-orange">SERVICES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            Comprehensive property maintenance, expert painting, and reliable
            repairs for homeowners across the greater Dublin area.
          </motion.p>
        </div>
      </section>

      {/* === INTRODUCTION SECTION === */}
      <section className="bg-slate-900/50 py-16 px-6 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            The Right Tools, The Right Experience.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Maintaining a home takes time, effort, and a wide variety of skills.
            Instead of calling a separate painter, carpenter, and repairman,
            Magic Touch offers a complete, all-in-one solution for your
            property.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            We pride ourselves on doing the job right the first time. Whether we
            are completing a full interior painting project or simply working
            through your monthly maintenance checklist, we bring
            professional-grade equipment, premium materials, and a meticulous
            eye for detail to every home we enter. Explore our core services
            below.
          </p>
        </div>
      </section>

      {/* === EXPANDED SERVICES LIST === */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {services.map((service, idx) => (
            <motion.div
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
                  sizes="(max-width: 768px) 100vw, 50vw" // FIX for the Next.js console warnings
                  alt={service.title}
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-slate-900 rounded-2xl border border-slate-700 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-handy-orange transition-colors duration-500">
                    <service.Icon className={`w-8 h-8 ${service.iconColor}`} />
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

                  <h4 className="font-bold text-slate-300 mb-6 tracking-wide uppercase text-sm border-b border-slate-800 pb-3">
                    Commonly Included:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <LuCheck
                          className="w-5 h-5 text-handy-orange shrink-0 mt-0.5"
                          strokeWidth={3}
                        />
                        <span className="text-slate-400 font-medium leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === BOTTOM CTA === */}
      <section className="bg-slate-900 py-24 px-6 mt-auto border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Don&apos;t see your specific project listed?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Every home is unique. If you have a custom project, odd job, or need
            a combination of services, just give us a call. We&apos;re happy to
            discuss how we can help tackle your specific needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/contact"
              className="bg-handy-orange text-white font-extrabold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all"
            >
              Send us a Message
            </Link>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-3 bg-slate-800/50 backdrop-blur-md text-white font-extrabold text-lg px-10 py-4 rounded-full border border-slate-700 hover:bg-slate-800 transition-all"
            >
              <LuPhone size={24} />
              Call Now
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
            className="fixed bottom-8 right-8 p-4 bg-handy-orange text-white rounded-full shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:bg-orange-600 transition-all z-50 flex items-center justify-center back-to-top-btn active:scale-95"
            aria-label="Scroll to top"
          >
            <LuArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
