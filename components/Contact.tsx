import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@veta.app",
    href: "mailto:hello@veta.app",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 (0) 8162941550",
    href: "tel:+2348162941550",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#061121] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-110px] h-[360px] w-[360px] rounded-full bg-[#2678d8]/12 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-90px] h-[420px] w-[420px] rounded-full bg-[#8156ef]/12 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7ea2d6] sm:text-[11px]">
            CONTACT
          </p>

          <h2 className="max-w-[560px] text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[46px]">
            Let&apos;s build a stronger signal for talent and opportunity.
          </h2>

          <p className="mt-5 max-w-[520px] text-[13px] leading-[1.7] text-[#8ea2ba] sm:text-[14px]">
            Whether you are a professional looking to prove your capability or a company trying to identify the right people, Veta can help you start the conversation.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {contactMethods.map(({ icon: Icon, label, value, href }) => (
              <Link
                key={label}
                href={href}
                className="group rounded-[14px] border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#5d85db]/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d9f4ff] via-[#ecf1ff] to-[#f4ddff] text-[#355a9c]">
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#7f9bbd]">
                  {label}
                </p>

                <p className="mt-2 text-[11px] font-medium text-white/90 sm:text-[12px]">
                  {value}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[22px] border border-white/10 bg-[#0a1a2d]/90 p-6 shadow-[0_25px_80px_rgba(2,9,20,0.45)] backdrop-blur-sm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7ea2d6]">
                  Send a message
                </p>
                <h3 className="mt-2 text-[22px] font-semibold text-white">
                  Start a conversation
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#2f87f7] to-[#7a5fe8] text-white shadow-[0_12px_30px_rgba(89,122,239,0.35)]">
                <MessageSquareText size={18} strokeWidth={1.8} />
              </div>
            </div>

            <form className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-left text-[11px] text-[#9eb3ca]">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f223b] px-3.5 py-3 text-[12px] text-white placeholder:text-[#7088a5] outline-none transition-colors focus:border-[#7aa8ff]"
                  />
                </label>

                <label className="block text-left text-[11px] text-[#9eb3ca]">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f223b] px-3.5 py-3 text-[12px] text-white placeholder:text-[#7088a5] outline-none transition-colors focus:border-[#7aa8ff]"
                  />
                </label>
              </div>

              <label className="block text-left text-[11px] text-[#9eb3ca]">
                Company or role
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f223b] px-3.5 py-3 text-[12px] text-white placeholder:text-[#7088a5] outline-none transition-colors focus:border-[#7aa8ff]"
                />
              </label>

              <label className="block text-left text-[11px] text-[#9eb3ca]">
                Message
                <textarea
                  rows={5}
                  placeholder="Tell us about your goals, team, or challenge."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0f223b] px-3.5 py-3 text-[12px] text-white placeholder:text-[#7088a5] outline-none transition-colors focus:border-[#7aa8ff]"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#358cf3] to-[#7a65e9] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_28px_rgba(76,109,228,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(76,109,228,0.35)]"
              >
                Send inquiry
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
