"use client";

import Image from "next/image";
import {
  Award,
  BarChart3,
  BriefcaseBusiness,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    title: "Realistic Work Experience",
    description:
      "Practice with scenarios that replicate real professional work.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Demonstrated Capability",
    description: "Show your strengths in decision-making and problem-solving.",
    icon: Award,
  },
  {
    title: "Performance Feedback",
    description: "Understand your strengths and areas for improvement.",
    icon: BarChart3,
  },
  {
    title: "Evidence That Stands Out",
    description: "Build work samples that demonstrate what you can do.",
    icon: FileCheck2,
  },
];

export default function ForProfessionals() {
  return (
    <section
      id="for-professionals"
      className="w-full overflow-hidden bg-[#061121]"
    >
      <div className="mx-auto grid min-h-[620px] w-full max-w-[1536px] grid-cols-1 lg:grid-cols-2">
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 md:px-14 lg:px-[5.2vw] lg:py-20 xl:px-[80px]">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute left-[-180px] top-[-150px] h-[400px] w-[400px] rounded-full bg-[#2464d8]/10 blur-[120px]" />

          <div className="relative z-10 max-w-[610px]">
            {/* Eyebrow */}
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7197d0] sm:text-[11px]">
              FOR PROFESSIONALS
            </p>

            {/* Heading */}
            <h2 className="max-w-[570px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-[42px] md:text-[43px] lg:text-[30px] xl:text-[30px]">
              Don&apos;t just say you&apos;re capable.
              <br />
              <span className="bg-gradient-to-r from-[#4198ff] to-[#8d71ff] bg-clip-text text-transparent">
                Show it.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[500px] text-[13px] leading-[1.55] text-[#91a2b9] sm:text-[14px]">
              Build stronger evidence of your ability by solving realistic
              professional challenges.
            </p>

            {/* Benefits */}
            <div className="mt-9 grid max-w-[610px] grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group flex min-h-[105px] gap-3 rounded-[10px] border border-white/[0.035] bg-white/[0.018] p-4 transition-all duration-300 hover:border-[#5f83d5]/20 hover:bg-white/[0.035]"
                  >
                    {/* Icon */}
                    <div className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-full border border-[#526bc1]/50 bg-[#101d39]">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#7f9bea]"
                      />
                    </div>

                    {/* Text */}
                    <div className="pt-[1px]">
                      <h3 className="text-[11px] font-semibold leading-[1.35] text-[#e7edf7] sm:text-xs">
                        {benefit.title}
                      </h3>

                      <p className="mt-1.5 max-w-[190px] text-[10px] leading-[1.5] text-[#8494aa] sm:text-[11px]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <button
              type="button"
              className="mt-8 inline-flex h-[45px] items-center gap-4 rounded-full bg-gradient-to-r from-[#358cf3] to-[#7963ed] px-6 text-[11px] font-semibold text-white shadow-[0_8px_30px_rgba(63,118,235,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(63,118,235,0.32)] active:translate-y-0"
            >
              Start Your First Challenge
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                <ArrowRight size={13} strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>

        {/* =====================================================
            RIGHT IMAGE
        ====================================================== */}
        <div
          id="professionals"
          className="relative min-h-[430px] overflow-hidden sm:min-h-[550px] lg:min-h-[620px]"
        >
          <Image
            src="/assets/professional.png"
            alt="Professional working on a real-world challenge"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Dark image overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061121]/15 via-transparent to-[#061121]/10" />

          {/* Left edge blend */}
          <div className="absolute inset-y-0 left-0 hidden w-[100px] bg-gradient-to-r from-[#061121]/40 to-transparent lg:block" />

          {/* =================================================
              Image annotation
          ================================================== */}
          <div className="absolute right-[7%] top-[25%] max-w-[190px]">
            <p className="font-sans text-[17px] italic leading-[1.45] text-white/90 drop-shadow-lg sm:text-[19px]">
              Real skills.
              <br />
              Real opportunities.
            </p>

            {/* Hand-drawn-style underline */}
            <div className="relative ml-5 mt-2 h-[18px] w-[75px]">
              <svg viewBox="0 0 90 25" fill="none" className="h-full w-full">
                <path
                  d="M2 3C28 20 53 22 88 2"
                  stroke="white"
                  strokeOpacity="0.35"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
