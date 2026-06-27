import type { Metadata, Viewport } from "next";
//import { Montserrat, Lato } from "next/font/google";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora", // If using Tailwind CSS variables
});

// 1. Enhanced Metadata for SEO & Social Media
export const metadata: Metadata = {
  title: {
    default: "Prime Build Construction",
    template: "%s | Prime Build Construction", // This automatically adds the suffix to other pages (e.g., "About | Prime Build Construction")
  },
  description:
    "Ireland's trusted local experts for small constructions, professional home repairs, maintenance, and precision painting. Fully insured and reliable. Book your quote today!",
  keywords: [
    "Construction Ireland",
    "Handyman Ireland",
    "Painting Services Ireland",
    "Home Repairs Ireland",
    "Ireland Painting Company",
    "Property Maintenance Ireland",
    "Construction Ireland",
    "Handyman Ireland",
    "Painting Services Ireland",
    "Home Repairs Ireland",
    "Irelandg Painting Company",
    "Property Maintenance Ireland",
  ],
  authors: [{ name: "Prime Build Construction" }],
  creator: "Prime Build Construction",
  metadataBase: new URL("https://prime-build-construction.vercel.app/"), // Replace with your actual domain later

  // OpenGraph (How the link looks on Facebook/WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://prime-build-construction.vercel.app/",
    title:
      "Prime Build Construction | Small constructions and repairs services in Ireland",
    description:
      "Quality construction work, home repairs and professional painting across Ireland. We treat your home like our own.",
    siteName: "Prime Build Construction",
    images: [
      {
        url: "/assets/company-logo.jpg", // This will be the preview image when shared
        width: 1200,
        height: 630,
        alt: "Prime Build Construction",
      },
    ],
  },

  // Standard Favicons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// 2. Separate Viewport Export (Next.js 14+ requirement)
export const viewport: Viewport = {
  themeColor: "#ea580c", // This colors the mobile browser address bar (Handy Orange)
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} h-full antialiased scroll-smooth`} // Added scroll-smooth for anchor links
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 ">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
