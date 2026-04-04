"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // <-- Imported usePathname
import { LuPhone } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // <-- Get the current URL path

  // Close the mobile menu automatically if the user resizes the window to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Added 'sticky top-0' so the navigation stays visible when scrolling
    <header className="bg-white shadow-md relative z-50 sticky top-0">
      {/* Container wrapper for maximum width and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 1. Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              {/* object-contain prevents the logo from squishing! */}
              <Image
                src={"/assets/company-logo.jpg"}
                width={150}
                height={60}
                alt="Magic Touch Logo"
                className="w-auto h-12 md:h-14 object-contain rounded-md"
                priority
              />
              {/* Optional Text fallback next to the logo for wider screens */}
              <span className="text-2xl font-black tracking-tight text-handy-blue hidden lg:block">
                Magic<span className="text-handy-logo-yellow">Touch</span>
              </span>
            </Link>
          </div>

          {/* 2. Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex space-x-8 items-center font-bold text-slate-600">
            <Link
              href="/"
              className={`transition-colors ${
                pathname === "/"
                  ? "text-handy-orange"
                  : "hover:text-handy-orange"
              }`}
            >
              HOME
            </Link>
            <Link
              href="/services"
              className={`transition-colors ${
                pathname === "/services"
                  ? "text-handy-orange"
                  : "hover:text-handy-orange"
              }`}
            >
              SERVICES
            </Link>
            <Link
              href="/about-us"
              className={`transition-colors ${
                pathname === "/about-us"
                  ? "text-handy-orange"
                  : "hover:text-handy-orange"
              }`}
            >
              ABOUT US
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                pathname === "/contact"
                  ? "text-handy-orange"
                  : "hover:text-handy-orange"
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* 3. Desktop CTA Button (Hidden on Mobile) */}
          <div className="hidden md:flex flex-col items-center">
            <Link
              href="tel:+1234567890"
              className="flex justify-center items-center gap-2 px-5 py-2.5 bg-handy-orange text-white hover:bg-orange-600 rounded-md font-extrabold shadow-md transition-all active:scale-95"
            >
              <LuPhone size={20} />

              <span className="font-bold ">+1 234 567 890</span>
            </Link>
          </div>

          {/* 4. Mobile Hamburger Button (Hidden on Desktop) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative flex flex-col justify-center items-center w-12 h-12 hover:bg-slate-100 rounded-md transition-colors z-50"
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {/* Top Line */}
            <motion.span
              animate={menuOpen ? "open" : "closed"}
              initial="closed"
              variants={{
                closed: {
                  rotate: 0,
                  y: 0,
                  backgroundColor: "var(--color-handy-blue)",
                },
                open: {
                  rotate: -45,
                  y: 8,
                  backgroundColor: "var(--color-handy-orange)",
                },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-7 h-0.5 rounded-full block absolute top-4"
            />
            {/* Middle Line */}
            <motion.span
              animate={menuOpen ? "open" : "closed"}
              initial="closed"
              variants={{
                closed: {
                  opacity: 1,
                  x: 0,
                  backgroundColor: "var(--color-handy-blue)",
                },
                open: {
                  opacity: 0,
                  x: -15,
                  backgroundColor: "var(--color-handy-orange)",
                },
              }}
              transition={{ duration: 0.2 }}
              className="w-7 h-0.5 rounded-full block absolute"
            />
            {/* Bottom Line */}
            <motion.span
              animate={menuOpen ? "open" : "closed"}
              initial="closed"
              variants={{
                closed: {
                  rotate: 0,
                  y: 0,
                  backgroundColor: "var(--color-handy-blue)",
                },
                open: {
                  rotate: 45,
                  y: -8,
                  backgroundColor: "var(--color-handy-orange)",
                },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-7 h-0.5 rounded-full block absolute bottom-4"
            />
          </button>
        </div>
      </div>

      {/* 5. Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 80px)" }} // Calculates height perfectly below the header
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-slate-100 flex flex-col pt-16 pb-8 overflow-hidden shadow-2xl md:hidden border-t border-slate-200 justify-evenly"
          >
            <nav className="flex flex-col items-center gap-10 font-bold text-2xl text-slate-700">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`transition-colors ${
                  pathname === "/"
                    ? "text-handy-orange"
                    : "hover:text-handy-orange"
                }`}
              >
                HOME
              </Link>
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className={`transition-colors ${
                  pathname === "/services"
                    ? "text-handy-orange"
                    : "hover:text-handy-orange"
                }`}
              >
                SERVICES
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMenuOpen(false)} // Make sure to close the menu on click here too!
                className={`transition-colors ${
                  pathname === "/about-us"
                    ? "text-handy-orange"
                    : "hover:text-handy-orange"
                }`}
              >
                ABOUT US
              </Link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={`transition-colors ${
                  pathname === "/contact"
                    ? "text-handy-orange"
                    : "hover:text-handy-orange"
                }`}
              >
                CONTACT
              </Link>
            </nav>

            {/* Mobile Call to Action Button */}
            <div className="px-6 w-full max-w-sm mx-auto">
              <Link
                href="tel:+1234567890"
                className="flex justify-center items-center gap-3 p-5 bg-handy-orange text-white hover:bg-orange-600 rounded-md font-extrabold shadow-lg transition-all active:scale-95 w-full"
              >
                <LuPhone size={24} />
                CALL US NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
