"use client";
import React from "react";

/**
 * ✅ PERFECT Slice Transition (NO SVG / NO gaps)
 * - clipPath never shows white line gaps
 * - just pass current section bg and next section bg
 */
function SliceCut({
  bg = "bg-white",
  nextBg = "bg-slate-900",
  height = "h-44 md:h-36",
  invert = false,
}) {
  return (
    <div
      className={`relative w-full ${height} overflow-hidden`}
      style={{ marginTop: "-2px", marginBottom: "-2px" }} // ✅ removes seam line
    >
      {/* next section background underneath */}
      <div className={`absolute inset-0 ${nextBg}`} />

      {/* top layer with slice */}
      <div
        className={`relative w-full h-full ${bg}`}
        style={{
          clipPath: invert
            ? "polygon(0 0, 100% 0, 100% 100%, 0 55%)"
            : "polygon(0 0, 100% 0, 100% 45%, 0 100%)",
        }}
      />
    </div>
  );
}


export default function HomeSections() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-slate-900">
      {/* ===================== HERO ===================== */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
                WorldSoft • Technical Services
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                Transforming{" "}
                <span className="text-slate-500">Technical Services.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Modern solutions, faster delivery, and powerful support to keep
                your business running smoothly — with premium design and
                performance.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-[1px] hover:bg-slate-800">
                  Get Started
                </button>
                <button className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-[1px] hover:bg-slate-50">
                  View Pricing
                </button>
              </div>

              {/* quick cards */}
              <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
                {[
                  { k: "Fast", v: "Delivery" },
                  { k: "24/7", v: "Support" },
                  { k: "Secure", v: "Systems" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                  >
                    <p className="text-base font-extrabold">{item.k}</p>
                    <p className="text-[11px] text-slate-500">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* right */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-slate-200 via-white to-slate-100 blur-2xl" />
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-700">
                    System Status
                  </p>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Online
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    { label: "Servers", value: "99.98%" },
                    { label: "Response Time", value: "1.2s avg" },
                    { label: "Active Clients", value: "1,240+" },
                  ].map((x) => (
                    <div
                      key={x.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <p className="text-[11px] font-semibold text-slate-500">
                        {x.label}
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-slate-900">
                        {x.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
                  <p className="text-sm font-semibold">Need help instantly?</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Priority support for Professional & Expert plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slice to SERVICES */}
      <SliceCut bg="bg-white" nextBg="bg-slate-900" />

      {/* ===================== SERVICES ===================== */}
      <section className="bg-slate-900 py-14 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              End-to-end technical solutions that scale with your business.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Website Development",
                desc: "High-performance websites with modern UI/UX.",
              },
              {
                title: "Technical Support",
                desc: "On-demand assistance with priority care.",
              },
              {
                title: "System Management",
                desc: "Secure and scalable infrastructure setup.",
              },
              {
                title: "Maintenance",
                desc: "Monthly support packages and monitoring.",
              },
              {
                title: "Consultation",
                desc: "Project planning and technical decisions.",
              },
              {
                title: "Automation",
                desc: "AI + automation to reduce manual work.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-lg font-bold">{card.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slice to PRICING */}
      <SliceCut bg="bg-slate-900" nextBg="bg-white" invert />

      {/* ===================== PRICING ===================== */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Pricing</h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Choose a plan that fits your needs. Upgrade anytime.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Beginner",
                price: "$15",
                tag: "Starter for small teams",
                features: ["Basic support", "Website setup", "Monthly updates"],
                highlight: false,
              },
              {
                name: "Professional",
                price: "$25",
                tag: "Best for growing businesses",
                features: [
                  "Priority support",
                  "Advanced maintenance",
                  "Performance optimization",
                ],
                highlight: true,
              },
              {
                name: "Expert",
                price: "$45",
                tag: "Enterprise level service",
                features: [
                  "24/7 support",
                  "Automation setup",
                  "Dedicated consultation",
                ],
                highlight: false,
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-[2rem] border p-7 shadow-sm transition hover:-translate-y-1 ${
                  p.highlight
                    ? "border-slate-900 bg-slate-900 text-white shadow-xl shadow-slate-900/15"
                    : "border-slate-200 bg-white"
                }`}
              >
                {p.highlight && (
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="mt-4 text-xl font-extrabold">{p.name}</h3>

                <p
                  className={`mt-1 text-sm ${
                    p.highlight ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {p.tag}
                </p>

                <p className="mt-6 text-4xl font-extrabold">
                  {p.price}
                  <span
                    className={`text-base font-semibold ${
                      p.highlight ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    /mo
                  </span>
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          p.highlight ? "bg-white" : "bg-slate-900"
                        }`}
                      />
                      <span
                        className={
                          p.highlight ? "text-slate-200" : "text-slate-700"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slice to ABOUT */}
      <SliceCut bg="bg-white" nextBg="bg-slate-900" />

      {/* ===================== ABOUT ===================== */}
      <section className="bg-slate-900 py-14 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">About Us</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                We provide technical services with a focus on premium quality,
                reliable delivery, and modern user experience. Our goal is to
                help brands move faster with confidence.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { title: "Trusted Service", value: "4+ Years" },
                  { title: "Projects Completed", value: "150+" },
                  { title: "Client Satisfaction", value: "98%" },
                  { title: "Support", value: "24/7" },
                ].map((kpi) => (
                  <div
                    key={kpi.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-[11px] font-semibold text-slate-300">
                      {kpi.title}
                    </p>
                    <p className="mt-1 text-2xl font-extrabold">{kpi.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold text-slate-200">
                  “We don’t just build — we maintain, support, and scale.”
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  The team works closely with you to ensure clean delivery and
                  smooth performance.
                </p>

                <div className="mt-6 rounded-2xl bg-white/10 p-5">
                  <p className="text-xs font-semibold text-slate-200">
                    Why clients love us
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Premium UI/UX, on-time delivery, and responsive support —
                    with modern tech stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slice to CONTACT */}
      <SliceCut bg="bg-slate-900" nextBg="bg-white" invert />

      {/* ===================== CONTACT ===================== */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Tell us about your requirements. We’ll get back within 24 hours.
              </p>

              <div className="mt-8 space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  support@worldsoft.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +91 98765 43210
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Tamil Nadu,
                  India
                </p>
              </div>
            </div>

            <form className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="grid gap-4">
                <input
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-900"
                  placeholder="Your Name"
                />
                <input
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-900"
                  placeholder="Email Address"
                />
                <textarea
                  rows={5}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                  placeholder="Message"
                />
                <button
                  type="button"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-[1px] hover:bg-slate-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
