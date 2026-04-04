"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  LuHammer,
  LuPhone,
  LuHouse,
  LuPaintbrush,
  LuWrench,
  LuFence,
  LuShieldCheck,
  LuArrowUp,
  LuPencilRuler,
} from "react-icons/lu";
import LightBlueprintBackground from "@/components/ui/Background-light";
import PaintStrokeDivider from "@/components/ui/PaintStrokeDivider";

export default function Home() {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // UPDATED SERVICES ARRAY: Now includes unique Framer Motion hover animations for every tool!
  const services = [
    {
      Icon: LuHammer,
      iconColor: "text-amber-900",
      title: "Handyman Services",
      desc: "From furniture assembly and broken light fixtures to sticking doors, we provide reliable, efficient solutions for the everyday repairs your home needs.",
      imageUrl: "/assets/saemi-kim-4hcTkOw-EKE-unsplash.jpg",
      // Hammer animation: Pulls back and strikes twice
      animation: {
        rest: { rotate: 0 },
        hover: {
          rotate: [0, -40, 15, -20, 10, 0],
          transition: { duration: 0.6 },
        },
      },
    },
    {
      Icon: LuPaintbrush,
      iconColor: "text-cyan-700",
      title: "Interior Painting",
      desc: "Transform your living spaces with our professional interior painting. We deliver crisp lines, immaculate prep work, and flawless finishes with zero mess.",
      imageUrl: "/assets/interior-painter.jpg",
      // Brush animation: Swipes left and right
      animation: {
        rest: { x: 0, rotate: 0 },
        hover: {
          x: [0, -5, 10],
          rotate: [0, -15, -20],
          transition: { duration: 1.5 },
        },
      },
    },
    {
      Icon: LuHouse,
      iconColor: "text-blue-500",
      title: "Exterior Refresh",
      desc: "Protect your home from the Irish weather. Our durable, weather-resistant painting, masonry touch-ups, and deck staining keep your property looking its best year-round.",
      imageUrl: "/assets/exterior-painter.jpg",
      // House animation: Bounces/pops out happily
      animation: {
        rest: { scale: 1 },
        hover: {
          scale: [1, 1.15, 0.95, 1.05, 1],
          transition: { duration: 0.5 },
        },
      },
    },
    {
      Icon: LuWrench,
      iconColor: "text-stone-500",
      title: "General Home Repairs",
      desc: "From repairing damaged drywall to fixing squeaky hinges and leaky faucets, we handle the essential maintenance that keeps your home functioning perfectly.",
      imageUrl: "/assets/repairs.jpg",
      // Wrench animation: Turns a bolt back and forth
      animation: {
        rest: { rotate: 0 },
        hover: { rotate: [0, 45, 0, 45, 0], transition: { duration: 0.6 } },
      },
    },
    {
      Icon: LuFence,
      iconColor: "text-emerald-800",
      title: "Power Washing",
      desc: "Revitalize your driveways, patios, and fences. Our thorough power washing service removes stubborn grime, moss, and algae, instantly restoring your outdoor surfaces.",
      imageUrl: "/assets/powerwashing.jpg",
      // Fence animation: Vibrates vigorously like it's being hit with a high-pressure hose!
      animation: {
        rest: { x: 0, y: 0 },
        hover: {
          x: [0, -2, 2, -2, 2, -2, 2, 0],
          y: [0, 2, -2, 2, -2, 2, -2, 0],
          transition: { duration: 0.4 },
        },
      },
    },
  ];

  return (
    <main className="min-h-screen relative">
      <div className="relative min-h-screen flex flex-col">
        {/* === START: HERO SECTION === */}
        <section className="relative h-[70vh] flex flex-col justify-center items-center text-white overflow-hidden p-8">
          <LightBlueprintBackground />
          <Image
            src={"/assets/heading-bg.jpg"}
            fill
            alt="Professional home repair and painting services in Dublin"
            className="object-cover -z-10"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/60 -z-0" />
          <div className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Professional <span className="text-handy-orange">HANDYMAN</span> &{" "}
              <span className="bg-gradient-to-r from-red-500 via-teal-700 to-amber-300 bg-clip-text text-transparent ">
                PAINTING
              </span>{" "}
              Services in Dublin
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Delivering exceptional craftsmanship to homes across the greater
              Dublin area. Whether you need precise interior painting, essential
              home repairs, or routine maintenance, our skilled team ensures
              your property is treated with the utmost care.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:+1234567890"
                className="flex items-center justify-center gap-3 p-3.5 rounded-md px-8 text-white bg-handy-orange font-extrabold shadow-2xl hover:bg-orange-600 transition"
              >
                <LuPhone size={24} />
                CALL US NOW
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 p-3.5 rounded-md px-8 text-white bg-handy-blue font-extrabold shadow-2xl hover:bg-blue-800 transition"
              >
                BOOK ONLINE
              </Link>
            </div>
          </div>
        </section>
        {/* === END: HERO SECTION === */}

        {/* === START: ABOUT US TEASER === */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Image Area */}
              <div className="w-full lg:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="/assets/about-us.jpg"
                  fill
                  className="object-cover"
                  alt="Magic Touch team working on a home repair in Dublin"
                />
              </div>

              {/* Text Content Area */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-4 text-handy-orange font-bold tracking-wider text-sm uppercase">
                  <LuShieldCheck size={20} />
                  <span>Fully Insured & Local</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Your Trusted Neighbors in <br />
                  Home Repair
                </h2>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We know that inviting a contractor into your home requires
                  trust. As a locally owned Dublin business, we built Magic
                  Touch on three simple principles: show up on time, do the job
                  right the first time, and leave the workspace cleaner than we
                  found it.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Whether we are hanging a few shelves or completely repainting
                  the exterior of your house, we treat your property with the
                  exact same respect we treat our own.
                </p>

                <Link
                  href="/about"
                  className="group flex items-center gap-2 text-handy-blue font-bold text-lg hover:text-handy-orange transition-colors"
                >
                  Read Our Full Story
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* === END: ABOUT US TEASER === */}

        {/* === START: PAINT STROKE DIVIDER === */}
        {/* This SVG bridges the white About section and the dark Services section */}
        <PaintStrokeDivider />
        {/* === END: PAINT STROKE DIVIDER === */}

        {/* === START: SERVICES SECTION === */}
        <section id="services" className="bg-slate-900 pb-24 pt-12 flex-grow">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                OUR SERVICES
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-handy-orange to-orange-400"></div>
            </div>

            <div className="flex flex-col gap-12">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial="rest" // Set default state for the hover animation
                  whileHover="hover" // Triggers the 'hover' variant on all children
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } bg-slate-950 border border-slate-800 rounded-xl overflow-hidden group hover:border-slate-700 transition-all shadow-lg cursor-pointer`}
                >
                  {/* Column 1: The Image Area */}
                  <div className="relative w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
                    {service.imageUrl ? (
                      <Image
                        src={service.imageUrl}
                        fill
                        alt={service.title}
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                        Image Coming Soon
                      </div>
                    )}
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Column 2: The Content Area */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center h-125">
                    {/* The Animated Icon Container */}
                    <div className="mb-6 p-4 bg-slate-900 w-fit rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-colors">
                      <motion.div variants={service.animation}>
                        <service.Icon
                          className={`w-8 h-8 ${service.iconColor}`}
                        />
                      </motion.div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h3>

                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    <Link
                      href="/contact"
                      className="flex items-center gap-2 text-handy-orange font-bold hover:text-white transition-colors w-fit group/btn"
                    >
                      Get a Free Quote
                      <span className="group-hover/btn:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* === END: SERVICES SECTION === */}
      </div>
      {/* === START: CUSTOM PROJECT CTA === */}
      <section className=" py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-slate-100 px-8 py-16 shadow-2xl sm:px-16 md:py-24">
            {/* Decorative Background Element */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-handy-orange blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-handy-blue blur-3xl" />

            <div className="relative flex flex-col items-center text-center">
              {/* Updated Icon and Label */}
              <div className="flex items-center gap-2 mb-6 bg-slate-800/90 px-4 py-2 rounded-full border border-slate-700">
                <LuPencilRuler className="text-handy-orange" size={20} />
                <span className="text-slate-200 font-bold tracking-widest text-xs uppercase">
                  CUSTOM SOLUTIONS
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold  mb-6 leading-tight">
                Do you have a custom project? <br />
                <span className="text-handy-orange">
                  We might be able to help.
                </span>
              </h2>

              <p className="text-lg text-slate-900 mb-10 max-w-2xl leading-relaxed">
                We understand that not every home project fits into a neat
                category. From unique architectural repairs to creative
                installations tailored specifically to your lifestyle, we thrive
                on the &quot;out-of-the-box&quot; tasks that make your house
                feel like a home.
              </p>

              <Link
                href="/contact"
                className="bg-handy-orange text-white border border-white/20 font-bold text-lg px-10 py-4 rounded-xl hover:bg-white/20 transition-all text-center backdrop-blur-sm"
              >
                Send us a message
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* === END: CUSTOM PROJECT CTA === */}
      <PaintStrokeDivider />
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
