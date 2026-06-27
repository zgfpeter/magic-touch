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
  LuCamera,
  LuCircleCheck,
  LuUsers,
  LuMessageSquare,
  LuMapPin,
  LuArrowRight,
} from "react-icons/lu";

import HandymanDivider from "@/components/ui/HandymanDivider";
import { irReviews, INReview } from "@/app/data/reviews"; // Adjust path as needed
const portfolio = [
  {
    id: 1,
    title: "Studio from the ground up.",
    category: "New Build",
    img: "/assets/projects/studio/studio-34.jpg",
  },
  // {
  //   id: 2,
  //   title: "Interior refresh",
  //   category: "Painting & Decorating",
  //   img: "/assets/repairs.jpg",
  // },
];

const services = [
  {
    Icon: LuHammer,
    iconColor: "text-amber-500",
    title: "Construction & Structural",
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
    Icon: LuHouse,
    iconColor: "text-blue-400",
    title: "Garden Rooms & Granny Flats",
    desc: "Expand your living space with our specialized builds, including custom garden rooms, studio apartments, and fully equipped granny flats tailored to Ireland properties.",
    imageUrl: "/assets/garden-room.jpeg",
    animation: {
      rest: { scale: 1 },
      hover: {
        scale: [1, 1.15, 0.95, 1.05, 1],
        transition: { duration: 0.5 },
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
    Icon: LuFence,
    iconColor: "text-emerald-500",
    title: "Exterior Cleaning & Power Washing",
    desc: "Gutter cleaning up to 2 storeys, power washing, and revitalization for driveways, patios, walls, and exterior surfaces.",
    imageUrl: "/assets/powerwashing.jpeg",
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

const whyChooseUs = [
  "All-in-One Project Management",
  "Uncompromising Quality Standards",
  "Fully Insured & Safety Certified",
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
  const [averageRating, setAverageRating] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      {/* === HERO SECTION === */}
      <section
        className="relative pt-20 flex flex-col justify-center items-center text-white overflow-hidden"
        aria-label="Ireland Construction Company Introduction"
      >
        {/* <Image
          src="/assets/heading-bg.jpg"
          fill
          sizes="100vw"
          alt="Professional construction site in Ireland"
          className="object-cover -z-10 opacity-30 mix-blend-luminosity"
          priority
        /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 -z-10" /> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-5xl text-center flex flex-col items-center gap-6"
            >
              {/* SEO Location Badge */}
              <div className="flex items-center gap-2 bg-slate-950/80 px-4 py-2 rounded-full border border-slate-800 shadow-inner">
                <LuMapPin
                  className="text-handy-orange"
                  size={16}
                  aria-hidden="true"
                />
                <span className="text-slate-300 font-semibold tracking-widest text-xs uppercase">
                  Laois Based, Serving All of Ireland
                </span>
              </div>

              <div className="relative p-30 w-full overflow-hidden rounded-3xl border border-slate-700/60 shadow-2xl inline-block ">
                <Image
                  src="/assets/company-logo-hi-vis-1.jpeg"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt="Prime Build Construction Ireland Background"
                  className="object-cover -z-10 opacity-50 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/90 -z-10" />

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
                  Prime Build{" "}
                  <span className="text-handy-orange">Construction</span>
                </h1>
              </div>
              <p className="text-base sm:text-lg text-slate-400 mb-6 leading-relaxed font-light">
                Reliable Ireland construction company delivering high-quality
                work, from groundworks to the final product. Whether it&apos;s a
                small repair or a full build, we bring exact precision and
                enduring craftsmanship to every project.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center py-4 px-10 rounded-full text-white bg-handy-orange font-bold shadow-lg shadow-orange-950/40 hover:bg-orange-600 active:scale-98 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-handy-orange"
                >
                  REQUEST A QUOTE
                </Link>
                <Link
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-3 py-4 px-10 rounded-full text-white border border-slate-800 bg-slate-900/50 backdrop-blur-md font-bold hover:bg-slate-800 active:scale-98 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-handy-orange"
                >
                  <LuPhone size={20} aria-hidden="true" />
                  <span>CALL US NOW</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === ABOUT US TEASER === */}
      <section
        className="bg-slate-950 py-20  md:py-28 border-b border-slate-900"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-900 group"
            >
              <Image
                src="/assets/about-us.jpeg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100"
                alt="Ireland construction professionals on site"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-4 text-handy-orange font-bold tracking-widest text-xs uppercase bg-orange-950/30 px-4 py-2 rounded-full border border-orange-900/40">
                <LuShieldCheck size={16} aria-hidden="true" />
                <span>Health & Safety Certified • Fully Insured</span>
              </div>

              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tighter"
              >
                Your Trusted Ireland Builders. <br></br>{" "}
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

      {/* === RECENT PROJECTS GALLERY === */}
      <section
        className="py-20 md:py-28 bg-slate-900 relative overflow-hidden"
        aria-labelledby="portfolio-heading"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-handy-orange opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3 text-handy-orange font-bold tracking-widest text-xs uppercase">
                <LuCamera size={16} aria-hidden="true" />
                <span>Before & Afters Available</span>
              </div>
              <h2
                id="portfolio-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter"
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
                className="relative h-64 rounded-2xl overflow-hidden border border-slate-800"
              >
                <Image
                  src={item.img}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={`PrimeBuildConstruction ${item.title} project in Ireland`}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-handy-orange font-semibold text-xs tracking-wider uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
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
                      : "flex-[1] opacity-50 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={item.img}
                    fill
                    sizes="40vw"
                    alt={`PrimeBuildConstruction ${item.title} project in Ireland`}
                    className="object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 pointer-events-none" />

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
          {/* === NEW: VIEW ALL PROJECTS BUTTON === */}
          <div className="mt-12 flex justify-end w-full relative z-20">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full text-white border border-slate-700 bg-slate-900/50 hover:bg-slate-800 active:scale-98 transition-all font-bold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange group"
            >
              <span>SEE MORE RECENT PROJECTS</span>
              <LuArrowRight
                size={18}
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      <HandymanDivider />

      {/* === START: SERVICES SECTION === */}
      <section id="services" className="bg-slate-900 pb-32 pt-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              OUR CONSTRUCTION SERVICES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-handy-orange to-orange-400 mx-auto"></div>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-2">
            {services.map((service, idx) => (
              <motion.article
                key={idx}
                initial="rest"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden group hover:border-slate-700 transition-all shadow-xl h-full "
              >
                {/* Image Area (Compact Height) */}
                <div className="relative w-full h-52 sm:h-72 shrink-0 overflow-hidden bg-slate-900">
                  {service.imageUrl ? (
                    <Image
                      src={service.imageUrl}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt={`Prime Build ${service.title} services in Ireland`}
                      className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500">
                      Image Coming Soon
                    </div>
                  )}
                  {/* Subtle overlay that fades out on hover */}
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="p-3 sm:p-5 flex flex-col flex-grow">
                  {/* The Animated Icon Container */}
                  <div className="flex items-center gap-3">
                    <div className="mb-4 p-3 bg-slate-900 w-fit rounded-full border border-slate-800 group-hover:border-slate-700 transition-colors shadow-inner">
                      <motion.div variants={service.animation}>
                        <service.Icon
                          className={`w-5 h-5 ${service.iconColor}`}
                          aria-hidden="true"
                        />
                      </motion.div>
                    </div>
                    <h3 className="text-xl sm:text-xl font-extrabold text-white mb-4 tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed mb-8 font-light flex-grow">
                    {service.desc}
                  </p>

                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-handy-orange font-bold hover:text-white transition-colors w-fit group/btn uppercase tracking-wider text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange rounded-sm mt-auto"
                  ></Link>
                </div>
              </motion.article>
            ))}
            {/* === 6TH GRID ITEM: THE CTA CARD === */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center justify-center bg-slate-900 border-2 border-dashed border-slate-700 hover:border-handy-orange/50 rounded-3xl p-8 text-center group transition-all duration-300 shadow-xl h-full min-h-[400px]"
            >
              <div className="mb-6 p-5 bg-slate-950 rounded-full group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <LuArrowRight
                  className="w-10 h-10 text-handy-orange group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                View All Services
              </h3>

              <p className="text-slate-400 text-base leading-relaxed mb-8 font-light">
                Discover our complete range of professional services in detail.
              </p>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full text-white bg-handy-orange font-bold shadow-lg shadow-orange-950/40 hover:bg-orange-600 active:scale-98 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-handy-orange"
              >
                <span>EXPLORE ALL</span>
              </Link>
            </motion.article>
          </div>
        </div>
      </section>
      {/* === END: SERVICES SECTION === */}

      {/* === WHY CHOOSE US === */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Prime Build Construction
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We combine skilled labour, the right tools, and a strong work
              ethic to deliver reliable results on every job in Ireland.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-slate-950/50 rounded-2xl border border-slate-800"
              >
                <LuCircleCheck
                  className="text-handy-orange shrink-0 mt-1"
                  size={24}
                />
                <p className="text-slate-300 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === NEW CONTACT CTA SECTION === */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-slate-900 rounded-2xl border border-slate-800 mb-6 shadow-inner">
            <LuMessageSquare
              className="w-8 h-8 text-handy-orange"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Get in touch with our team today. We&apos;ll discuss your
            requirements, provide expert advice, and deliver a comprehensive
            quote for your Ireland build.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center py-4 px-12 rounded-full text-white bg-handy-orange font-bold shadow-lg shadow-orange-950/40 hover:bg-orange-600 active:scale-98 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-handy-orange"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      {/* === DYNAMIC GOOGLE REVIEWS SECTION (DUMMY PLACEHOLDER) === */}
      <div className="max-w-7xl mx-auto px-6 mt-24 mb-16">
        <div className="bg-slate-900/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-handy-orange to-amber-500" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Trusted by local Ireland clients
              </h2>
            </div>

            {/* {!loading && ( */}
            {/* <div className="flex flex-col items-center gap-3 bg-slate-950/60 border border-slate-800 py-3 px-6 rounded-2xl w-fit"> */}
            {/* <div className="flex items-center justify-evenly w-full">
                  <span className="text-white font-extrabold text-lg">
                    {averageRating}{" "}
                    <span className="text-slate-400 font-light text-xs">
                      / 5
                    </span>
                  </span>
                  <div className="flex text-handy-orange text-sm">
                    {"★".repeat(Math.round(averageRating))}
                  </div>
                </div> */}
            {/* <div className=" w-fit"> */}
            {/* UPDATED: Authentic Colorful Google G-Logo Button */}
            {/* <a
                    href="https://www.google.com/maps/place/YOUR_BUSINESS_PLACE_ID_OR_CID_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-bold tracking-wide py-3 px-6 rounded-2xl transition-all shadow-inner"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.05-3.71 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span>View on Google</span>
                  </a> */}
            {/* </div> */}
            {/* </div> */}
            {/* )} */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading ? (
              <p className="text-slate-500 font-light col-span-full text-center py-8">
                Loading placeholder reviews...
              </p>
            ) : googleReviews.length > 0 ? (
              googleReviews.slice(0, 3).map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-950/60 p-6 rounded-2xl border border-handy-border flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={
                          review.authorAttribution?.photoUri
                            ? review.authorAttribution.photoUri
                            : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                review.authorAttribution?.displayName || "User",
                              )}&background=ea580c&color=ffffff&size=128`
                        }
                        alt={review.authorAttribution?.displayName || "User"}
                        className="w-12 h-12 rounded-2xl object-cover border border-slate-700"
                      />
                      <div>
                        <h4 className="font-bold text-sm text-white tracking-wide">
                          {review.authorAttribution?.displayName}
                        </h4>
                      </div>
                    </div>
                    <p className="text-slate-300 font-light text-sm leading-relaxed mb-4 h-30 overflow-scroll">
                      &quot;{review.text?.text}&quot;
                    </p>
                  </div>
                  <span className="block text-slate-500 text-xs mt-auto border-t border-slate-800/60 pt-3">
                    {review.relativePublishTimeDescription}
                  </span>
                </motion.div>
              ))
            ) : (
              <p className="text-slate-500 col-span-full">No reviews found.</p>
            )}
          </div>
        </div>
      </div>

      {/* === CAREERS SECTION === */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 px-6 py-12 sm:px-12 shadow-2xl text-center flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6 bg-slate-900 px-4 py-2 rounded-full border border-slate-800 shadow-inner">
              <LuUsers className="text-handy-orange" size={16} />
              <span className="text-slate-300 font-semibold tracking-widest text-xs uppercase">
                We Are Hiring
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Looking for hardworking people to join our Ireland team.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed font-light">
              If you have experience, are willing to learn, and take pride in
              the work you do, we want to hear from you.
            </p>
            <Link
              href="mailto:careers@PrimeBuildConstruction.com"
              className="inline-flex justify-center items-center bg-white text-slate-950 font-extrabold text-base sm:text-lg px-8 py-3.5 rounded-full hover:bg-slate-200 active:scale-98 transition-all shadow-md"
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
            className="scroll-to-top fixed bottom-6 right-6 p-3.5 bg-handy-orange text-white rounded-full shadow-xl shadow-orange-950/30 hover:bg-orange-600 transition-colors z-50 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Scroll back to top of webpage"
          >
            <LuArrowUp size={22} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
