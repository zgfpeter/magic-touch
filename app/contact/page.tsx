"use client";
import { LuMail, LuPhone, LuCalendarDays } from "react-icons/lu";
import { InlineWidget } from "react-calendly";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Get in <span className="text-handy-logo-yellow">Touch</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto flex flex-col">
            Ready to start your home refresh?{" "}
            <span>
              Send us a message for a custom quote or book a specific time for a
              consultation below.
            </span>
            <span> A team member will get in touch with you.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN: Contact Form (For general quotes/questions) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100 flex flex-col">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
              Request a Quote
            </h2>

            <form className="flex flex-col gap-5 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-bold text-slate-700 text-sm"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-handy-orange outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="font-bold text-slate-700 text-sm"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-handy-orange outline-none transition-all"
                    placeholder="+1..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-bold text-slate-700 text-sm"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-handy-orange outline-none transition-all"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-bold text-slate-700 text-sm"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-handy-orange outline-none transition-all"
                  placeholder="Describe your project (e.g., painting 3 bedrooms, fixing a deck)..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-auto bg-handy-blue text-white font-black text-lg py-4 rounded-lg hover:bg-orange-800 hover:cursor-pointer transition-all shadow-md active:scale-[0.98]"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: Real Calendly Booking */}
          <div className="flex flex-col h-full min-h-[800px]">
            <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden h-full flex flex-col">
              <div className="p-6 bg-slate-800/50 border-b border-slate-700 flex items-center gap-4">
                <div className="p-2 bg-handy-orange rounded-lg">
                  <LuCalendarDays className="text-white" size={24} />
                </div>
                <h2 className="text-xl font-bold text-white">
                  Book an Appointment
                </h2>
              </div>

              <div className="grow overflow-hidden">
                {/* REPLACE THE URL BELOW with your brother's actual Calendly link.
                    You can also customize the colors here to match your theme!
                  */}
                <InlineWidget
                  url="https://calendly.com/gfyrselfsaurus/30min"
                  styles={{ height: "100%", minWidth: "320px" }}
                  pageSettings={{
                    backgroundColor: "0f172a", // Matches slate-900
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: "ea580c", // handy-orange
                    textColor: "ffffff",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
