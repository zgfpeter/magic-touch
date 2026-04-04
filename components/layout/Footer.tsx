"use client";
import Link from "next/link";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import the map to prevent Server-Side Rendering errors
const ServiceAreaMap = dynamic(
  () => import("../../components/ui/ServiceAreaMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-slate-200 animate-pulse flex items-center justify-center text-slate-500 rounded-xl">
        Loading Map...
      </div>
    ),
  },
);

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-handy-blue py-16 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        {/* === MASTER GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* COLUMN 1: Logo & Description */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 w-fit hover:opacity-90 transition-opacity"
            >
              <Image
                src="/assets/company-logo.jpg"
                width={200}
                height={150}
                alt="Magic Touch Logo"
                className="object-contain rounded-md flex-shrink-0 bg-white"
                priority
              />
            </Link>

            <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
              Your trusted local experts for home repairs, maintenance, and
              professional painting.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="#"
                aria-label="Visit our Facebook page"
                className="p-2 rounded-full border border-slate-300 hover:bg-handy-blue hover:text-white transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Visit our Instagram page"
                className="p-2 border border-slate-300 rounded-full hover:bg-handy-orange hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* COLUMN 2: Get In Touch */}
          <address className="flex flex-col gap-5 not-italic font-bold">
            <h3 className="text-slate-900 text-xl mb-1">Get In Touch</h3>
            <a
              href="mailto:ouremail@example.com"
              className="flex items-center gap-3 hover:text-handy-orange transition-colors"
            >
              <LuMail className="text-handy-orange shrink-0" size={20} />
              <span>ouremail@example.com</span>
            </a>
            <a
              href="tel:+1234567"
              className="flex items-center gap-3 hover:text-handy-orange transition-colors"
            >
              <LuPhone className="text-handy-orange shrink-0" size={20} />
              <span>+1 234 567</span>
            </a>
            <div className="flex items-start gap-3">
              <LuMapPin className="text-handy-orange shrink-0 mt-1" size={20} />
              <div className="flex flex-col gap-1 text-handy-blue">
                <span>Dublin Road, Dublin</span>
                <span>Dublin 2: Electric Boogaloo</span>
              </div>
            </div>
          </address>

          {/* COLUMN 3: Service Map (Spans 2 cols on Medium, 1 col on Large) */}
          <div className="flex flex-col w-full h-[400px] md:col-span-2 lg:col-span-1">
            <h3 className="text-slate-900 text-xl font-bold mb-5 lg:text-center">
              Service Area
            </h3>
            <div className="flex-grow w-full rounded-xl overflow-hidden shadow-md border border-slate-200 relative z-0">
              <ServiceAreaMap />
            </div>
          </div>

          {/* FULL WIDTH ROW: Quick Links (Spans 2 cols on Med, 3 cols on Large) */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:col-span-2 lg:col-span-3 mt-4 pt-8 border-t border-slate-200"
          >
            <h3 className="text-xl font-bold text-slate-900 md:hidden">
              Quick Links
            </h3>

            <div className="flex flex-col md:flex-row md:items-center gap-6 font-bold">
              <Link
                href="/"
                className="hover:text-handy-orange transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="hover:text-handy-orange transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="hover:text-handy-orange transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-handy-orange transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <Link
              href="/booking"
              className="bg-handy-orange text-white font-bold rounded-md px-6 py-3 hover:bg-orange-600 transition-colors w-fit shadow-md text-center"
            >
              Book Appointment
            </Link>
          </nav>
        </div>

        {/* === COPYRIGHT BAR === */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Magic Touch. All rights reserved.</p>
          <p>Designed with care for local homeowners.</p>
        </div>
      </div>
    </footer>
  );
}
