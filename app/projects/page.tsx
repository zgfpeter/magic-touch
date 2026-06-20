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
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

import HandymanDivider from "@/components/ui/HandymanDivider";

// --- DATA: MOVED OUTSIDE COMPONENT FOR TURBOPACK STABILITY ---
const projectsData = [
  {
    id: "rathmines-studio",
    title: "Studio from start to finish",
    location: "Rathmines, Dublin",
    description:
      "We delivered a complete, start-to-finish construction of a new small studio, managing every aspect of the project from the ground up. Navigate through the photos to see the completed project.",
    services: [
      "Site & Structural Work: Complete groundwork and site preparation.",
      "Utilities & Systems: Full electrical and plumbing integration.",
      "Custom Carpentry: Design and installation of a seating area and table tailored to the studio's layout, maximizing the available space.",
      "Interior Finishes: Premium floor and shower tiling, alongside immaculate painting throughout the unit.",
      " Final Fit-Out: Seamless installation of appliances, delivering a move-in-ready space.",
    ],
    images: [
      "/assets/projects/studio/studio-1.jpg",
      "/assets/projects/studio/studio-2.jpg",
      "/assets/projects/studio/studio-3.jpg",
      "/assets/projects/studio/studio-4.jpg",
      "/assets/projects/studio/studio-5.jpg",
      "/assets/projects/studio/studio-6.jpg",
      "/assets/projects/studio/studio-8.jpg",
      "/assets/projects/studio/studio-9.jpg",
      "/assets/projects/studio/studio-10.jpg",
      "/assets/projects/studio/studio-11.jpg",
      "/assets/projects/studio/studio-12.jpg",
      "/assets/projects/studio/studio-23.jpg",
      "/assets/projects/studio/studio-24.jpg",
      "/assets/projects/studio/studio-25.jpg",
      "/assets/projects/studio/studio-34.jpg",
      "/assets/projects/studio/studio-41.jpg",
      "/assets/projects/studio/studio-37.jpg",
      "/assets/projects/studio/studio-39.jpg",
      "/assets/projects/studio/studio-38.jpg",
      "/assets/projects/studio/studio-46.jpg",
      "/assets/projects/studio/studio-40.jpg",
      "/assets/projects/studio/studio-42.jpg",
      "/assets/projects/studio/studio-43.jpg",
      "/assets/projects/studio/studio-44.jpg",
      "/assets/projects/studio/studio-47.jpg",
    ],
  },
];

// === UPDATED INTERACTIVE GALLERY COMPONENT ===
const ProjectGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Navigation Handlers
  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Keyboard Accessibility Handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault(); // Prevents page scrolling if that happens
      handleNext();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  // Thumbnail Sliding Window Logic (Shows 5 thumbnails at a time)
  const maxVisibleThumbs = 5;
  let startIdx = Math.max(0, activeIndex - Math.floor(maxVisibleThumbs / 2));
  let endIdx = startIdx + maxVisibleThumbs;

  // Adjust window if we are near the end of the array
  if (endIdx > images.length) {
    startIdx = Math.max(0, images.length - maxVisibleThumbs);
    endIdx = images.length;
  }

  // Create an array of objects holding the original index and the image source
  const visibleThumbnails = images
    .map((src, index) => ({ src, originalIndex: index }))
    .slice(startIdx, endIdx);

  return (
    <div
      className="w-full lg:w-2/3 flex flex-col gap-6 lg:self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 rounded-2xl transition-all"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={`${title} image gallery, use left and right arrow keys to navigate`}
    >
      {/* Featured Main Image with External Navigation Arrows */}
      <div className="flex items-center justify-center gap-2 sm:gap-6 w-full">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="flex-shrink-0 z-20 p-2 sm:p-4 rounded-full bg-slate-900 hover:bg-handy-orange text-white transition-all border border-slate-700 hover:border-handy-orange shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Previous image"
        >
          <LuChevronLeft size={28} />
        </button>

        {/* Image Container */}
        <div className="relative flex-1 aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[activeIndex]}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                alt={`${title} - Image ${activeIndex + 1}`}
                className="object-contain transition-all duration-300"
                priority
              />
              {/* Subtle vignette for premium feel */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-950/60 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Image Counter Badge */}
          <div className="absolute bottom-5 right-5 z-20 bg-slate-950/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-slate-300 border border-slate-800">
            {activeIndex + 1} / {images.length}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="flex-shrink-0 z-20 p-2 sm:p-4 rounded-full bg-slate-900 hover:bg-handy-orange text-white transition-all border border-slate-700 hover:border-handy-orange shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Next image"
        >
          <LuChevronRight size={28} />
        </button>
      </div>

      {/* Thumbnail Navigation Strip */}
      <div className="flex gap-3 sm:gap-4 w-full max-w-3xl mx-auto h-24 sm:h-28 px-12 sm:px-0 mt-2">
        {visibleThumbnails.map(({ src, originalIndex }) => (
          <button
            key={originalIndex}
            onClick={() => setActiveIndex(originalIndex)}
            className={`relative flex-1 rounded-xl overflow-hidden border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
              activeIndex === originalIndex
                ? "border-handy-orange opacity-100 scale-[0.98]"
                : "border-slate-800 opacity-40 hover:opacity-100 hover:border-slate-600 mix-blend-luminosity hover:mix-blend-normal"
            }`}
            aria-label={`View ${title} image ${originalIndex + 1}`}
          >
            <Image
              src={src}
              fill
              sizes="(max-width: 768px) 20vw, 15vw"
              alt={`${title} thumbnail ${originalIndex + 1}`}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

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
    <main className="min-h-screen bg-slate-950 text-slate-200 relative selection:bg-handy-orange selection:text-white overflow-x-hidden">
      <div className="relative min-h-screen flex flex-col">
        {/* FIX 2: Changed h-[60vh] to min-h-[60vh] and added py-32 to allow the content to breathe on small screens */}
        {/* === START: HERO SECTION === */}
        <section className="relative min-h-[60vh] py-32 flex flex-col justify-center items-center text-white overflow-hidden px-6">
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
          <div className="max-w-[100rem] mx-auto px-6 lg:px-12 flex flex-col gap-32">
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
                <div className="w-full lg:w-1/3 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-handy-orange font-bold uppercase tracking-wider text-sm mb-4">
                    <LuMapPin size={18} aria-hidden="true" />
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
                              aria-hidden="true"
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

                {/* INJECTED NEW INTERACTIVE GALLERY COMPONENT */}
                <ProjectGallery images={project.images} title={project.title} />
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
                <LuCamera size={18} aria-hidden="true" />
                <span>Like what you see?</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10">
                Let&apos;s build your ideal space.
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed relative z-10 font-light">
                Whether you need a complete exterior overhaul or precise
                interior finishing, our team is ready to bring your project to
                life.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 relative z-10">
                <Link
                  href="/contact"
                  className="bg-handy-orange text-white font-extrabold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Contact us
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
            className="fixed bottom-8 right-8 p-4 bg-handy-orange text-white rounded-full shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:bg-orange-600 transition-colors z-50 flex items-center justify-center back-to-top-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Scroll back to top"
          >
            <LuArrowUp size={24} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
