"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  LuPhone,
  LuArrowRight,
  LuClock,
  LuMapPin,
  LuChevronDown,
} from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Listen to user scroll to trigger transform dynamics
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: false },
    { name: "Recent Projects", path: "/projects" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-slate-950/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* 2. MAIN HEADER NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-5 pt-5">
            <span className="flex items-center gap-3 text-stone-400">
              <LuMapPin size={13} className="text-handy-orange" />
              Serving Dublin & Surrounding Areas
            </span>
          </div>
        </div>
        <div
          className={`flex justify-between items-center transition-all duration-300 p-12 ${isScrolled ? "h-16" : "h-20"}`}
        >
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none"
              aria-label="Prime Build Construction Homepage"
            >
              <Image
                src="/assets/company-logo.jpeg"
                width={130}
                height={52}
                sizes="(max-width: 1024px) 105px, 130px"
                alt="Prime Build Construction Logo"
                className="w-auto h-9 md:h-11 object-contain rounded-md transition-transform group-hover:scale-[1.02] bg-white p-1"
                priority
              />
              {/* <span className="text-lg font-black tracking-tight text-white hidden sm:block">
                Prime Build
                <span className="text-handy-orange">Construction</span>
              </span> */}
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex space-x-1 items-center font-medium text-lg tracking-wide text-slate-300"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <div key={link.path} className="relative group/nav-item py-2">
                  <Link
                    href={link.path}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-4 py-2 rounded-full inline-flex items-center gap-1 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange ${
                      isActive ? "text-white font-semibold" : "text-slate-400"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {link.hasDropdown && (
                      <LuChevronDown
                        size={14}
                        className="relative z-10 transition-transform group-hover/nav-item:rotate-180 duration-200 text-slate-500"
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="desktop-nav-active"
                        className="absolute inset-0 bg-slate-900 border border-slate-800/60 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>

                  {/* MINI SERVICES ACCORDION DROPDOWN HOVER PANEL */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:translate-y-0 group-hover/nav-item:pointer-events-auto transition-all duration-200">
                      <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl">
                        <Link
                          href="/services"
                          className="block px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-1"
                        >
                          Our Core Trades
                        </Link>
                        <Link
                          href="/services"
                          className="block px-3 py-2 text-sm text-slate-300 hover:text-handy-orange hover:bg-slate-900 rounded-xl transition-colors"
                        >
                          Interior Painting
                        </Link>
                        <Link
                          href="/services"
                          className="block px-3 py-2 text-sm text-slate-300 hover:text-handy-orange hover:bg-slate-900 rounded-xl transition-colors"
                        >
                          Handyman Repairs
                        </Link>
                        <Link
                          href="/services"
                          className="block px-3 py-2 text-sm text-slate-300 hover:text-handy-orange hover:bg-slate-900 rounded-xl transition-colors"
                        >
                          Power Washing
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Actions Group */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="tel:+1234567890"
              aria-label="Call us at +1 234 567 890"
              className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white rounded-full font-medium text-sm transition-colors focus-visible:outline-none"
            >
              <LuPhone
                size={14}
                aria-hidden="true"
                className="text-handy-orange"
              />
              <span>+1 234 567 890</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4.5 py-2 bg-gradient-to-r from-orange-500 to-handy-orange hover:from-orange-600 hover:to-orange-500 text-white rounded-full font-semibold text-sm shadow-md transition-all active:scale-95 focus-visible:outline-none"
            >
              <span>Get a Quote</span>
              <LuArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Toggle Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-slate-800 bg-slate-900/40 z-50 focus:outline-none"
          >
            <div className="w-5 h-3.5 flex flex-col justify-between relative">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-slate-200 rounded-full origin-center"
              />
              <motion.span
                animate={
                  menuOpen ? { opacity: 0, x: -5 } : { opacity: 1, x: 0 }
                }
                className="w-full h-0.5 bg-slate-200 rounded-full"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="w-full h-0.5 bg-slate-200 rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* HAIRY GLOW LINER (Fades in neatly on scroll) */}
      <div
        className={`h-[1px] w-full bg-gradient-to-r from-transparent via-handy-orange/40 to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`}
      />

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full h-[calc(100vh-5rem)] bg-slate-950 border-t border-slate-900 flex flex-col justify-between px-6 py-8 lg:hidden overflow-y-auto"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col gap-2.5"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`transition-all px-4 py-3 text-base font-medium rounded-xl ${
                      isActive
                        ? "bg-slate-900 text-handy-orange font-bold"
                        : "text-slate-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-3 border-t border-slate-900 pt-6">
              <Link
                href="tel:+1234567890"
                onClick={() => setMenuOpen(false)}
                className="flex justify-center items-center gap-2 p-3.5 text-slate-300 border border-slate-800 bg-slate-900/30 rounded-xl text-sm font-medium"
              >
                <LuPhone size={16} className="text-handy-orange" />
                <span>+1 234 567 890</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex justify-center items-center gap-2 p-3.5 bg-handy-orange text-white rounded-xl text-sm font-bold shadow-md"
              >
                <span>Get a Quote</span>
                <LuArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
