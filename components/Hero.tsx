import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Lightbulb,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050c14] text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050c14_0%,rgba(5,12,20,0.96)_20%,rgba(5,12,20,0.72)_60%,rgba(5,12,20,0.2)_72%,rgba(5,12,20,0.08)_100%)] " />

      <div className="mx-auto min-h-[650px] flex flex-col lg:flex-row sm:flex-col max-w-8xl items-center gap-12 px-6 pb-16 pt-32 sm:px-10 lg:gap-8 lg:px-20 lg:pb-24 lg:pt-36">
        <div className="relative z-10 max-w-[840px] w-full">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#7190b4]">
            Real work. Verified ability.
          </p>
          <h1 className="text-5xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-[41px]">
            Your next hire shouldn’t be a gamble.
          </h1>

          <h2 className="bg-gradient-to-r from-[#27a7ff] via-[#617cf8] to-[#ed27db] bg-clip-text pt-2 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-transparent">
            See what candidates can actually do before you hire them.
          </h2>

          <p className="mt-6 max-w-[560px] text-md leading-6 text-[#b2c0ce] sm:text-[20px]">
            Veta helps companies identify strong talent through real-world work.
            Candidates solve company-defined or role-specific problems, creating
            evidence that helps hiring teams make better decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#for-companies"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#9548f5] to-[#6684ff] px-6 py-3 text-xs font-semibold shadow-[0_10px_30px_rgba(111,82,255,0.28)] transition-transform hover:scale-[1.03]"
            >
              Partner With Veta <ArrowRight size={15} />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center rounded-full border border-[#38516b] px-6 py-3 text-xs font-semibold text-[#e1eaf3] transition-colors hover:border-[#819bb8] hover:bg-white/5"
            >
              Explore Simulations
            </Link>
          </div>
          <p className="mb-5 mt-5 flex gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#7190b4]">
            Real Problem <ArrowRight size={15} /> Real Work{" "}
            <ArrowRight size={15} />
            Evidence <ArrowRight size={15} /> Better Hiring
          </p>
        </div>
      </div>

      <div className="border-t border-[#d6e1ec] bg-[#ecedf0] px-6 py-14 text-center text-[#122238] sm:px-10 lg:py-16">
        <h2 className="text-xl font-bold sm:text-2xl">
          Stop asking what people say they can do.
        </h2>
        <p className="mt-1 text-xl font-bold bg-gradient-to-r from-[#198df0] to-[#b43ee5] bg-clip-text text-transparent sm:text-4xl">
          Start seeing what they can demonstrate.
        </p>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-0">
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
      <span className="relative flex h-[76px] size-10 w-[76px] items-center justify-center rounded-full bg-gradient-to-br from-[#d9f4ff] via-[#e8edff] to-[#f5dfff] mb-3">
        <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-white/80 bg-[#f5f9ff]">
          {React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
            size: 30,
          })}
        </div>
      </span>
      <strong className="text-[13px] font-bold">{title}</strong>
      <p className="mt-2 max-w-[150px] text-[12px] leading-4 text-[#66788d]">
        {text}
      </p>
    </div>
  );
}
