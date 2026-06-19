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
  LuCamera,
  LuStar,
  LuMessageSquareQuote,
  LuChevronDown, // <-- Added for the expand button
} from "react-icons/lu";

import HandymanDivider from "@/components/ui/HandymanDivider";

// --- DATA OUTSIDE COMPONENT TO PREVENT TURBOPACK CRASHES ---

// UPDATED: Added `projectImg` to each testimonial for the dynamic expansion
const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner, Ballsbridge",
    text: "Magic Touch completely transformed our living room. The attention to detail, crisp paint lines, and daily clean-up were incredible.",
    rating: 5,
    projectImg: "/assets/interior-painter.jpg",
  },
  {
    id: 2,
    name: "David O'Connor",
    role: "Property Manager",
    text: "Reliable, on-time, and perfectly executed. They are my go-to team for all property maintenance and tenant repair requests.",
    rating: 5,
    projectImg: "/assets/repairs.jpg",
  },
  {
    id: 3,
    name: "Emma Byrne",
    role: "Homeowner, Rathmines",
    text: "From the initial quote to the final walk-through, absolute professionals. The exterior paint job looks stunning and has held up perfectly.",
    rating: 5,
    projectImg: "/assets/exterior-painter.jpg",
  },
  {
    id: 4,
    name: "Michael Clarke",
    role: "Cafe Owner",
    text: "Fixed our plumbing issues and patched the drywall so well you would never know there was a hole. Highly recommended for commercial fixes.",
    rating: 5,
    projectImg: "/assets/saemi-kim-4hcTkOw-EKE-unsplash.jpg",
  },
];

const portfolio = [
  {
    id: 1,
    title: "Living Room Refresh",
    category: "Interior Painting",
    img: "/assets/interior-painter.jpg",
  },
  {
    id: 2,
    title: "Exterior Restoration",
    category: "Weatherproofing",
    img: "/assets/exterior-painter.jpg",
  },
  {
    id: 3,
    title: "Custom Woodwork",
    category: "Handyman Services",
    img: "/assets/saemi-kim-4hcTkOw-EKE-unsplash.jpg",
  },
  {
    id: 4,
    title: "Driveway Revitalization",
    category: "Power Washing",
    img: "/assets/powerwashing.jpg",
  },
];

