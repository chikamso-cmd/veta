"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const navigation = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Professionals", href: "#for-professionals" },
  { label: "For Companies", href: "#for-companies" },
  { label: "Contact", href: "#contact" },
];

export default function CallToAction() {
  return (
    <footer className="w-full overflow-hidden bg-[#031021]">
      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative min-h-[235px] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/mountain.png')",
          }}
        />

        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-[#061326]/45" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#031021] to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[235px] w-full max-w-[1400px] items-center px-5 py-8 sm:px-8 lg:px-10">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            {/* Main CTA text */}
            <div className="max-w-[610px]">
              <p className="text-[16px] font-medium leading-[1.35] tracking-[-0.02em] text-white sm:text-[19px] md:text-[21px]">
                Don&apos;t gamble on potential.
                <br className="hidden sm:block" />
                See it in action.
              </p>

              <h2 className="mt-2 text-[23px] font-semibold uppercase leading-[1.1] tracking-[-0.035em] text-transparent sm:text-[28px] md:text-[30px]">
                <span className="bg-gradient-to-r from-[#42a0ff] via-[#786cff] to-[#d44fe1] bg-clip-text">
                  Give candidates a real opportunity to prove themselves. Give
                  your hiring team evidence they can trust.
                </span>
              </h2>
            </div>

            {/* CTA cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:w-[570px]">
              {/* Professional */}
              <div className="rounded-[11px] border border-white/[0.06] bg-[#0a1930]/70 px-5 py-4 backdrop-blur-[5px] transition-all duration-300 hover:border-[#4c86db]/30 hover:bg-[#0d1e38]/80">
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#aebdd0] sm:text-[10px]">
                  FOR PROFESSIONALS
                </p>

                <p className="mt-1 text-[10px] text-[#8093ae] sm:text-[11px]">
                  Prove what you can do.
                </p>

                <Link
                  href="#contact"
                  className="mt-3 inline-flex h-[34px] items-center gap-3 rounded-full bg-gradient-to-r from-[#328af2] to-[#7a61e9] px-4 text-[9px] font-semibold text-white shadow-[0_6px_18px_rgba(65,116,231,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(65,116,231,0.32)]"
                >
                  Contact Us
                  <ArrowRight size={12} />
                </Link>
              </div>

              {/* Companies */}
              <div className="rounded-[11px] border border-white/[0.06] bg-[#0a1930]/70 px-5 py-4 backdrop-blur-[5px] transition-all duration-300 hover:border-[#4c86db]/30 hover:bg-[#0d1e38]/80">
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#aebdd0] sm:text-[10px]">
                  FOR COMPANIES
                </p>

                <p className="mt-1 text-[10px] text-[#8093ae] sm:text-[11px]">
                  Discover demonstrated talent.
                </p>

                <Link
                  href="#for-companies"
                  className="mt-3 inline-flex h-[34px] items-center gap-3 rounded-full bg-gradient-to-r from-[#328af2] to-[#7a61e9] px-4 text-[9px] font-semibold text-white shadow-[0_6px_18px_rgba(65,116,231,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(65,116,231,0.32)]"
                >
                  Run a Challenge
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <div className="border-t border-white/[0.025] bg-[#031021]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-10 sm:px-8 md:py-12 lg:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start">
            {/* Logo / Brand */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="Veta home"
              >
                <Image
                  src="/assets/veta.png"
                  alt="Veta logo"
                  width={100}
                  height={40}
                />
              </Link>

              <p className="mt-4 max-w-[300px] text-[9px] font-medium uppercase leading-[1.5] tracking-[0.04em] text-[#71839c] sm:text-[10px]">
                Real work. Verified ability. Real opportunities.
              </p>
            </div>

            {/* Navigation */}
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-x-7 gap-y-4 md:justify-center"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[9px] font-medium text-[#8190a5] transition-colors duration-200 hover:text-white sm:text-[10px]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Social + Description */}
            <div className="flex flex-col items-start md:items-end">
              {/* Social icons */}
              <div className="flex items-center gap-5">
                <Link
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="text-[#a9b5c5] transition-colors hover:text-white"
                >
                  <FaLinkedinIn size={17} strokeWidth={1.5} />
                </Link>

                <Link
                  href="#x"
                  aria-label="X"
                  className="text-[#a9b5c5] transition-colors hover:text-white"
                >
                  <FaXTwitter size={17} strokeWidth={1.5} />
                </Link>

                <Link
                  href="#instagram"
                  aria-label="Instagram"
                  className="text-[#a9b5c5] transition-colors hover:text-white"
                >
                  <FaInstagram size={17} strokeWidth={1.5} />
                </Link>
              </div>

              <p className="mt-5 max-w-[290px] text-left text-[8px] leading-[1.5] text-[#63748d] md:text-right sm:text-[9px]">
                Veta is building a future where professional capability is
                proven by demonstrated work, not just what your CV says.
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-9 border-t border-white/[0.035] pt-5">
            <p className="text-center text-[8px] text-[#4f6077] sm:text-[9px]">
              © {new Date().getFullYear()} Veta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
