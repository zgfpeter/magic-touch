"use client";
import Link from "next/link";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import the map to prevent Server-Side Rendering errors
const ServiceAreaMap = dynamic(
  () => import("../../components/ui/ServiceAreaMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-slate-900/50 backdrop-blur-sm animate-pulse flex items-center justify-center text-slate-600 rounded-2xl border border-slate-800">
        Loading Map...
      </div>
    ),
  },
);

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-auto relative overflow-hidden selection:bg-handy-orange selection:text-white">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* === FOOTER === */}
        <section className="bg-slate-950 py-12 border-t border-slate-900 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Prime Build <span className="text-handy-orange">Construction</span>
          </h3>
          <p className="text-slate-400 mb-6 font-light">
            See more of our work on our social media.
            <br />
          </p>
          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="#"
              aria-label="Visit our Facebook page"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-handy-orange hover:text-white hover:border-handy-orange transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Visit our Instagram page"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-handy-orange hover:text-white hover:border-handy-orange transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <FaTiktok size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Visit our Instagram page"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-handy-orange hover:text-white hover:border-handy-orange transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </section>

        {/* === MASTER GRID === */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 border-t border-slate-900  pt-12">
          {/* COLUMN 1: Logo & Description */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex items-center gap-3 mb-8 w-fit hover:opacity-80 transition-opacity"
            >
              <Image
                src="/assets/company-logo.jpg"
                width={200}
                height={100}
                sizes="(max-width: 768px) 200px, 200px" // Prevents Next.js warnings
                alt="Prime Build Construction Logo"
                className="object-contain rounded-xl flex-shrink-0 bg-white p-1"
                priority
              />
            </Link>

            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-light">
              Your trusted local experts for home repairs, maintenance, and
              professional painting. Precision in every detail.
            </p>
          </div>

          {/* COLUMN 2: Get In Touch */}
          <address className="flex flex-col gap-6 not-italic font-light ">
            <h3 className="text-white text-xl font-bold mb-2">Get In Touch</h3>
            <a
              href="mailto:ouremail@example.com"
              className="flex items-center gap-4 hover:text-white transition-colors group"
            >
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-handy-orange transition-colors">
                <LuMail className="text-handy-orange shrink-0" size={18} />
              </div>
              <span>ouremail@example.com</span>
            </a>
            <a
              href="tel:+1234567"
              className="flex items-center gap-4 hover:text-white transition-colors group"
            >
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-handy-orange transition-colors">
                <LuPhone className="text-handy-orange shrink-0" size={18} />
              </div>
              <span>+1 234 567</span>
            </a>
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 mt-1">
                <LuMapPin className="text-handy-orange shrink-0" size={18} />
              </div>
              <div className="flex flex-col gap-1 text-slate-400 pt-2">
                <span className="text-white font-medium">
                  Dublin Road, Dublin
                </span>
                <span>Dublin 2: Electric Boogaloo</span>
              </div>
            </div>
          </address>

          {/* COLUMN 3: Service Map (Spans 2 cols on Medium, 1 col on Large) */}
          <div className="flex flex-col w-full h-[350px] md:h-[400px] md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-xl font-bold mb-5 lg:text-center">
              Service Area
            </h3>
            {/* The wrapper is styled for dark mode in case you uncomment the map later */}
            <div className="flex-grow w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 relative z-0 bg-slate-900">
              <ServiceAreaMap />
            </div>
          </div>

          {/* FULL WIDTH ROW: Quick Links (Spans 2 cols on Med, 3 cols on Large) */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-col md:flex-row md:items-center justify-between md:col-span-2 lg:col-span-3 border-t border-slate-800/50  p-3"
          >
            <h3 className="text-xl font-bold text-white md:hidden">
              Quick Links
            </h3>

            <div className="flex flex-col p-5 md:flex-row md:items-center gap-8 font-bold text-sm tracking-wider uppercase">
              <Link
                href="/"
                className="hover:text-handy-orange transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="hover:text-handy-orange transition-colors"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="hover:text-handy-orange transition-colors"
              >
                Recent Projects
              </Link>
              <Link
                href="/about-us"
                className="hover:text-handy-orange transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-handy-orange transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* <Link
              href="/contact"
              className="bg-handy-orange text-white font-extrabold rounded-full px-8 py-3.5 hover:bg-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)] hover:-translate-y-0.5 transition-all w-fit text-center uppercase tracking-wide text-sm"
            >
              CONTACT
            </Link> */}
          </nav>
        </div>

        {/* === COPYRIGHT BAR === */}
        <div className=" p-5 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>
            © {new Date().getFullYear()} Prime Build Construction. All rights
            reserved.
          </p>
          <p>Designed with care for local homeowners.</p>
        </div>
      </div>
    </footer>
  );
}
