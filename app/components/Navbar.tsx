"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, X } from "lucide-react";

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
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
        <nav className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6 py-1.5 sm:py-2">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/canadalogo.jpeg"
              className="h-8 sm:h-9 w-auto object-contain hover:scale-105 transition"
              alt="Dearo Venture Canada Ltd logo"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-semibold text-gray-800">
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>

            {menus.map((menu) => {
              const isOpen = activeMenu === menu.title;

              return (
                <div
                  key={menu.title}
                  className="relative py-1"
                  onMouseEnter={() => setActiveMenu(menu.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
                    {menu.title}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`absolute left-0 top-full pt-1 w-60 transition-all duration-200 ${
                      isOpen
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible pointer-events-none"
                    }`}
                  >
                    <div className="bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-100 overflow-hidden py-1.5">
                      {menu.links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link href="/news" className="hover:text-blue-600 transition">
              News
            </Link>

            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open Mobile Menu"
            className="md:hidden p-1.5 text-gray-700 hover:text-blue-600 transition focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER CONTENT */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm
          bg-white shadow-2xl
          transform transition-transform duration-300 flex flex-col
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center px-5 py-3 border-b border-gray-100">
            <img src="/images/canadalogo.jpeg" className="h-8 w-auto object-contain" alt="Logo" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1 text-gray-500 hover:text-gray-900 transition rounded-lg"
            >
              <X size={22} />
            </button>
          </div>

          {/* SCROLL AREA */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 text-sm">
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-900 font-bold hover:text-blue-600"
            >
              About Us
            </Link>

            <div className="h-[1px] bg-gray-100" />

            {menus.map((menu) => (
              <div key={menu.title} className="space-y-2">
                <p className="font-bold text-xs uppercase tracking-wider text-blue-600">
                  {menu.title}
                </p>

                <div className="pl-2 space-y-2 border-l-2 border-blue-50 text-gray-700">
                  {menu.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-xs sm:text-sm hover:text-blue-600 transition py-0.5"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="h-[1px] bg-gray-100" />

            <Link
              href="/news"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-900 font-bold hover:text-blue-600"
            >
              Newsroom
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-900 font-bold hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}