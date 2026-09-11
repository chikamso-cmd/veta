"use client";

import {
  Search,
  Grid2X2,
  Lightbulb,
  ClipboardCheck,
  FileText,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Define What You Need",
    description:
      "Bring us a real problem your company is solving, a challenge you’ve defined for candidates, or simply the role and skills you want to assess.",
    icon: Search,
  },
  {
    number: "02",
    title: "We Build The Simulation",
    description:
      "Veta turns the problem into a structured, branded work simulation designed around the competencies that matter to your company.",
    icon: Grid2X2,
  },
  {
    number: "03",
    title: "Let Talent Do The Work",
    description:
      "Candidates step into the role, work through the problem and make decisions within a defined startup-like environment.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "See The Evidence",
    description:
      "Their work is evaluated against the competencies you’ve identified. Not assumptions. Not promises. Evidence.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Find Your Standouts",
    description:
      "Identify the people who demonstrate the ability to do the work—not simply the ability to interview well.",
    icon: FileText,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full overflow-hidden bg-[#f7faff] py-20 sm:py-24 lg:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-[550px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7189a8] sm:text-xs">
            HOW VETA WORKS
          </p>

          <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#101c2e] sm:text-[40px] lg:text-[43px]">
            Put candidates in the work.
            <br className="hidden sm:block" /> See what happens.
          </h2>
        </div>

        {/* Process Steps */}
        <div className="mt-12 lg:mt-[46px]">
          <div className="grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-3 sm:gap-5 lg:items-start lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="flex flex-1 flex-col lg:flex-row lg:items-start"
                >
                  {/* Step */}
                  <div className="flex flex-1 flex-col items-center text-center">
                    {/* Icon */}
                    <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full bg-gradient-to-br from-[#d9f4ff] via-[#e8edff] to-[#f5dfff]">
                      {/* inner circle */}
                      <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-white/80 bg-[#f5f9ff]">
                        <Icon
                          strokeWidth={1.7}
                          className="h-[29px] w-[29px] text-[#416a9e]"
                        />
                      </div>

                      {/* Number */}
                      <span className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 rounded-full bg-[#edf5ff] px-1 text-[8px] font-medium tracking-wide text-[#91a7c4]">
                        {step.number}
                      </span>
                    </div>

                    {/* Text */}
                    <h3 className="mt-6 max-w-[190px] text-[11px] font-bold leading-[1.25] tracking-[-0.01em] text-[#17263a] sm:text-xs">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-[185px] text-[11px] leading-[1.55] text-[#71809a] sm:text-xs">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index !== steps.length - 1 && (
                    <div className="hidden h-[76px] w-[58px] shrink-0 items-center justify-center lg:flex">
                      <div className="relative w-full">
                        <div className="h-px w-full bg-[#b9c5d5]" />
                        <ArrowRight
                          size={13}
                          strokeWidth={1.5}
                          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#9aaabd]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Mobile connector */}
                  {index !== steps.length - 1 && (
                    <div className="flex h-10 justify-center lg:hidden">
                      <div className="h-full w-px bg-[#c6d0de]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Challenge */}
        <div className="mt-20 grid overflow-hidden rounded-[16px] bg-white lg:mt-[74px] lg:grid-cols-[1.03fr_1fr]">
          {/* Image */}
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:min-h-[450px]">
            <img
              src="/assets/laptop.jpg"
              alt="Featured product growth challenge"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:px-[38px] lg:py-12">
            {/* Label + Time */}
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8aa2c1]">
                FEATURED CHALLENGE
              </p>

              <span className="shrink-0 rounded-full border border-[#dce5f1] bg-[#f9fbff] px-3 py-1.5 text-[10px] font-medium text-[#546983]">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#477fe7]" />
                40–72 hours
              </span>
            </div>

            {/* Heading */}
            <h3 className="mt-3 text-[27px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#15243a] sm:text-[31px]">
              Product Growth Challenge
            </h3>

            <p className="mt-4 max-w-[520px] text-[12px] leading-[1.6] text-[#71809a] sm:text-[13px]">
              First-transaction activation has fallen from 38% to 29%. What
              would you do?
            </p>

            {/* Problem / Task */}
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[12px] border border-[#edf1f6] bg-[#fbfcfe] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#17263a]">
                  THE PROBLEM
                </p>

                <p className="mt-3 text-[12px] leading-[1.55] text-[#71809a]">
                  First-transaction activation has fallen from 38% to 29%.
                </p>
              </div>

              <div className="rounded-[12px] border border-[#edf1f6] bg-[#fbfcfe] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#17263a]">
                  YOUR TASK
                </p>

                <p className="mt-3 text-[12px] leading-[1.55] text-[#71809a]">
                  Investigate the problem, make decisions and propose a
                  solution.
                </p>
              </div>
            </div>

            {/* Receive / Deliver */}
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[12px] border border-[#edf1f6] bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#17263a]">
                  YOU RECEIVE
                </p>

                <ul className="mt-3 space-y-1 text-[11px] leading-[1.5] text-[#71809a]">
                  <li>• Product context</li>
                  <li>• Relevant data</li>
                  <li>• Customer feedback</li>
                  <li>• Business constraints</li>
                </ul>
              </div>

              <div className="rounded-[12px] border border-[#edf1f6] bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#17263a]">
                  YOU DELIVER
                </p>

                <ul className="mt-3 space-y-1 text-[11px] leading-[1.5] text-[#71809a]">
                  <li>• Analysis</li>
                  <li>• Recommendation</li>
                  <li>• Reasoning</li>
                  <li>• Success metrics</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7">
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#3283e8] to-[#765de8] px-6 py-3 text-[11px] font-semibold text-white shadow-[0_8px_20px_rgba(65,113,220,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(65,113,220,0.28)]"
              >
                Explore This Challenge
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
