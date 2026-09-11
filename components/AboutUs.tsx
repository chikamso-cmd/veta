"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileCheck2,
  Target,
  Users,
} from "lucide-react";

const principles = [
  {
    icon: BriefcaseBusiness,
    title: "Real work",
    description:
      "Candidates work through realistic professional scenarios instead of theoretical questions.",
  },
  {
    icon: Target,
    title: "Observable capability",
    description:
      "Performance is assessed against clear criteria that reflect the capabilities required for the work.",
  },
  {
    icon: FileCheck2,
    title: "Evidence over assumptions",
    description:
      "The output is evidence of what someone can do — not simply another credential.",
  },
  {
    icon: Users,
    title: "Better opportunities",
    description:
      "Strong performance gives employers a clearer reason to start a conversation.",
  },
];

const journey = [
  "Realistic simulation",
  "Demonstrated work",
  "Performance assessment",
  "Evidence",
  "Employer review",
  "Opportunity",
];

export default function AboutUs() {
  return (
    <section
      id="about_us"
      className="relative w-full overflow-hidden bg-[#f6f9fd]"
    >
      {/* =========================================================
          HERO / INTRO
      ========================================================== */}
      <div className="relative overflow-hidden bg-[#041122]">
        {/* Optional background image.
            Place your image at:
            /public/images/about-veta-bg.jpg
        */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('/assets/about.png')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#041122]/80" />

        {/* Blue glow */}
        <div className="pointer-events-none absolute left-[10%] top-[-180px] h-[450px] w-[450px] rounded-full bg-[#287de0]/20 blur-[140px]" />

        {/* Purple glow */}
        <div className="pointer-events-none absolute right-[-100px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-[#794de1]/20 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-[90px] sm:px-10 sm:py-[110px] md:px-14 lg:px-[5.2vw] lg:py-[125px] xl:px-[80px]">
          <div className="max-w-[850px]">
            {/* Eyebrow */}
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7398ca] sm:text-[11px]">
              ABOUT VETA
            </p>

            {/* Main heading */}
            <h1 className="text-[38px] font-semibold leading-[1.06] tracking-[-0.05em] text-white sm:text-[48px] md:text-[56px] lg:text-[62px]">
              Opportunity should be based on what you can{" "}
              <span className="bg-gradient-to-r from-[#439dff] via-[#7772f2] to-[#cf5ce0] bg-clip-text text-transparent">
                demonstrate.
              </span>
            </h1>

            {/* Intro */}
            <p className="mt-7 max-w-[680px] text-[14px] leading-[1.7] text-[#9aaac0] sm:text-[15px] md:text-[16px]">
              Veta helps companies discover capable talent through realistic
              work simulations, giving professionals a way to prove what they
              can do beyond their CV.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#how-it-works"
                className="inline-flex h-[46px] w-fit items-center gap-4 rounded-full bg-gradient-to-r from-[#348cf1] to-[#7964eb] px-6 text-[11px] font-semibold text-white shadow-[0_10px_30px_rgba(55,113,228,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(55,113,228,0.35)]"
              >
                See How Veta Works
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          WHY VETA EXISTS
      ========================================================== */}
      <div className="bg-[#f6f9fd]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-[5.2vw] lg:py-[95px] xl:px-[80px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Left */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7d99bd] sm:text-[11px]">
                WHY VETA EXISTS
              </p>

              <h2 className="mt-3 max-w-[480px] text-[32px] font-semibold leading-[1.1] tracking-[-0.045em] text-[#102139] sm:text-[40px]">
                A CV can tell you what someone says.
                <span className="mt-1 block text-[#3989ed]">
                  We want to see what they can do.
                </span>
              </h2>
            </div>

            {/* Right */}
            <div className="max-w-[650px]">
              <p className="text-[14px] leading-[1.75] text-[#6d7d94] sm:text-[15px]">
                Hiring can be uncertain. CVs, credentials and interviews do not
                always give companies enough evidence of what a candidate can
                actually do.
              </p>

              <p className="mt-5 text-[14px] leading-[1.75] text-[#6d7d94] sm:text-[15px]">
                At the same time, talented professionals can struggle to get
                opportunities because they do not yet have the experience
                employers require.
              </p>

              <div className="mt-7 rounded-[14px] border border-[#dfe7f0] bg-white p-5 shadow-[0_12px_40px_rgba(30,59,92,0.04)] sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7c91ae]">
                  THE QUESTION
                </p>

                <p className="mt-3 text-[18px] font-medium leading-[1.4] tracking-[-0.025em] text-[#16263e] sm:text-[21px]">
                  “Can this person actually do the work?”
                </p>

                <div className="mt-4 h-px bg-[#edf1f5]" />

                <p className="mt-4 text-[11px] leading-[1.65] text-[#7d8da3] sm:text-[12px]">
                  Veta creates a practical way to answer that question with
                  demonstrated work and assessed performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUR APPROACH
      ========================================================== */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-[5.2vw] lg:py-[90px] xl:px-[80px]">
          {/* Heading */}
          <div className="max-w-[650px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7d99bd] sm:text-[11px]">
              OUR APPROACH
            </p>

            <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.045em] text-[#102139] sm:text-[40px]">
              We create the environment.
              <br />
              <span className="text-[#428eed]">
                Your work creates the evidence.
              </span>
            </h2>
          </div>

          {/* Principles */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="group rounded-[14px] border border-[#e2e9f1] bg-[#f9fbfe] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8cce7] hover:shadow-[0_15px_40px_rgba(38,75,115,0.06)] sm:p-6"
                >
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#cbdcf2] bg-white">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#438de9]"
                    />
                  </div>

                  <h3 className="mt-5 text-[13px] font-semibold text-[#243650]">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-[1.65] text-[#7b8ba1]">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================
          VETA MODEL
      ========================================================== */}
      <div className="relative overflow-hidden bg-[#050f1e]">
        {/* Background glows */}
        <div className="pointer-events-none absolute left-[20%] top-[-180px] h-[400px] w-[400px] rounded-full bg-[#236ed2]/10 blur-[130px]" />

        <div className="pointer-events-none absolute right-[10%] bottom-[-180px] h-[400px] w-[400px] rounded-full bg-[#814ce1]/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-[5.2vw] lg:py-[85px] xl:px-[80px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            {/* Text */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6e8bb5] sm:text-[11px]">
                THE VETA MODEL
              </p>

              <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.045em] text-white sm:text-[40px]">
                Work creates evidence.
                <br />
                <span className="bg-gradient-to-r from-[#4398fa] to-[#9270e7] bg-clip-text text-transparent">
                  Evidence creates trust.
                </span>
              </h2>

              <p className="mt-5 max-w-[450px] text-[12px] leading-[1.7] text-[#788ba6] sm:text-[13px]">
                Veta connects realistic professional challenges with performance
                assessment, giving companies evidence they can use to identify
                people worth speaking to.
              </p>
            </div>

            {/* Process */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[8%] right-[8%] top-[34px] hidden h-px bg-[#1b304a] sm:block" />

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2">
                {journey.map((item, index) => (
                  <div
                    key={item}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div
                      className={`relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border bg-[#071426] ${
                        index % 2 === 0
                          ? "border-[#306cae]"
                          : "border-[#7049a8]"
                      }`}
                    >
                      {index === journey.length - 1 ? (
                        <CheckCircle2
                          size={21}
                          strokeWidth={1.4}
                          className="text-[#9c76df]"
                        />
                      ) : (
                        <span className="text-[11px] font-semibold text-[#7895ba]">
                          0{index + 1}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 max-w-[95px] text-[9px] font-medium leading-[1.35] text-[#a7b5c8]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          FINAL STATEMENT
      ========================================================== */}
      <div className="relative overflow-hidden bg-[#f6f9fd]">
        <div className="mx-auto max-w-[1000px] px-6 py-20 text-center sm:px-10 sm:py-[100px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7c96b9]">
            OUR BELIEF
          </p>

          <h2 className="mx-auto mt-4 max-w-[800px] text-[33px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#11223b] sm:text-[40px] md:text-[40px]">
            The future of hiring isn’t about better CVs. <br />
            <span className="bg-gradient-to-r from-[#398ef1] to-[#805fe7] bg-clip-text text-transparent">
              It’s about better evidence.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[610px] text-[13px] leading-[1.7] text-[#75869d] sm:text-[14px]">
            We believe talented people deserve a chance to demonstrate what
            they’re capable of. And companies deserve more than a résumé and a
            45-minute interview when deciding who to hire. Veta is building the
            evidence layer between talent and opportunity.
          </p>

          <Link
            href="#challenges"
            className="mt-8 inline-flex h-[46px] items-center gap-4 rounded-full bg-gradient-to-r from-[#348cf1] to-[#7964eb] px-6 text-[11px] font-semibold text-white shadow-[0_10px_28px_rgba(58,112,224,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(58,112,224,0.3)]"
          >
            Explore a Veta Challenge
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
