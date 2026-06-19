"use client";

import { useState, useRef } from "react";
import {
  LuMail,
  LuPhone,
  LuCalendarDays,
  LuMapPin,
  LuClock,
  LuUpload,
  LuX,
  LuImage,
  LuCircleCheck,
} from "react-icons/lu";
import { InlineWidget } from "react-calendly";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  // Form State Management
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection and validation
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("File size must be under 5MB.");
        return;
      }

      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  // Clear the selected file
  const removeFile = () => {
    setFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    if (file) {
      formData.append("attachment", file);
    }

    try {
      // NOTE: Ensure you have created the app/api/contact/route.ts file to handle this!
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        removeFile();
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Submission failed", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <LuMail size={18} aria-hidden="true" />
              <span>We&apos;re Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Get in <span className="text-handy-orange">Touch.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to start your construction or renovation project? Send us a
              message with your site details or book a dedicated consultation
              time below.
            </p>
          </motion.div>
        </div>

        {/* === FULL-WIDTH DIRECT CONTACT INFO SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-8 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col gap-8"
        >
          {/* Decorative subtle top border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-handy-orange to-amber-500" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-handy-orange shadow-inner shrink-0">
                <LuPhone size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                  Phone Number
                </h3>
                <a
                  href="tel:+353000000000"
                  className="text-white text-lg font-medium hover:text-handy-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange rounded-sm"
                >
                  +353 00 000 0000
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-handy-orange shadow-inner shrink-0">
                <LuMail size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                  Email Address
                </h3>
                <a
                  href="mailto:info@totalbuildconstruction.com"
                  className="text-white text-lg font-medium hover:text-handy-orange transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange rounded-sm"
                >
                  info@totalbuildconstruction.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-handy-orange shadow-inner shrink-0">
                <LuClock size={24} aria-hidden="true" />
              </div>
              <div>
                <div className="text-slate-300 font-light text-sm leading-relaxed">
                  <div className="flex justify-between gap-5">
                    <span>Monday - Friday:</span>
                    <span className="text-white font-normal">
                      8:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between gap-5">
                    <span>Saturday:</span>
                    <span className="text-white font-normal">
                      9:00 AM – 2:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === LOCATION / SERVICE AREA PARAGRAPH === */}
          <div className="flex items-start md:items-center gap-4 pt-6 border-t border-slate-800/60 text-slate-300 font-light">
            <div className="text-handy-orange shrink-0 mt-1 md:mt-0">
              <LuMapPin size={24} aria-hidden="true" />
            </div>
            <p className="leading-relaxed">
              Proudly serving the{" "}
              <strong className="text-white">entire area of Dublin</strong>.
              Whether you&apos;re north or south of the Liffey,
              PrimeBuildConstruction brings fully insured, multi-trade
              capability right to your doorstep.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* === LEFT COLUMN: CONTACT FORM === */}
          <section
            id="contact-form-section"
            className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col"
            aria-labelledby="form-heading"
          >
            <div className="p-8 bg-slate-950/50 border-b border-slate-800 shrink-0">
              <h2
                id="form-heading"
                className="text-2xl font-extrabold text-white tracking-tight"
              >
                Request a Project Quote
              </h2>
              <p className="text-slate-400 text-sm font-light mt-1">
                Fill out the details below and our team will get back to you
                promptly.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-8 flex flex-col gap-6 flex-grow bg-slate-900/40"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-300"
                  >
                    Full Name <span className="text-handy-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-handy-orange transition-all shadow-inner"
                    placeholder="e.g. David O'Connor"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-slate-300"
                  >
                    Phone Number <span className="text-handy-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-handy-orange transition-all shadow-inner"
                    placeholder="08X XXX XXXX"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-300"
                >
                  Email Address <span className="text-handy-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-handy-orange transition-all shadow-inner"
                  placeholder="david@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="project"
                  className="text-sm font-semibold text-slate-300"
                >
                  Project Description{" "}
                  <span className="text-handy-orange">*</span>
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={4}
                  className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-handy-orange transition-all resize-none shadow-inner"
                  placeholder="Tell us about your project"
                />
              </div>

              {/* === INTERACTIVE FILE UPLOAD FIELD === */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-300 flex items-center justify-between">
                  <span>Attach a Photo (Optional)</span>
                  <span className="text-xs font-light text-slate-500">
                    Max 5MB
                  </span>
                </label>

                <input
                  type="file"
                  name="attachment"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />

                <AnimatePresence mode="wait">
                  {!file ? (
                    <motion.button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-28 border-2 border-dashed border-slate-700 bg-slate-950/50 hover:bg-slate-900 rounded-xl flex flex-col items-center justify-center gap-3 text-slate-400 hover:text-white hover:border-handy-orange transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange shadow-inner"
                    >
                      <div className="p-2.5 bg-slate-900 rounded-full group-hover:scale-110 transition-transform border border-slate-800">
                        <LuUpload size={18} className="text-handy-orange" />
                      </div>
                      <span className="text-sm font-medium">
                        Click to upload a photo
                      </span>
                    </motion.button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full bg-slate-950 border border-slate-700 p-3 rounded-xl flex items-center justify-between shadow-inner"
                    >
                      <div className="flex items-center gap-4">
                        {previewUrl ? (
                          <img
                            src={previewUrl}
                            alt="Upload preview"
                            className="w-12 h-12 rounded-lg object-cover border border-slate-700"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800">
                            <LuImage className="text-slate-500" />
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="text-white font-medium text-sm truncate max-w-[200px]">
                            {file.name}
                          </span>
                          <span className="text-slate-500 text-xs">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                        aria-label="Remove attached photo"
                      >
                        <LuX size={20} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button & Status */}
              <div className="mt-4 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-handy-orange hover:bg-orange-600 disabled:bg-orange-800 disabled:cursor-not-allowed text-white font-extrabold text-lg py-4 rounded-xl transition-all shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-handy-orange flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    "SUBMIT"
                  )}
                </button>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-bold bg-emerald-950/30 py-3 rounded-lg border border-emerald-900/50"
                    >
                      <LuCircleCheck size={18} />
                      <span>
                        Message sent successfully! We&apos;ll be in touch.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </section>

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
                  <LuCalendarDays
                    className="text-handy-orange"
                    size={28}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">
                    Book a Consultation
                  </h2>
                  <p className="text-slate-400 text-sm font-light mt-1">
                    Select a date and time to discuss your build.
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
