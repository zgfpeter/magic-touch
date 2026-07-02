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
  LuShieldCheck,
  LuArrowUp,
  LuCamera,
  LuCircleCheck,
  LuUsers,
  LuMessageSquare,
  LuMapPin,
  LuArrowRight,
  LuDrill,
} from "react-icons/lu";

import HandymanDivider from "@/components/ui/HandymanDivider";
import { irReviews } from "@/app/data/reviews"; // Adjust path as needed

// --- DATA ARRAYS ---
const portfolio = [
  {
    id: 1,
    title: "Studio from the ground up.",
    category: "New Build",
    img: "/assets/projects/studio/studio-34.jpg",
  },
];

const services = [
  {
    Icon: LuHouse,
    iconColor: "text-blue-400",
    title: "Garden Rooms & Granny Flats",
    desc: "Expand your living space with our specialized builds, including custom garden rooms, studio apartments, and fully equipped granny flats tailored to Ireland properties.",
    imageUrl: "/assets/garden-room.jpeg",
    animation: {
      rest: { scale: 1 },
      hover: { scale: [1, 1.15, 0.95, 1.05, 1], transition: { duration: 0.5 } },
    },
  },
  {
    Icon: LuDrill,
    iconColor: "text-emerald-700",
    title: "Renovations",
    desc: "Transform your space with our comprehensive renovation solutions. Whether you're modernizing a single room or undertaking a full-scale home refurbishment, we provide expert craftsmanship tailored to your space and style.",
    imageUrl: "/assets/maintenance.jpeg",
    animation: {
      rest: { x: 0, y: 0 },
      hover: {
        x: [0, -1.5, 1.5, -1.5, 1.5, -1.5, 1.5, 0],
        y: [0, 1.5, -1.5, 1.5, -1.5, 1.5, -1.5, 0],
        transition: { duration: 0.5 },
      },
    },
  },
  {
    Icon: LuWrench,
    iconColor: "text-stone-400",
    title: "Property Maintenance",
    desc: "Keep your property in top shape with our maintenance services, covering everything from small construction jobs to general repairs for Ireland homeowners and landlords.",
    imageUrl: "/assets/repairs.jpeg",
    animation: {
      rest: { rotate: 0 },
      hover: { rotate: [0, 45, 0, 45, 0], transition: { duration: 0.6 } },
    },
  },
  {
    Icon: LuHammer,
    iconColor: "text-amber-500",
    title: "Small Constructions & Structural",
    desc: "From groundworks to final product. We handle reinforced concrete, block wall construction, and precision timber frame structures across Ireland.",
    imageUrl: "/assets/construction-structural.jpeg",
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
    iconColor: "text-cyan-500",
    title: "Interior Finishes",
    desc: "Complete interior transformations including plasterboard installation, joint taping and skimming, painting and decorating, tiling, laminate flooring, and door/window installations.",
    imageUrl: "/assets/interior-painter.jpeg",
    animation: {
      rest: { x: 0, rotate: 0 },
      hover: {
        x: [0, -5, 10],
        rotate: [0, -15, -20],
        transition: { duration: 1.5 },
      },
    },
  },
];

const whyChooseUs = [
  "All-in-One Project Management",
  "Uncompromising Quality Standards",
  "Health & Safety Certified",
  "Rapid, Team-Based Execution",
  "Flawless Attention To Detail",
  "Clean & Respectful Site Practices",
];

