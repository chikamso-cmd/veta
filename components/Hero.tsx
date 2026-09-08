import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CircleUserRound,
  Lightbulb,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050c14] text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/herobg.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050c14_0%,rgba(5,12,20,0.96)_18%,rgba(5,12,20,0.72)_42%,rgba(5,12,20,0.2)_72%,rgba(5,12,20,0.08)_100%)]" />

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 pb-16 pt-32 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8 lg:px-12 lg:pb-24 lg:pt-36">
        <div className="relative z-10 max-w-[540px]">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#7190b4]">
            Real work. Verified ability.
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[51px]">
            Your CV tells your story.
            <br />
            Your work proves your ability.
            <br />
            <span className="bg-gradient-to-r from-[#27a7ff] via-[#617cf8] to-[#ed27db] bg-clip-text text-transparent">
              PROVE WHAT YOU CAN DO.
            </span>
          </h1>
          <p className="mt-6 max-w-[460px] text-sm leading-6 text-[#b2c0ce] sm:text-[15px]">
            Veta helps professionals demonstrate real capability through
            realistic work simulations, giving companies evidence they can
            trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#challenges"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#9548f5] to-[#6684ff] px-6 py-3 text-xs font-semibold shadow-[0_10px_30px_rgba(111,82,255,0.28)] transition-transform hover:scale-[1.03]"
            >
              Explore a Challenge <ArrowRight size={15} />
            </Link>
            <Link
              href="#companies"
              className="inline-flex items-center rounded-full border border-[#38516b] px-6 py-3 text-xs font-semibold text-[#e1eaf3] transition-colors hover:border-[#819bb8] hover:bg-white/5"
            >
              For Companies
            </Link>
          </div>
        </div>

        <div className="relative min-w-0 lg:-mr-24">
          <div className="absolute -inset-5 rounded-[30px] bg-[#136ca1]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-[#2a4864] bg-[#071827]/95 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <div className="flex h-11 items-center justify-between border-b border-[#1b354d] px-4 sm:px-5">
              <div className="flex items-center gap-2 text-[9px] font-bold text-white">
                <span className="text-lg text-[#4ba8ff]">V</span> Product Growth
                Challenge
              </div>
              <div className="flex items-center gap-2 text-[8px] text-[#7b95af]">
                <Play size={10} className="fill-current" /> In progress{" "}
                <CircleUserRound size={16} className="text-[#e794c8]" />
              </div>
            </div>
            <div className="grid min-h-[330px] grid-cols-[112px_1fr] sm:grid-cols-[145px_1fr]">
              <aside className="border-r border-[#1b354d] bg-[#081421] p-3 sm:p-4">
                <p className="mb-4 text-[7px] uppercase tracking-[0.15em] text-[#617a94]">
                  Overview
                </p>
                <div className="space-y-3 text-[8px] text-[#8095aa]">
                  <div className="rounded-md bg-[#1c3150] px-2 py-2 text-white">
                    Company Context
                  </div>
                  <div>Product Strategy</div>
                  <div>Customer Feedback</div>
                  <div>Data Insights</div>
                  <div>Challenges Brief</div>
                  <div>Responses</div>
                  <div>Submissions</div>
                </div>
              </aside>
              <div className="min-w-0 p-4 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] text-[#7188a2]">
                      Product Growth Challenge
                    </p>
                    <h2 className="mt-1 text-sm font-bold sm:text-base">
                      Approach the challenge with fresh eyes.
                    </h2>
                  </div>
                  <span className="rounded-full border border-[#314e6d] px-2 py-1 text-[7px] text-[#8ca4bc]">
                    02:43:15 left
                  </span>
                </div>
                <div className="rounded-xl border border-[#0d4a78] bg-[#08233a]/80 p-4">
                  <div className="flex items-center gap-2 text-[9px] font-semibold">
                    <Target size={13} className="text-[#4ba8ff]" /> Company
                    Context{" "}
                    <span className="text-[7px] text-[#7390a9]">01 / 05</span>
                  </div>
                  <p className="mt-2 max-w-[340px] text-[8px] leading-4 text-[#7792aa]">
                    A fast-growing fintech startup focused on making digital
                    banking simple and accessible.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <Metric
                      label="Activation Rate"
                      value="12.4%"
                      change="+32%"
                    />
                    <Metric
                      label="Monthly Active Users"
                      value="48.2K"
                      change="+16%"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div className="h-12 flex-1 rounded bg-[#081522] p-2">
                    <div className="flex items-center justify-between text-[7px] text-[#8198ad]">
                      <span>Performance trend</span>
                      <span className="text-[#ed4a90]">+24.8%</span>
                    </div>
                    <div className="mt-3 h-px w-full bg-gradient-to-r from-[#2bb4ff] via-[#b735be] to-[#ed347f]" />
                  </div>
                  <div className="w-24 rounded-lg border border-[#533c7d] bg-[#171934] p-2 text-[8px] text-[#bcc4e1]">
                    <div className="mb-2 flex items-center gap-1">
                      <Sparkles size={10} className="text-[#be75ff]" /> Evidence
                    </div>
                    <div>Problem framing</div>
                    <div>Analysis quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d6e1ec] bg-[#f5f8fc] px-6 py-14 text-center text-[#122238] sm:px-10 lg:py-16">
        <h2 className="text-xl font-bold sm:text-2xl">
          Stop asking what people say they can do.
        </h2>
        <p className="mt-1 text-xl font-bold bg-gradient-to-r from-[#198df0] to-[#b43ee5] bg-clip-text text-transparent sm:text-2xl">
          Start seeing what they can demonstrate.
        </p>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-0">
          <Proof
            icon={<Lightbulb />}
            title="REAL WORK"
            text="Professionals solve realistic challenges."
          />
          <Proof
            icon={<ShieldCheck />}
            title="VERIFIED EVIDENCE"
            text="Performance is assessed against clear criteria."
          />
          <Proof
            icon={<BarChart3 />}
            title="BETTER TALENT SIGNALS"
            text="Companies see demonstrated capability."
          />
          <Proof
            icon={<Star />}
            title="REAL OPPORTUNITY"
            text="Strong performers get visibility and opportunities."
          />
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div>
      <p className="text-[7px] text-[#7892aa]">{label}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <strong className="text-xl font-medium">{value}</strong>
        <span className="text-[8px] font-semibold text-[#f04c81]">
          {change}
        </span>
      </div>
    </div>
  );
}

function Proof({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center px-5 sm:border-r sm:border-[#d7e1eb] sm:last:border-0">
      <span className="mb-3 flex size-10 items-center justify-center rounded-full border-2 border-[#a5caff] text-[#345578]">
        {React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
          size: 18,
        })}
      </span>
      <strong className="text-[10px] font-bold">{title}</strong>
      <p className="mt-2 max-w-[150px] text-[9px] leading-4 text-[#66788d]">
        {text}
      </p>
    </div>
  );
}
