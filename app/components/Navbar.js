"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Facility", href: "/facility" },
    { name: "Solutions", href: "/solutions" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Clients", href: "/clients" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#071229]/90 backdrop-blur-lg border-b border-[#D4A017]/20">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-wide text-white">
            VARDHA
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4A017]">
            Warehousing
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-[#D4A017] transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/919999999999?text=Hello%20Vardha%20Warehousing,%20I%20need%20warehouse%20space."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition"
          >
            WhatsApp
          </a>

          <Link
            href="/book-space"
            className="bg-[#D4A017] hover:bg-[#c29212] text-[#071229] font-semibold px-5 py-2.5 rounded-xl transition"
          >
            Book Space
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#071229] border-t border-[#D4A017]/20">
          <div className="px-6 py-5 flex flex-col gap-4">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-[#D4A017] transition"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://wa.me/919999999999?text=Hello%20Vardha%20Warehousing,%20I%20need%20warehouse%20space."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
            >
              WhatsApp
            </a>

            <Link
              href="/book-space"
              onClick={() => setIsOpen(false)}
              className="text-center bg-[#D4A017] hover:bg-[#c29212] text-[#071229] font-semibold py-3 rounded-xl"
            >
              Book Space
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}