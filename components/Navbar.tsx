"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "How it works", href: "#how-it-works" },
  { name: "For professionals", href: "#professionals" },
  { name: "For companies", href: "#companies" },
  { name: "Challenges", href: "#challenges" },
  { name: "Why Veta", href: "#why-veta" },
  { name: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-5 lg:px-20">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/veta.png"
            alt="Veta"
            width={90}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-white transition-colors hover:text-purple-300 "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/signup"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Sign up
          </Link>

          <Link
            href="/get-started"
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-4 rounded-2xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-white transition-colors hover:text-purple-300"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 border-t border-white/10 pt-5">
              <Link
                href="/signup"
                className="rounded-full px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
              >
                Sign up
              </Link>

              <Link
                href="/get-started"
                className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
