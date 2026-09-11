"use client";

import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  CircleAlert,
  ClipboardCheck,
  FileText,
  Grid2X2,
  Layers3,
  Star,
  UserRound,
} from "lucide-react";

const candidates = [
  {
    name: "Sarah Chen",
    role: "Product Management",
    initials: "SC",
    scores: ["87%", "92%", "91%", "88%"],
  },
  {
    name: "James Wilson",
    role: "Product Management",
    initials: "JW",
    scores: ["91%", "89%", "94%", "92%"],
  },
  {
    name: "Priya Sharma",
    role: "Product Management",
    initials: "PS",
    scores: ["90%", "91%", "93%", "89%"],
  },
];

const traditionalSignals = [
  {
    title: "CV",
    description: "I have done the before.",
    icon: FileText,
  },
  {
    title: "Screening",
    description: "I completed this program.",
    icon: ClipboardCheck,
  },
  {
    title: "Interviews",
    description: "I can explain what I know.",
    icon: UserRound,
  },
  {
    title: "Deciscion",
    description: "I can explain what I know.",
    icon: BadgeCheck,
  },
];

const vetaEvidence = [
  {
    title: "Problem",
    description: "Here is what I did.",
    icon: CircleAlert,
  },
  {
    title: "Work",
    description: "Here is how I performed.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Evidence",
    description: "Here is how I think.",
    icon: FileText,
  },
  {
    title: "Deciscion",
    description: "Here is how I think.",
    icon: BadgeCheck,
  },
];

const companyBenefits = [
  {
    title: "Reduce Screening Time",
    description:
      "Give candidates a real-world challenge and quickly identify those who demonstrate the skills you need.",
  },
  {
    title: "Reduce Hiring Resources",
    description:
      "Spend less internal time and effort filtering candidates who may not be the right fit.",
  },
  {
    title: "Make Better Hiring Decisions",
    description:
      "See how candidates think, solve problems and perform before making a hiring decision.",
  },
  {
    title: "Discover More Than CVs Can Show",
    description:
      "Find capable talent based on demonstrated ability—not just experience, credentials or job titles.",
  },
];

