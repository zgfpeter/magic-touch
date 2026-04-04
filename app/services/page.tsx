"use client";
import { useState, useEffect } from "react";
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
  LuCheck, // Using the correct, standard check icon
} from "react-icons/lu";

export default function ServicesPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // EXPANDED DATA: Richer descriptions, no animations, SEO-optimized text
  const services = [
    {
      Icon: LuHammer,
      iconColor: "text-amber-900",
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
      iconColor: "text-cyan-700",
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
      iconColor: "text-blue-500",
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
      iconColor: "text-stone-500",
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
      iconColor: "text-emerald-800",
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
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col relative">
      {/* === PAGE HEADER === */}
      <section className="bg-slate-950 py-24 px-6 text-center border-b border-slate-800">
        <div className="max-w-3xl mx-auto mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-3xl font-extrabold text-white tracking-tight mb-6"
          >
            OUR <span className="text-handy-orange">SERVICES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            Comprehensive property maintenance, expert painting, and reliable
            repairs for homeowners across the greater Dublin area.
          </motion.p>
        </div>
      </section>

      {/* === NEW INTRODUCTION SECTION FOR SEO & CONTEXT === */}
      <section className="bg-white py-16 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            The Right Tools, The Right Experience.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Maintaining a home takes time, effort, and a wide variety of skills.
            Instead of calling a separate painter, carpenter, and repairman,
            Magic Touch offers a complete, all-in-one solution for your
            property.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:items-center ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-16 group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                {service.imageUrl ? (
                  <Image
                    src={service.imageUrl}
                    fill
                    alt={service.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500">
                    Image Coming Soon
                  </div>
                )}
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-slate-900/5 transition-colors duration-500" />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 gap-3  flex justify-between items-center">
                  <div className=" p-5 bg-white shadow-sm w-fit rounded-2xl border border-slate-100 ">
                    {service.title}
                  </div>
                  <service.Icon className={`w-10 h-10 ${service.iconColor}`} />
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* SEO-Friendly Checklist with the updated LuCheck icon */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm mb-8">
                  <h4 className="font-bold text-slate-900 mb-6 tracking-wide uppercase text-sm border-b border-slate-100 pb-3">
                    Commonly Included:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <LuCheck
                          className="w-5 h-5 text-handy-orange shrink-0 mt-0.5"
                          strokeWidth={3}
                        />
                        <span className="text-slate-700 font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="w-fit bg-handy-blue text-white font-bold px-8 py-4 rounded-md shadow-md hover:bg-handy-orange transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === BOTTOM CTA === */}
      <section className="bg-slate-900 py-24 px-6 mt-auto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Don&apos;t see your specific project listed?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Every home is unique. If you have a custom project, odd job, or need
            a combination of services, just give us a call. We&apos;re happy to
            discuss how we can help tackle your specific needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-handy-orange text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:bg-orange-600 transition-colors"
            >
              Send us a Message
            </Link>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-3 bg-slate-800 text-white font-bold text-lg px-8 py-4 rounded-md border border-slate-700 hover:bg-slate-700 transition-colors"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-handy-orange text-white rounded-full shadow-2xl hover:bg-orange-600 transition-colors z-50 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <LuArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