const services = [
  {
    Icon: LuHammer,
    iconColor: "text-amber-500",
    title: "Handyman Services",
    desc: "From furniture assembly and broken light fixtures to sticking doors, we provide reliable, efficient solutions for the everyday repairs your home needs.",
    imageUrl: "/assets/saemi-kim-4hcTkOw-EKE-unsplash.jpg",
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
    title: "Interior Painting",
    desc: "Transform your living spaces with our professional interior painting. We deliver crisp lines, immaculate prep work, and flawless finishes with zero mess.",
    imageUrl: "/assets/interior-painter.jpg",
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
    iconColor: "text-blue-400",
    title: "Exterior Refresh",
    desc: "Protect your home from the Irish weather. Our durable, weather-resistant painting, masonry touch-ups, and deck staining keep your property looking its best year-round.",
    imageUrl: "/assets/exterior-painter.jpg",
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
    iconColor: "text-stone-400",
    title: "General Home Repairs",
    desc: "From repairing damaged drywall to fixing squeaky hinges and leaky faucets, we handle the essential maintenance that keeps your home functioning perfectly.",
    imageUrl: "/assets/repairs.jpg",
    animation: {
      rest: { rotate: 0 },
      hover: { rotate: [0, 45, 0, 45, 0], transition: { duration: 0.6 } },
    },
  },
  {
    Icon: LuFence,
    iconColor: "text-emerald-500",
    title: "Power Washing",
    desc: "Revitalize your driveways, patios, and fences. Our thorough power washing service removes stubborn grime, moss, and algae, instantly restoring your outdoor surfaces.",
    imageUrl: "/assets/powerwashing.jpg",
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

interface GoogleReview {
  authorAttribution: {
    displayName: string;
    photoUri?: string;
  };
  rating: number;
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

  // NEW STATE: Tracks which testimonial card is currently expanded
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(
    null,
  );
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
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        setGoogleReviews(data.reviews || []);
        setAverageRating(data.rating || 0);
      } catch (err) {
        console.error("Error loading reviews", err);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 relative selection:bg-handy-orange selection:text-white">
      <div className="relative min-h-screen flex flex-col">
        {/* === START: HERO SECTION === */}
        <section className="relative h-[80vh] flex flex-col justify-center items-center text-white overflow-hidden px-6">
          <Image
            src={"/assets/heading-bg.jpg"}
            fill
            sizes="100vw"
            alt="Professional home repair and painting services"
            className="object-cover -z-10 opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 -z-0" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-5xl text-center flex flex-col items-center gap-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight drop-shadow-2xl">
              Precision <span className="text-handy-orange">HANDYMAN</span>{" "}
              <br className="hidden md:block" />&{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                PAINTING
              </span>{" "}
              Services
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 leading-relaxed max-w-3xl font-light">
              Exceptional craftsmanship for modern homes. From precise interior
              painting to essential structural repairs, we treat your property
              with absolute care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-5">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 py-4 px-10 rounded-full text-white bg-handy-orange font-bold shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all"
              >
                BOOK ONLINE
              </Link>
              <Link
                href="tel:+1234567890"
                className="flex items-center justify-center gap-3 py-4 px-10 rounded-full text-white border border-slate-700 bg-slate-900/50 backdrop-blur-md font-bold hover:bg-slate-800 transition-all"
              >
                <LuPhone size={20} />
                CALL US NOW
              </Link>
            </div>
          </motion.div>
        </section>
        {/* === END: HERO SECTION === */}

        {/* === START: ABOUT US TEASER === */}
        <section className="bg-slate-950 py-24 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group"
              >
                <Image
                  src="/assets/about-us.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                  alt="Team working on a home repair"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col items-start"
              >
                <div className="flex items-center gap-2 mb-4 text-handy-orange font-bold tracking-widest text-xs uppercase bg-orange-950/30 px-4 py-2 rounded-full border border-orange-900/50">
                  <LuShieldCheck size={18} />
                  <span>Fully Insured & Local</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
                  Your Trusted Neighbors in{" "}
                  <span className="text-slate-500">Home Repair.</span>
                </h2>

                <p className="text-lg text-slate-400 mb-6 leading-relaxed font-light">
                  We know that inviting a contractor into your home requires
                  trust. As a locally owned business, we built Magic Touch on
                  three simple principles: show up on time, do the job right the
                  first time, and leave the workspace cleaner than we found it.
                </p>

                <Link
                  href="/about-us"
                  className="group flex items-center gap-3 text-white font-bold text-lg mt-4 border-b border-handy-orange pb-1 hover:text-handy-orange transition-colors"
                >
                  Read Our Full Story
                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        {/* === END: ABOUT US TEASER === */}

        {/* === START: MODERN ACCORDION GALLERY === */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-handy-orange opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4 text-handy-orange font-bold tracking-widest text-xs uppercase">
                  <LuCamera size={18} />
                  <span>Featured Work</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
                  Recent <span className="text-slate-500">Projects.</span>
                </h2>
              </div>
              <Link
                href="/services"
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-bold"
              >
                View All Services <span className="text-handy-orange">→</span>
              </Link>
            </div>

            <div className="flex h-[400px] md:h-[500px] w-full gap-2 md:gap-4">
              {portfolio.map((item, index) => {
                const isActive = activeProject === index;
                return (
                  <motion.div
                    key={item.id}
                    onHoverStart={() => setActiveProject(index)}
                    onClick={() => setActiveProject(index)}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out border border-slate-800 ${
                      isActive
                        ? "flex-[4] md:flex-[5] shadow-2xl"
                        : "flex-[1] opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.img}
                      fill
                      sizes="(max-width: 1200px) 25vw, 400px"
                      alt={item.title}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex flex-col justify-end h-full">
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 20,
                        }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="truncate"
                      >
                        <span className="text-handy-orange font-bold text-sm tracking-wider uppercase mb-2 block">
                          {item.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white truncate">
                          {item.title}
                        </h3>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* === END: MODERN ACCORDION GALLERY === */}

        <HandymanDivider />

        {/* === START: SERVICES SECTION === */}
        <section id="services" className="bg-slate-950 pb-32 pt-16 flex-grow">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter">
                Our Core <span className="text-slate-500">Expertise.</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-handy-orange to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col gap-8 md:gap-16">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  whileHover="hover"
                  className={`flex flex-col ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden group hover:border-slate-700 transition-colors shadow-2xl cursor-pointer`}
                >
                  <div className="relative w-full md:w-5/12 h-[300px] md:h-auto overflow-hidden">
                    {service.imageUrl ? (
                      <Image
                        src={service.imageUrl}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        alt={service.title}
                        className="object-cover object-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                        Image Coming Soon
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent md:hidden" />
                  </div>

                  <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col justify-center">
                    <div className="mb-8 p-4 bg-slate-950 w-fit rounded-2xl border border-slate-800 group-hover:border-slate-600 transition-colors shadow-inner">
                      <motion.div variants={service.animation}>
                        <service.Icon
                          className={`w-8 h-8 ${service.iconColor}`}
                        />
                      </motion.div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                      {service.desc}
                    </p>

                    <Link
                      href="/contact"
                      className="flex items-center gap-2 text-handy-orange font-bold hover:text-white transition-colors w-fit group/btn uppercase tracking-wider text-sm"
                    >
                      Get a Free Quote
                      <span className="group-hover/btn:translate-x-2 transition-transform">
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

        {/* === START: CUSTOM PROJECT CTA === */}
        <section className="py-24 px-6 bg-slate-950 border-t border-slate-900">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 px-8 py-16 shadow-2xl sm:px-16 md:py-24"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-handy-orange opacity-20 blur-[80px]" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-600 opacity-10 blur-[80px]" />

              <div className="relative flex flex-col items-center text-center z-10">
                <div className="flex items-center gap-2 mb-8 bg-slate-950/80 px-5 py-2.5 rounded-full border border-slate-700 shadow-inner">
                  <LuPencilRuler className="text-handy-orange" size={20} />
                  <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                    Custom Solutions
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                  Have a custom project? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                    We can build it.
                  </span>
                </h2>

                <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
                  We understand that not every home project fits into a neat
                  category. From unique architectural repairs to creative
                  installations tailored specifically to your lifestyle, we
                  thrive on the &quot;out-of-the-box&quot; tasks.
                </p>

                <Link
                  href="/contact"
                  className="bg-white text-slate-950 font-extrabold text-lg px-10 py-4 rounded-full hover:bg-slate-200 transition-all text-center shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105"
                >
                  Send us a message
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* === END: CUSTOM PROJECT CTA === */}
      </div>

      {/* === START: DYNAMIC EXPANDABLE TESTIMONIALS === */}
      <section className="bg-slate-950 py-24 md:py-32 border-b border-slate-900 overflow-hidden relative">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500 opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 text-handy-orange font-bold tracking-widest text-xs uppercase w-fit mx-auto">
              <LuMessageSquareQuote size={18} />
              <span>Don&apos;t just take our word for it</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
              Client <span className="text-slate-500">Stories.</span>
            </h2>
          </div>

          {/* Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {testimonials.map((testimonial) => {
              const isExpanded = expandedTestimonial === testimonial.id;

              return (
                <motion.div
                  layout // This prop tells Framer Motion to automatically animate size changes!
                  key={testimonial.id}
                  className="relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden group hover:border-slate-700 transition-colors shadow-2xl flex flex-col"
                >
                  {/* Micro-Interaction: Slow moving ambient background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-handy-orange/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <motion.div
                    layout
                    className="p-8 md:p-10 flex flex-col flex-grow z-10"
                  >
                    {/* Micro-Interaction: Staggered Star Pulse on Hover */}
                    <motion.div layout className="flex gap-1.5 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <LuStar
                            className="fill-amber-400 text-amber-400"
                            size={18}
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.p
                      layout
                      className="text-slate-300 text-lg md:text-xl leading-relaxed font-light italic mb-8"
                    >
                      &quot;{testimonial.text}&quot;
                    </motion.p>

                    <motion.div
                      layout
                      className="flex items-center justify-between mt-auto"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 text-handy-orange font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white tracking-wide">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>

                      {/* Expand/Collapse Trigger */}
                      <button
                        onClick={() =>
                          setExpandedTestimonial(
                            isExpanded ? null : testimonial.id,
                          )
                        }
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:bg-handy-orange hover:border-handy-orange hover:text-white text-slate-400 transition-all duration-300 focus:outline-none"
                        aria-label={
                          isExpanded ? "Hide Project" : "View Project"
                        }
                      >
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <LuChevronDown size={20} />
                        </motion.div>
                      </button>
                    </motion.div>
                  </motion.div>

                  {/* Dynamic Expansion Area: The Hidden Image */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="relative w-full h-[250px] sm:h-[300px] border-t border-slate-800"
                      >
                        <Image
                          src={testimonial.projectImg}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          alt={`Project completed for ${testimonial.name}`}
                          className="object-cover"
                        />
                        {/* Inner shadow to blend image into the card */}
                        <div className="absolute inset-0 shadow-[inset_0_20px_20px_-20px_rgba(2,6,23,0.8)] pointer-events-none" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* === END: DYNAMIC EXPANDABLE TESTIMONIALS === */}

      {/* === DYNAMIC GOOGLE REVIEWS SECTION (DUMMY PLACEHOLDER) === */}
      <div className="max-w-7xl mx-auto px-6 mt-24 mb-16">
        <div className="bg-slate-900/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-handy-orange to-amber-500" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-slate-400 text-sm font-light mt-1">
                Real reviews pulled directly from Google.
              </p>
            </div>

            {!loading && (
              <div className="flex flex-col items-center gap-3 bg-slate-950/60 border border-slate-800 py-3 px-6 rounded-2xl w-fit">
                <div className="flex items-center justify-evenly w-full">
                  <span className="text-white font-extrabold text-lg">
                    {averageRating}{" "}
                    <span className="text-slate-400 font-light text-xs">
                      / 5
                    </span>
                  </span>
                  <div className="flex text-handy-orange text-sm">
                    {"★".repeat(Math.round(averageRating))}
                  </div>
                </div>
                <div className=" w-fit">
                  {/* UPDATED: Authentic Colorful Google G-Logo Button */}
                  <a
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
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={
                          review.authorAttribution?.photoUri ||
                          "https://placehold.co/40/1e293b/ffffff?text=" +
                            review.authorAttribution?.displayName?.charAt(0)
                        }
                        alt={review.authorAttribution?.displayName}
                        className="w-12 h-12 rounded-2xl object-cover border border-slate-700"
                      />
                      <div>
                        <h4 className="font-bold text-sm text-white tracking-wide">
                          {review.authorAttribution?.displayName}
                        </h4>
                        <div className="flex text-handy-orange text-xs mt-0.5">
                          {"★".repeat(review.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 font-light text-sm leading-relaxed mb-4 line-clamp-4">
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