export default function ForCompanies() {
  return (
    <section id="for-companies" className="w-full overflow-hidden">
      {/* =====================================================
          TOP SECTION
      ====================================================== */}
      <div className="relative bg-[#f6f9fd]">
        <div className="mx-auto grid min-h-[370px] w-full max-w-[1536px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-14 lg:px-[5.2vw] lg:py-20 xl:px-[80px]">
            <div className="max-w-[510px]">
              {/* Eyebrow */}
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7795bc] sm:text-[11px]">
                FOR COMPANIES
              </p>

              {/* Heading */}
              <h2 className="text-[31px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#102038] sm:text-[37px] md:text-[40px] lg:text-[36px] xl:text-[40px]">
                Find the right talent faster.
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[400px] text-[12px] leading-[1.6] text-[#6f8098] sm:text-[13px]">
                Hiring can mean reviewing hundreds of CVs, conducting multiple
                interviews and still wondering if you’ve found the right person.
              </p>
              <p className="mt-3 max-w-[400px] text-[12px] leading-[1.6] text-[#6f8098] sm:text-[13px]">
                Veta helps you spend less time screening and more time
                identifying people who can actually do the job.
              </p>

              <div>
                <p className="mb-3 mt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7795bc] sm:text-[11px]">
                  With Veta, you can:
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {companyBenefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="rounded-[10px] border border-[#e4ebf3] bg-white/70 p-3.5"
                    >
                      <h3 className="text-[11px] font-semibold text-[#293950]">
                        {benefit.title}
                      </h3>
                      <p className="mt-1.5 text-[10px] leading-[1.5] text-[#7a899d]">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* CTA */}
              <button
                type="button"
                className="mt-8 inline-flex h-[44px] items-center gap-4 rounded-full bg-gradient-to-r from-[#3188ef] to-[#7564e9] px-6 text-[11px] font-semibold text-white shadow-[0_8px_22px_rgba(65,111,224,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(65,111,224,0.3)]"
              >
                Become a Veta Partner
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* RIGHT CANDIDATE PANEL */}
          <div className="flex items-center px-5 pb-14 sm:px-10 lg:px-7 lg:py-10 xl:px-[55px]">
            <div className="w-full overflow-hidden rounded-[12px] border border-[#e1e8f1] bg-white shadow-[0_10px_35px_rgba(24,55,92,0.04)]">
              {/* Panel Header */}
              <div className="flex h-[48px] items-center justify-between border-b border-[#edf1f6] px-5 sm:px-6">
                <p className="text-[11px] font-semibold text-[#435672]">
                  Top Candidates
                </p>

                <button
                  type="button"
                  className="text-[10px] font-medium text-[#7294c3] transition-colors hover:text-[#4779bb]"
                >
                  View all
                </button>
              </div>

              {/* Candidate rows */}
              {candidates.map((candidate, index) => (
                <div
                  key={candidate.name}
                  className="grid min-h-[65px] grid-cols-[180px_1fr_auto] items-center gap-4 border-b border-[#edf1f6] px-5 sm:grid-cols-[210px_1fr_auto] sm:px-6"
                >
                  {/* Candidate */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[9px] font-semibold ${
                        index === 0
                          ? "bg-[#f3d7d1] text-[#9d655b]"
                          : index === 1
                            ? "bg-[#d9e7f4] text-[#50719a]"
                            : "bg-[#dfe0ef] text-[#656a9b]"
                      }`}
                    >
                      {candidate.initials}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[10px] font-semibold text-[#293950] sm:text-[11px]">
                        {candidate.name}
                      </p>

                      <p className="mt-0.5 truncate text-[8px] text-[#8a99ad] sm:text-[9px]">
                        {candidate.role}
                      </p>
                    </div>
                  </div>

                  {/* Scores */}
                  <div className="hidden items-center justify-center gap-5 md:flex">
                    {candidate.scores.map((score, scoreIndex) => (
                      <div
                        key={`${candidate.name}-${scoreIndex}`}
                        className="flex items-center gap-1 text-[8px] text-[#7890b1]"
                      >
                        <span className="h-[6px] w-[6px] rounded-full bg-[#7394c6]" />
                        {score}
                      </div>
                    ))}
                  </div>

                  {/* Recommended */}
                  <span className="rounded-full bg-[#effaf6] px-3 py-1.5 text-[8px] font-semibold text-[#55b89d] sm:text-[9px]">
                    Recommended
                  </span>
                </div>
              ))}

              {/* Footer */}
              <div className="flex h-[43px] items-center gap-2 px-5 sm:px-6">
                <span className="flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[#4388df]">
                  <Check size={11} className="text-white" strokeWidth={2.5} />
                </span>

                <span className="text-[9px] font-medium text-[#7c8da5]">
                  Work sample available
                </span>

                <span className="ml-auto text-[11px] text-[#adc1d7]">↻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          VETA DIFFERENCE
      ====================================================== */}
      <div className="relative overflow-hidden bg-[#050f1e]">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute left-[35%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#1e67da]/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-[-100px] bottom-[-100px] h-[400px] w-[400px] rounded-full bg-[#704ce8]/10 blur-[130px]" />

        <div className="relative mx-auto w-full max-w-[1536px] px-6 py-16 sm:px-10 md:px-14 lg:px-[5.2vw] lg:py-[34px] xl:px-[80px]">
          {/* Header */}
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6685b0] sm:text-[11px]">
              THE VETA DIFFERENCE
            </p>

            <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[37px]">
              From “I can do it” to “Here’s what I did.”
            </h2>

            <p className="mt-2 text-[12px] text-[#7889a2] sm:text-[13px]">
              Veta replaces assumptions with evidence.
            </p>
          </div>

          {/* Comparison */}
          <div className="mt-8 flex flex-col items-stretch gap-5 lg:grid lg:grid-cols-[1fr_100px_1.2fr] lg:items-center lg:gap-0">
            {/* Traditional Signals */}
            <div className="rounded-[13px] border border-white/[0.06] bg-[#0b1728] p-5 sm:p-6">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#c7d1df]">
                TRADITIONAL SIGNALS
              </p>

              <div className="space-y-4">
                {traditionalSignals.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-[7px] border border-[#566b89]/60 bg-[#111e30]">
                        <Icon
                          size={15}
                          strokeWidth={1.5}
                          className="text-[#a4b5ca]"
                        />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-[#dce4ee] sm:text-[11px]">
                          {item.title}
                        </p>

                        <p className="mt-0.5 text-[9px] text-[#687c96] sm:text-[10px]">
                          &ldquo;{item.description}&rdquo;
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* VS */}
            <div className="relative hidden h-full items-center justify-center lg:flex">
              <div className="absolute left-0 right-0 h-px bg-[#172940]" />

              <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#172b46] bg-[#071326]">
                <span className="text-[11px] font-semibold text-[#aab8ca]">
                  VS
                </span>
              </div>
            </div>

            {/* Veta Evidence */}
            <div className="relative rounded-[13px] border border-[#4564a0]/70 bg-gradient-to-br from-[#0e1c2f] to-[#11152c] p-5 shadow-[inset_0_0_35px_rgba(56,104,205,0.04)] sm:p-6">
              {/* Gradient border glow */}
              <div className="pointer-events-none absolute -inset-px rounded-[13px] bg-gradient-to-r from-[#3989ee]/30 via-transparent to-[#a063ec]/40 opacity-70 blur-[2px]" />

              <div className="relative">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#aabbd2]">
                  VETA EVIDENCE
                </p>

                <div className="space-y-4">
                  {vetaEvidence.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex items-center gap-4">
                        <div className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-[7px] border border-[#6277a4]/70 bg-[#101e32]">
                          <Icon
                            size={15}
                            strokeWidth={1.5}
                            className="text-[#b4c6e5]"
                          />
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold text-[#e2e9f3] sm:text-[11px]">
                            {item.title}
                          </p>

                          <p className="mt-0.5 text-[9px] text-[#71849e] sm:text-[10px]">
                            &ldquo;{item.description}&rdquo;
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile VS */}
            <div className="flex items-center justify-center lg:hidden">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#1b304b] bg-[#071326]">
                <span className="text-[10px] font-semibold text-[#91a1b6]">
                  VS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
