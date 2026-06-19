"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LuPhone } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }
  }, [menuOpen]);

  // Clean data structure for routes (Keeps your code DRY)
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "RECENT PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 shadow-2xl z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Added aria-label for screen readers */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Magic Touch Homepage"
            >
              <Image
                src={"/assets/company-logo.jpg"}
                width={150}
                height={75}
                sizes="(max-width: 768px) 120px, 150px"
                alt="Magic Touch Logo"
                className="w-auto h-12 md:h-14 object-contain rounded-md group-hover:opacity-80 transition-opacity bg-white p-1"
                priority
              />
              <span className="text-2xl font-black tracking-tight text-white hidden lg:block">
                Magic<span className="text-handy-orange">Touch</span>
              </span>
            </Link>
          </div>

          {/* 2. Desktop Navigation */}
          {/* Added aria-label to define the navigation region */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex space-x-8 items-center font-bold text-sm tracking-widest text-slate-400"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                // Indicates to screen readers which page is currently active
                aria-current={pathname === link.path ? "page" : undefined}
                className={`transition-all duration-300 hover:text-white relative py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange rounded-sm ${
                  pathname === link.path ? "text-white" : ""
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-handy-orange"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* 3. Desktop CTA */}
          <div className="hidden md:flex flex-col items-center">
            <Link
              href="tel:+1234567890"
              aria-label="Call us at +1 234 567 890"
              className="flex justify-center items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-handy-orange text-handy-orange hover:bg-handy-orange hover:text-white rounded-full font-extrabold shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.6)] transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-handy-orange"
            >
              {/* aria-hidden prevents screen readers from announcing the icon redundantly */}
              <LuPhone size={18} aria-hidden="true" />
              <span>+1 234 567 890</span>
            </Link>
          </div>

          {/* 4. Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            // Added crucial ARIA attributes and focus rings for keyboard navigation
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden relative flex flex-col justify-center items-center w-12 h-12 rounded-md z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange"
          >
            <motion.span
              animate={menuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0, y: 0, backgroundColor: "#cbd5e1" },
                open: { rotate: -45, y: 8, backgroundColor: "#ea580c" },
              }}
              className="w-7 h-0.5 block absolute top-4"
            />
            <motion.span
              animate={menuOpen ? "open" : "closed"}
              variants={{
                closed: { opacity: 1, backgroundColor: "#cbd5e1" },
                open: { opacity: 0, backgroundColor: "#ea580c" },
              }}
              className="w-7 h-0.5 block absolute"
            />
            <motion.span
              animate={menuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0, y: 0, backgroundColor: "#cbd5e1" },
                open: { rotate: 45, y: -8, backgroundColor: "#ea580c" },
              }}
              className="w-7 h-0.5 block absolute bottom-4"
            />
          </button>
        </div>
      </div>

      {/* 5. Mobile Navigation Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu" // Matches the aria-controls on the hamburger button
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 flex flex-col pt-8 pb-12 shadow-2xl md:hidden overflow-y-auto"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col items-center gap-8 font-bold text-xl text-slate-300 px-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)} // Ensures the menu closes when a link is clicked
                  aria-current={pathname === link.path ? "page" : undefined}
                  className={`transition-colors w-full text-center py-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange ${
                    pathname === link.path
                      ? "text-handy-orange"
                      : "hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="mt-8 w-full max-w-sm mx-auto">
                <Link
                  href="tel:+1234567890"
                  onClick={() => setMenuOpen(false)}
                  className="flex justify-center items-center gap-3 p-4 bg-handy-orange text-white hover:bg-orange-600 rounded-full font-extrabold shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all active:scale-95 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-handy-orange"
                >
                  <LuPhone size={24} aria-hidden="true" />
                  CALL US NOW
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
