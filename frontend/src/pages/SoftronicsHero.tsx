// src/components/SoftronicsHero.tsx
import React, { useEffect, useMemo, useState } from "react";
import mixpanel from "mixpanel-browser";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import ContactForm from "../components/sections/ContactForm";

type PillarKey = "delivery" | "solutions" | "expertise";

type Props = {
  mixpanelToken?: string; // optional; falls back to VITE_MIXPANEL_TOKEN
  userId?: string; // optional; if provided we'll identify the user
};

const MIXPANEL_PROJECT = import.meta.env.VITE_MIXPANEL_TOKEN;

const SoftronicsHero: React.FC<Props> = ({ mixpanelToken, userId }) => {
  const token = useMemo(
    () => mixpanelToken || MIXPANEL_PROJECT,
    [mixpanelToken]
  );

  // ---------- Mixpanel init ----------
  useEffect(() => {
    if (!token) return;
    // avoid re-init hot reload loops
    // @ts-ignore
    if (!(window as any).__mp_inited__) {
      mixpanel.init(token, { debug: import.meta.env.DEV });
      // @ts-ignore
      (window as any).__mp_inited__ = true;
    }
    if (userId) mixpanel.identify(userId);

    mixpanel.track("Page View", {
      page: "Softronics Hero",
      section: "hero",
      ts: Date.now(),
    });
  }, [token, userId]);

  // ---------- UI state ----------
  const [active, setActive] = useState<PillarKey>("delivery");

  const handleTab = (key: PillarKey) => {
    setActive(key);
    if (token) {
      mixpanel.track("Pillar Tab Clicked", {
        tab: key,
        page: "Softronics Hero",
        ts: Date.now(),
      });
    }
  };

  const handleCTA = () => {
    if (token) {
      mixpanel.track("CTA Click", {
        cta: "Get Free Consultation",
        page: "Softronics Hero",
        ts: Date.now(),
      });
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#2b0054] text-white">
      {/* ======= HERO ======= */}
      <section className="relative mx-auto max-w-[1200px] px-6 pt-24 pb-20 md:px-10 lg:px-12 lg:pt-28">
        {/* Right artwork placeholder (you will replace src) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[690px] md:block"
        >
          <img
            src="https://www.simform.com/wp-content/uploads/2024/12/offer-banner-1.webp"
            alt=""
            className="absolute right-[-120px] top-[-40px] h-[720px] w-[720px] object-contain opacity-90"
          />
          <div className="absolute right-[-140px] top-[-60px] h-[780px] w-[780px] rounded-full bg-[radial-gradient(closest-side,_rgba(178,119,255,0.22),_rgba(43,0,84,0))]" />
        </div>

        {/* Copy block */}
        <div className="max-w-xl">
          <h1 className="leading-tight text-[34px] font-semibold tracking-[-0.01em] sm:text-[40px] md:text-[44px]">
            The Right Engineering
            <br />
            Partner for Modern
            <br />
            Enterprises
          </h1>

          <p className="mt-5 text-[15.5px] leading-7 text-[#E7D9FF]/90 md:mt-6">
            True innovation in engineering stems from seamless collaboration,
            powered by experimentation, and driven by exceptional talent. At{" "}
            <strong>Softronics</strong>, we’ve architected our entire approach
            around these foundational pillars to deliver impactful solutions for
            modern enterprises.
          </p>

          <button
            onClick={handleCTA}
            className="mt-7 inline-flex h-[44px] items-center rounded-md bg-[#ff6a6a] px-5 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(255,106,106,0.35)] transition hover:brightness-[1.05] active:translate-y-[1px]"
            type="button"
          >
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* Divider */}
      {/* <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-12">
        <div className="h-px w-full bg-white/10" />
      </div> */}

      {/* ======= PILLARS ======= */}
      <section className="relative mx-auto max-w-[1200px] px-6 py-14 md:px-10 lg:px-12 lg:py-16">
        <h2 className="mb-6 text-[28px] font-semibold tracking-tight sm:text-[32px]">
          Softronics’{" "}
          <span className="underline decoration-white/30">
            foundational pillars
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[360px_minmax(0,1fr)] md:items-start">
          {/* Left tabs */}
          <div className="rounded-lg bg_white_5 p-2 ring-1 ring-white/10 [background-color:rgba(255,255,255,0.05)]">
            <TabButton
              labelTop="The right delivery model:"
              label="Co-engineering"
              active={active === "delivery"}
              onClick={() => handleTab("delivery")}
            />
            <TabButton
              labelTop="The right solutions:"
              label="Innovation lab"
              active={active === "solutions"}
              onClick={() => handleTab("solutions")}
            />
            <TabButton
              labelTop="The right expertise:"
              label="TalentOps"
              active={active === "expertise"}
              onClick={() => handleTab("expertise")}
            />
          </div>

          {/* Right panel */}
          <div className="relative rounded-xl bg-white/5 p-6 ring-1 ring-white/10 md:p-8">
            {active === "delivery" && (
              <Panel
                title="The right delivery model: Co-engineering"
                body={[
                  "Softronics’ co-engineering model accelerates product development by integrating our expert teams with yours for smooth collaboration and rapid execution.",
                  "With Core-Flexi resourcing, we scale engineering capabilities to match your needs, driving speed, flexibility, and ROI.",
                ]}
              />
            )}
            {active === "solutions" && (
              <Panel
                title="The right solutions: Innovation lab"
                body={[
                  "Our Innovation Lab turns ideas into validated prototypes through structured experimentation, rapid PoCs, and measurable pilots.",
                  "From architecture spikes to sandboxed AI experiments, we help you ship what matters—faster.",
                ]}
              />
            )}
            {active === "expertise" && (
              <Panel
                title="The right expertise: TalentOps"
                body={[
                  "TalentOps aligns seniority mix, domain knowledge, and delivery discipline with your roadmap using proven practices and quality gates.",
                  "You get predictable delivery and the flexibility to scale without compromising outcomes.",
                ]}
              />
            )}

            <a
              href="#"
              className="mt-5 inline-block text-sm font-semibold text-[#D9C3FF] underline decoration-transparent underline-offset-4 transition hover:decoration-[#D9C3FF]"
              onClick={() =>
                token &&
                mixpanel.track("Learn More Click", {
                  page: "Softronics Hero",
                  tab: active,
                  ts: Date.now(),
                })
              }
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <Services />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default SoftronicsHero;

/* ---------- subcomponents ---------- */

const TabButton: React.FC<{
  labelTop: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ labelTop, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={[
      "group flex w-full items-center justify-between rounded-md px-4 py-4 text-left transition",
      active
        ? "bg-[#3a0a73] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
        : "hover:bg-white/5 text-white/90",
    ].join(" ")}
  >
    <div>
      <div className="text-[14px] leading-5 text-white/80">{labelTop}</div>
      <div className="mt-0.5 text-[16px] font-semibold leading-6">{label}</div>
    </div>
    <span
      className={[
        "ml-4 inline-grid h-6 w-6 place-items-center rounded-full text-xs transition",
        active ? "bg-white/20" : "bg-white/10 group-hover:bg-white/15",
      ].join(" ")}
    >
      ▸
    </span>
  </button>
);

const Panel: React.FC<{ title: string; body: string[] }> = ({
  title,
  body,
}) => (
  <div>
    <h3 className="text-[22px] font-semibold leading-7 sm:text-[24px]">
      {title}
    </h3>
    {body.map((p, i) => (
      <p key={i} className="mt-3 text-[15.5px] leading-7 text-[#E7D9FF]/90">
        {p}
      </p>
    ))}
  </div>
);