interface GoogleReview {
  authorAttribution: {
    displayName: string;
    photoUri?: string;
  };
  text: {
    text: string;
  };
  relativePublishTimeDescription: string;
}

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        setGoogleReviews(irReviews);
      } catch (err) {
        console.error("Error loading reviews", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 relative selection:bg-handy-orange selection:text-white pt-20">
      {/* === HERO SECTION (Dark) === */}
      <section
        className="bg-slate-950 py-20 md:py-28"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Standardized Badge */}
            <div className="flex items-center gap-2 bg-slate-900 px-5 py-2.5 rounded-full border border-slate-800 shadow-sm w-fit">
              <LuMapPin
                className="text-handy-orange"
                size={16}
                aria-hidden="true"
              />
              <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                Laois Based, Serving All of Ireland
              </span>
            </div>

            <div className="relative p-24 sm:p-40 w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 shadow-2xl inline-block isolate">
              {/* Layer 1: The Image (Added `priority`, removed `-z-10`) */}
              <Image
                src="/assets/company-logo-hi-vis-1.jpeg"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
                alt="Prime Build Construction Ireland Background"
                className="object-cover opacity-80 mix-blend-luminosity"
              />

              {/* Layer 2: The Gradient Overlay (Removed `-z-10`, added pointer-events-none) */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/90 pointer-events-none" />

              {/* Layer 3: The Text (Wrapped in a relative z-10 container to stay on top) */}
              <div className="relative z-10">
                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-white text-center"
                >
                  Prime Build{" "}
                  <span className="text-handy-orange">Construction</span>
                </h1>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-400 mb-6 leading-relaxed font-light">
              Reliable Ireland construction company specializing in property
              renovations. From complete home modernizations and flawless
              interior finishes to custom granny flats and small structural
              builds, we bring exact precision and enduring craftsmanship to
              every space we transform.
            </p>

            {/* Standardized Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center py-4 px-10 rounded-full text-white bg-handy-orange font-bold shadow-lg shadow-orange-950/40 hover:bg-orange-600 active:scale-98 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-handy-orange"
              >
                REQUEST A QUOTE
              </Link>
              <Link
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-3 py-4 px-10 rounded-full text-white border border-slate-700 bg-slate-900/80 backdrop-blur-md font-bold hover:bg-slate-800 active:scale-98 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-handy-orange"
              >
                <LuPhone size={20} aria-hidden="true" />
                <span>CALL US NOW</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === ABOUT US TEASER (Light) === */}
      <section
        className="bg-slate-900 py-20 md:py-28"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group"
            >
              <Image
                src="/assets/about-us.jpeg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100"
                alt="Ireland construction professionals on site"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              {/* Standardized Badge */}
              <div className="flex items-center gap-2 mb-6 bg-slate-950 px-5 py-2.5 rounded-full border border-slate-800 shadow-sm w-fit">
                <LuShieldCheck
                  className="text-handy-orange"
                  size={16}
                  aria-hidden="true"
                />
                <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                  Health & Safety Certified
                </span>
              </div>

              <h2
                id="about-heading"
                className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6 leading-tight"
              >
                Your Trusted Ireland Builders.
                <br />
                <span className="text-slate-400">Start to Finish.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-400 mb-6 leading-relaxed font-light">
                PrimeBuildConstruction is a growing Laois, Ireland based company
                built on hard work, practical experience, and a commitment to
                doing the right job. Our goal is to offer clients a stress-free
                experience by managing multiple stages of a project under one
                company across the greater Ireland area.
              </p>
              <p className="text-base sm:text-lg text-slate-400 mb-6 leading-relaxed font-light">
                We maintain core standards of high quality, consistency,
                attention to detail, and on-time delivery. Our skilled and
                expanding team brings multi-trade capability to every site.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === RECENT PROJECTS GALLERY (Dark) === */}
      <section
        className="bg-slate-950 py-20 md:py-28 relative overflow-hidden"
        aria-labelledby="portfolio-heading"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-handy-orange opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              {/* Standardized Badge */}
              <div className="flex items-center gap-2 mb-6 bg-slate-900 px-5 py-2.5 rounded-full border border-slate-800 shadow-sm w-fit">
                <LuCamera
                  className="text-handy-orange"
                  size={16}
                  aria-hidden="true"
                />
                <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                  Before & Afters Available
                </span>
              </div>
              <h2
                id="portfolio-heading"
                className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter"
              >
                Recent{" "}
                <span className="text-slate-400">Projects In Ireland.</span>
              </h2>
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="relative h-64 rounded-3xl overflow-hidden border border-slate-800 shadow-lg"
              >
                <Image
                  src={item.img}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={`PrimeBuildConstruction ${item.title} project in Ireland`}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-handy-orange font-bold text-xs tracking-wider uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Accordion */}
          <div className="hidden md:flex h-[500px] w-full gap-4">
            {portfolio.map((item, index) => {
              const isActive = activeProject === index;
              return (
                <button
                  key={item.id}
                  onMouseEnter={() => setActiveProject(index)}
                  onClick={() => setActiveProject(index)}
                  onFocus={() => setActiveProject(index)}
                  aria-expanded={isActive}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer text-left transition-all duration-500 ease-out border border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange ${
                    isActive
                      ? "flex-[5] shadow-2xl ring-1 ring-slate-700/50"
                      : "flex-[1] opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.img}
                    fill
                    sizes="40vw"
                    alt={`PrimeBuildConstruction ${item.title} project in Ireland`}
                    className="object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end h-full pointer-events-none">
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 15,
                      }}
                      transition={{ duration: 0.3 }}
                      className="truncate"
                    >
                      <span className="text-handy-orange font-bold text-xs tracking-wider uppercase mb-1.5 block">
                        {item.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white truncate">
                        {item.title}
                      </h3>
                    </motion.div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-12 flex justify-end w-full relative z-20">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 py-4 px-10 rounded-full text-white border border-slate-700 bg-slate-900/80 hover:bg-slate-800 active:scale-98 transition-all font-bold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange group"
            >
              <span>SEE MORE RECENT PROJECTS</span>
              <LuArrowRight
                size={20}
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      <HandymanDivider />

      {/* === SERVICES SECTION (Light) === */}
      <section id="services" className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
              Our Construction <span className="text-slate-400">Services.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-handy-orange to-orange-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.article
                key={idx}
                initial="rest"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden group hover:border-slate-700 transition-all shadow-xl h-full"
              >
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-900">
                  {service.imageUrl ? (
                    <Image
                      src={service.imageUrl}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt={`Prime Build ${service.title} services in Ireland`}
                      className="object-cover object-center transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 font-light">
                      Image Coming Soon
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-900 rounded-full border border-slate-800 group-hover:border-slate-700 transition-colors shadow-inner">
                      <motion.div variants={service.animation}>
                        <service.Icon
                          className={`w-6 h-6 ${service.iconColor}`}
                          aria-hidden="true"
                        />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed font-light flex-grow">
                    {service.desc}
                  </p>
                </div>
              </motion.article>
            ))}

            {/* View All CTA Card */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center justify-center bg-slate-900 border-2 border-dashed border-slate-700 hover:border-handy-orange/50 rounded-3xl p-8 text-center group transition-all duration-300 shadow-xl h-full min-h-[400px]"
            >
              <div className="mb-6 p-5 bg-slate-950 rounded-full group-hover:scale-110 transition-transform duration-500 border border-slate-800 shadow-inner">
                <LuArrowRight
                  className="w-10 h-10 text-handy-orange group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                View All Services
              </h3>
              <p className="text-slate-400 text-base leading-relaxed mb-8 font-light">
                Discover our complete range of professional services in detail.
              </p>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-10 rounded-full text-white bg-handy-orange font-bold shadow-lg shadow-orange-950/40 hover:bg-orange-600 active:scale-98 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-handy-orange"
              >
                EXPLORE ALL
              </Link>
            </motion.article>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US (Dark) === */}
      <section className="bg-slate-950 py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
              Why Choose <span className="text-handy-orange">Prime Build.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              We combine skilled labour, the right tools, and a strong work
              ethic to deliver reliable results on every job in Ireland.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-sm hover:border-slate-700 transition-colors"
              >
                <LuCircleCheck
                  className="text-handy-orange shrink-0"
                  size={24}
                />
                <p className="text-slate-200 font-bold tracking-wide">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTACT CTA SECTION (Light) === */}
      <section className="bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center p-5 bg-slate-950 rounded-full border border-slate-800 mb-8 shadow-inner">
            <LuMessageSquare
              className="w-8 h-8 text-handy-orange"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Have a project in mind?
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Get in touch with our team today. We&apos;ll discuss your
            requirements, provide expert advice, and deliver a comprehensive
            quote for your build.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center py-4 px-12 rounded-full text-white bg-handy-orange font-bold shadow-lg shadow-orange-950/40 hover:bg-orange-600 active:scale-98 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-handy-orange"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      {/* === GOOGLE REVIEWS SECTION (Dark) === */}
      <section className="bg-slate-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-handy-orange to-orange-400" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter">
                Trusted by local{" "}
                <span className="text-slate-400">clients.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <p className="text-slate-500 font-light col-span-full text-center py-8">
                  Loading reviews...
                </p>
              ) : googleReviews.length > 0 ? (
                googleReviews.slice(0, 3).map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between h-full shadow-inner"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={
                            review.authorAttribution?.photoUri
                              ? review.authorAttribution.photoUri
                              : `https://ui-avatars.com/api/?name=${encodeURIComponent(review.authorAttribution?.displayName || "User")}&background=ea580c&color=ffffff&size=128`
                          }
                          alt={review.authorAttribution?.displayName || "User"}
                          className="w-12 h-12 rounded-full object-cover border border-slate-700"
                          loading="lazy"
                        />
                        <h4 className="font-bold text-base text-white tracking-wide">
                          {review.authorAttribution?.displayName}
                        </h4>
                      </div>
                      <p className="text-slate-400 font-light text-base leading-relaxed mb-6 italic">
                        &quot;{review.text?.text}&quot;
                      </p>
                    </div>
                    <span className="block text-slate-500 text-xs mt-auto border-t border-slate-800/60 pt-4 uppercase tracking-widest font-semibold">
                      {review.relativePublishTimeDescription}
                    </span>
                  </motion.div>
                ))
              ) : (
                <p className="text-slate-500 col-span-full text-center font-light">
                  No reviews found.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* === CAREERS SECTION (Light) === */}
      <section className="bg-slate-900 py-20 md:py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-16 shadow-2xl text-center flex flex-col items-center">
            {/* Standardized Badge */}
            <div className="flex items-center gap-2 mb-8 bg-slate-900 px-5 py-2.5 rounded-full border border-slate-800 shadow-sm w-fit">
              <LuUsers
                className="text-handy-orange"
                size={16}
                aria-hidden="true"
              />
              <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                We Are Hiring
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6 leading-tight">
              Looking for hardworking people to join our team.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
              If you have experience, are willing to learn, and take pride in
              the work you do, we want to hear from you.
            </p>
            <Link
              href="mailto:careers@PrimeBuildConstruction.com"
              className="inline-flex justify-center items-center bg-white text-slate-950 font-extrabold text-base px-10 py-4 rounded-full hover:bg-slate-200 active:scale-98 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-white"
            >
              Send your CV to ourcompany@gmail.com
            </Link>
          </div>
        </div>
      </section>

      {/* === FLOATING BACK TO TOP BUTTON === */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-4 bg-handy-orange text-white rounded-full shadow-xl shadow-orange-950/40 hover:bg-orange-600 transition-colors z-50 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-white"
            aria-label="Scroll back to top of webpage"
          >
            <LuArrowUp size={24} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
