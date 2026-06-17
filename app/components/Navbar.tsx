"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

type MenuItem = {
  title: string;
  links: { name: string; href: string }[];
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menus: MenuItem[] = [
    {
      title: "Investor Relations",
      links: [
        { name: "Our Partners", href: "/insurance-partner" },
        { name: "Investor Invitation", href: "/investor-invitation" },
      ],
    },
    {
      title: "Business Services",
      links: [
        { name: "MSME Loans", href: "/msme-loans" },
        { name: "Business Loans", href: "/business-loans" },
        { name: "Project Loans", href: "/project-loans" },
        { name: "Agriculture Loans", href: "/agriculture-loans" },
        { name: "Joint Venture Loans", href: "/join-venture-loans" },
      ],
    },
    {
      title: "Personal Services",
      links: [
        { name: "Personal Loans", href: "/personnel-loans" },
        { name: "Hire Purchase / Vehicle Loans", href: "/hirepurchase-loans" },
        { name: "Mortgage Loans", href: "/mortgage-loans" },
        { name: "Housing Loans", href: "/housing-loans" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* NAVBAR */}
      <div className="bg-white border-b shadow-sm">
        <nav className="max-w-8xl mx-auto flex items-center justify-between px-4 py-3">

          {/* LOGO */}
          <Link href="/">
            <img
              src="/images/canadalogo.jpeg"
              className="w-32 hover:scale-105 transition"
              alt="logo"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">

            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>

            {menus.map((menu) => {
              const isOpen = activeMenu === menu.title;

              return (
                <div
                  key={menu.title}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(menu.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                    {menu.title}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`absolute left-0 top-8 w-64 bg-white/95 backdrop-blur-xl shadow-xl rounded-xl border overflow-hidden transition-all duration-200 ${
                      isOpen
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    {menu.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            <Link href="/news" className="hover:text-blue-600">
              News
            </Link>

            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden">
            <Menu size={28} />
          </button>
        </nav>
      </div>

      {/* ================= MOBILE ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm
          bg-white/95 backdrop-blur-2xl shadow-2xl
          transform transition-transform duration-500 flex flex-col
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center px-5 py-4 border-b">
            <img src="/images/canadalogo.jpeg" className="w-28" />
            <button onClick={() => setMobileOpen(false)} className="text-xl">
              ✕
            </button>
          </div>

          {/* SCROLL AREA */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 text-sm">

            {/* 🔥 MAIN LINKS FIXED (BLACK) */}
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-black font-medium"
            >
              About
            </Link>

            {menus.map((menu) => (
              <div key={menu.title}>
                <p className="font-semibold mb-2 text-black">
                  {menu.title}
                </p>

                <div className="pl-3 space-y-2 text-gray-700">
                  {menu.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* 🔥 FIXED NEWS + CONTACT (BLACK) */}
            <Link
              href="/news"
              onClick={() => setMobileOpen(false)}
              className="block text-black font-medium"
            >
              News
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-black font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}