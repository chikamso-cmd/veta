"use client";

import {
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    name: "Problem Framing",
    score: 8,
    color: "from-[#3488ed] to-[#4b9af0]",
  },
  {
    name: "Analysis",
    score: 9,
    color: "from-[#3988ed] to-[#529bf0]",
  },
  {
    name: "Reasoning",
    score: 8,
    color: "from-[#667eea] to-[#8171e9]",
  },
  {
    name: "Decision Quality",
    score: 8,
    color: "from-[#7381e5] to-[#9b72e4]",
  },
  {
    name: "Prioritization",
    score: 7,
    color: "from-[#727de0] to-[#a06fe0]",
  },
  {
    name: "Communication",
    score: 9,
    color: "from-[#438de9] to-[#5b9aef]",
  },
  {
    name: "Execution Thinking",
    score: 8,
    color: "from-[#3c87e8] to-[#6098ed]",
  },
];

const reportItems = [
  {
    title: "Problem Framing",
    result: "Excellent",
  },
  {
    title: "Analysis",
    result: "Strong",
  },
  {
    title: "Decision Quality",
    result: "Excellent",
  },
  {
    title: "Prioritization",
    result: "Strong",
  },
  {
    title: "Communication",
    result: "Excellent",
  },
];

const framework = [
  {
    label: "WORK",
    icon: BriefcaseBusiness,
  },
  {
    label: "DEMONSTRATE",
    icon: Sparkles,
  },
  {
    label: "EVALUATE",
    icon: CheckCircle2,
  },
  {
    label: "EVIDENCE",
    icon: FileText,
  },
  {
    label: "TRUST",
    icon: Shield,
  },
  {
    label: "OPPORTUNITY",
    icon: Sparkles,
  },
];

export default function CapabilityAssessment() {
  return (
    <section id="capability-assessment" className="w-full overflow-hidden">
      {/* =====================================================
          CAPABILITY ASSESSMENT
      ====================================================== */}
      <div className="bg-[#f6f9fd]">
        <div className="mx-auto grid w-full max-w-[1536px] grid-cols-1 gap-10 px-6 py-16 sm:px-10 md:px-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-[5.2vw] lg:py-[48px] xl:px-[80px]">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d9bc1] sm:text-[11px]">
              CAPABILITY ASSESSMENT
            </p>

            {/* Heading */}
            <h2 className="text-[31px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#122138] sm:text-[37px] lg:text-[38px]">
              We assess what you demonstrate.
            </h2>

            {/* Description */}
            <p className="mt-2 max-w-[550px] text-[11px] leading-[1.55] text-[#8494aa] sm:text-[12px]">
              Performance is assessed against the capabilities required to solve
              the challenge successfully.
            </p>

            {/* Capability list */}
            <div className="mt-6 max-w-[650px] space-y-[8px]">
              {capabilities.map((capability) => {
                const percentage = capability.score * 10;

                return (
                  <div
                    key={capability.name}
                    className="grid grid-cols-[165px_1fr_45px] items-center gap-3 sm:grid-cols-[190px_1fr_45px] sm:gap-5"
                  >
                    {/* Name */}
                    <span className="text-[10px] font-medium text-[#53657d] sm:text-[11px]">
                      {capability.name}
                    </span>

                    {/* Progress */}
                    <div className="relative h-[4px] overflow-hidden bg-[#e8edf4]">
                      <div
                        className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${capability.color}`}
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>

                    {/* Score */}
                    <span className="text-right text-[10px] font-medium text-[#8391a4] sm:text-[11px]">
                      {capability.score}/10
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              PERFORMANCE REPORT
          ================================================== */}
          <div className="flex items-center">
            <div className="w-full rounded-[14px] border border-[#dce4ee] bg-white px-6 py-5 shadow-[0_8px_30px_rgba(36,62,96,0.025)] sm:px-7 sm:py-6">
              {/* Header */}
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8194ad]">
                VETA PERFORMANCE REPORT
              </p>

              {/* Results */}
              <div className="mt-5 grid grid-cols-2 gap-x-7 gap-y-3 sm:grid-cols-3">
                {reportItems.map((item) => (
                  <div key={item.title} className="flex flex-col">
                    <span className="text-[10px] font-medium text-[#657993]">
                      {item.title}
                    </span>

                    <span
                      className={`mt-1 text-[10px] font-semibold ${
                        item.result === "Excellent"
                          ? "text-[#42ae9a]"
                          : "text-[#55a9a0]"
                      }`}
                    >
                      {item.result}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-[#edf1f6]" />

              {/* Bottom information */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-semibold text-[#52657c]">
                    Strengths
                  </p>

                  <p className="mt-1.5 max-w-[230px] text-[9px] leading-[1.5] text-[#8594a8] sm:text-[10px]">
                    Strong analytical reasoning and prioritization.
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-[#52657c]">
                    Work Sample
                  </p>

                  <p className="mt-1.5 text-[9px] leading-[1.5] text-[#8594a8] sm:text-[10px]">
                    Available for employer review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          VETA FRAMEWORK
      ====================================================== */}
      <div className="relative overflow-hidden bg-[#050f1e]">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute left-[38%] top-[-100px] h-[280px] w-[280px] rounded-full bg-[#2679dc]/10 blur-[110px]" />

        <div className="pointer-events-none absolute right-[5%] bottom-[-130px] h-[300px] w-[300px] rounded-full bg-[#814de2]/10 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-[1536px] px-6 py-12 sm:px-10 md:px-14 lg:px-[5.2vw] lg:py-[28px] xl:px-[80px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[330px_1fr] lg:items-center lg:gap-12">
            {/* Framework text */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6e89b1] sm:text-[11px]">
                THE VETA FRAMEWORK
              </p>

              <p className="mt-3 text-[13px] font-medium leading-[1.65] tracking-[-0.01em] text-[#e0e7f0] sm:text-[14px]">
                The simulation creates the work.
                <br />
                The work creates the evidence.
                <br />
                The evidence creates trust.
                <br />
                The trust creates opportunity.
              </p>
            </div>

            {/* Framework steps */}
            <div className="relative">
              {/* Desktop connecting line */}
              <div className="absolute left-[48px] right-[48px] top-[43px] hidden h-px bg-[#1a2d46] lg:block" />

              <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between lg:gap-0">
                {framework.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="relative flex items-center justify-center lg:flex-1"
                    >
                      <div className="flex items-center">
                        {/* Circle */}
                        <div
                          className={`relative z-10 flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full border bg-[#071426] sm:h-[82px] sm:w-[82px] ${
                            index % 2 === 0
                              ? "border-[#2c6db4]"
                              : "border-[#7048aa]"
                          }`}
                        >
                          <Icon
                            size={18}
                            strokeWidth={1.4}
                            className={
                              index % 2 === 0
                                ? "text-[#6099e2]"
                                : "text-[#9c70d9]"
                            }
                          />

                          <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.05em] text-[#b4c0d0]">
                            {item.label}
                          </span>
                        </div>

                        {/* Arrow */}
                        {index !== framework.length - 1 && (
                          <div className="ml-2 hidden lg:block">
                            <ArrowRight
                              size={13}
                              strokeWidth={1.4}
                              className="text-[#566b86]"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
