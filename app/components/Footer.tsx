"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const easeSmooth: [number, number, number, number] = [0.22, 1, 0.36, 1];

const links = {
  company: [
    { name: "About", href: "/about" },
    { name: "Investor Relations", href: "/investor-invitation" },
    { name: "Newsroom", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],

  services: [
    { name: "MSME Loans", href: "/msme-loans" },
    { name: "Business Loans", href: "/business-loans" },
    { name: "Project Loans", href: "/project-loans" },
    { name: "Agriculture Loans", href: "/agriculture-loans" },
    { name: "Joint Venture Loans", href: "/join-venture-loans" },
    { name: "Personal Loans", href: "/personnel-loans" },
    { name: "Mortgage Loans", href: "/mortgage-loans" },
    { name: "Housing Loans", href: "/housing-loans" },
  ],

  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Financial Reports", href: "/financial-reports" },
  ],
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
};

const social = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/",
    color: "hover:text-blue-400 hover:bg-blue-600/20",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/",
    color: "hover:text-pink-400 hover:bg-pink-500/20",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/",
    color: "hover:text-sky-400 hover:bg-sky-600/20",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070B14] text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* TOP GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12"
        >
          {/* BRAND */}
          <motion.div variants={item}>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              DEARO <span className="text-blue-500">VENTURE CANADA</span>
            </h2>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Dearo Venture Canada Ltd builds sustainable global venture ecosystems through innovation, capital excellence, transparency, and long-term value creation.
            </p>

            {/* SOCIAL */}
            <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
              {social.map((s, i) => {
                const Icon = s.icon;

                return (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center
                      bg-white/5 border border-white/10 text-gray-300 backdrop-blur-md
                      transition-all duration-300 ${s.color}`}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* COMPANY */}
          <motion.div variants={item}>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 sm:mb-6">
              Company
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {links.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={item}>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 sm:mb-6">
              Financial Solutions
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {links.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* LEGAL & CONTACT */}
          <motion.div variants={item}>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 sm:mb-6">
              Legal & Support
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {links.legal.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-sm">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Email Inquiry</p>
              <a
                href="mailto:info@dearoventurecanada.com"
                className="text-white hover:text-blue-400 transition break-all font-medium text-xs sm:text-sm"
              >
                info@dearoventurecanada.com
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <div className="my-10 sm:my-12 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Dearo Venture Canada Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}