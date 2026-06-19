"use client";
import {
  LuMail,
  LuPhone,
  LuCalendarDays,
  LuMapPin,
  LuChevronDown,
  LuClock,
} from "react-icons/lu";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24 md:py-32 selection:bg-handy-orange selection:text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* === PAGE HEADER === */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4 text-handy-orange font-bold tracking-widest text-xs uppercase w-fit mx-auto">
              <LuMail size={18} />
              <span>We&apos;re Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Get in <span className="text-handy-orange">Touch.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to start your home refresh? Send us a message for a custom
              quote or book a specific time for a consultation below.
            </p>
          </motion.div>
        </div>

        {/* === NEW: FULL-WIDTH DIRECT CONTACT INFO SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-8 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col gap-8"
        >
          {/* Decorative subtle top border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-handy-orange to-amber-500" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-handy-orange shadow-inner shrink-0">
                <LuPhone size={24} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                  Phone Number
                </h3>
                <a
                  href="tel:+15550000000"
                  className="text-white text-lg font-medium hover:text-handy-orange transition-colors"
                >
                  +1 (555) 000-0000
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-handy-orange shadow-inner shrink-0">
                <LuMail size={24} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                  Email Address
                </h3>
                <a
                  href="mailto:hello@example.com"
                  className="text-white text-lg font-medium hover:text-handy-orange transition-colors break-all"
                >
                  hello@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-handy-orange shadow-inner shrink-0">
                <LuClock size={24} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                  Business Hours
                </h3>
                <div className="text-slate-300 font-light text-sm leading-relaxed">
                  <div className="flex justify-between gap-5">
                    <span>Monday - Friday:</span>
                    <span className="text-white font-normal">
                      8:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between gap-5">
                    <span>Saturday</span>
                    <span className="text-white font-normal">
                      9:00 AM – 14:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === NEW: LOCATION / SERVICE AREA PARAGRAPH === */}
          <div className="flex items-center gap-4 pt-6 border-t border-slate-800/60 text-slate-300 font-light">
            <div className="text-handy-orange shrink-0">
              <LuMapPin size={24} />
            </div>
            <p className="leading-relaxed">
              Proudly serving the{" "}
              <strong className="text-white">entire area of Dublin</strong>.
              Whether you&apos;re north or south of the Liffey, we bring
              reliable handyman and home refresh services right to your
              doorstep.
            </p>
          </div>
        </motion.div>
        {/* === END OF FULL-WIDTH CONTACT INFO === */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* === LEFT COLUMN: CONTACT FORM === */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-full bg-slate-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-800 flex flex-col relative overflow-hidden"
          >
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-handy-orange to-amber-500" />

            <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">
              Get in Touch
            </h2>

            <form
              className="flex flex-col gap-6 flex-grow"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-bold text-slate-400 text-sm tracking-wide uppercase"
                  >
                    Full Name <span className="text-handy-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    className="p-4 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-handy-orange focus:border-transparent outline-none transition-all placeholder:text-slate-600 shadow-inner"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="font-bold text-slate-400 text-sm tracking-wide uppercase"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="p-4 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-handy-orange focus:border-transparent outline-none transition-all placeholder:text-slate-600 shadow-inner"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-bold text-slate-400 text-sm tracking-wide uppercase"
                >
                  Email Address <span className="text-handy-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  className="p-4 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-handy-orange focus:border-transparent outline-none transition-all placeholder:text-slate-600 shadow-inner"
                  placeholder="jane@example.com"
                />
              </div>

              {/* Subject Dropdown */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="font-bold text-slate-400 text-sm tracking-wide uppercase"
                >
                  Subject <span className="text-handy-orange">*</span>
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    required
                    aria-required="true"
                    defaultValue=""
                    className="w-full p-4 pr-12 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-handy-orange focus:border-transparent outline-none transition-all shadow-inner appearance-none cursor-pointer invalid:text-slate-600"
                  >
                    <option value="" disabled className="text-slate-600">
                      Select a topic...
                    </option>
                    <option value="handyman" className="text-white">
                      Handyman Services
                    </option>
                    <option value="interior_painting" className="text-white">
                      Interior Painting
                    </option>
                    <option value="exterior_refresh" className="text-white">
                      Exterior Refresh
                    </option>
                    <option value="repairs" className="text-white">
                      General Home Repairs
                    </option>
                    <option value="power_washing" className="text-white">
                      Power Washing
                    </option>
                    <option value="custom" className="text-white">
                      Custom Project / Other
                    </option>
                  </select>
                  {/* Custom Arrow Icon */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <LuChevronDown size={20} />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 flex-grow">
                <label
                  htmlFor="message"
                  className="font-bold text-slate-400 text-sm tracking-wide uppercase"
                >
                  How can we help? <span className="text-handy-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  className="h-full min-h-[120px] p-4 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-2 focus:ring-handy-orange focus:border-transparent outline-none transition-all placeholder:text-slate-600 shadow-inner resize-none"
                  placeholder="Describe your project (e.g., painting 3 bedrooms, fixing a deck)..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-auto bg-gradient-to-r from-handy-orange to-orange-600 text-white font-extrabold text-lg py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 hover:cursor-pointer transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>

          {/* === RIGHT COLUMN: CALENDLY BOOKING === */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-full flex flex-col"
          >
            <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden h-full flex flex-col">
              <div className="p-8 bg-slate-950/50 border-b border-slate-800 flex items-center gap-5 shrink-0">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-inner">
                  <LuCalendarDays className="text-handy-orange" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">
                    Book a Consultation
                  </h2>
                  <p className="text-slate-400 text-sm font-light mt-1">
                    Select a date and time that works for you.
                  </p>
                </div>
              </div>

              <div className="grow overflow-hidden bg-slate-950 w-full relative">
                <InlineWidget
                  url="https://calendly.com/gfyrselfsaurus/30min"
                  styles={{ height: "100%", minHeight: "800px", width: "100%" }}
                  pageSettings={{
                    backgroundColor: "020617",
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: "ea580c",
                    textColor: "f8fafc",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
