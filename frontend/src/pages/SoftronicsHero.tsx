// src/components/SoftronicsHero.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import mixpanel from "mixpanel-browser";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import ContactForm from "../components/sections/ContactForm";
import softCircle from "../../src/assets/images/soft-logo2.webp";

type PillarKey = "delivery" | "solutions" | "expertise";

type Props = {
  mixpanelToken?: string; // optional; falls back to VITE_MIXPANEL_TOKEN
  userId?: string; // optional; if provided we'll identify the user
};

const MIXPANEL_PROJECT = import.meta.env.VITE_MIXPANEL_TOKEN;

const SoftronicsHero: React.FC<Props> = ({ mixpanelToken, userId }) => {
  const navigate = useNavigate();
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
        cta: "Book a Consultation Call",
        page: "Softronics Hero",
        ts: Date.now(),
      });
    }
    navigate("/contact");
  };

  return (
    <main className="bg-hero relative min-h-screen w-full overflow-hidden text-brand-gray-dark">
      {/* ======= HERO ======= */}
      <section className="relative mx-auto max-w-[1200px] px-6 pt-24 pb-20 md:px-10 lg:px-12 lg:pt-28">
        {/* Right artwork placeholder */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[690px] md:block"
        >
          <img
            // src="https://www.simform.com/wp-content/uploads/2024/12/offer-banner-1.webp"
            src={softCircle}
            alt=""
            className="absolute right-[-120px] top-[-40px] h-[720px] w-[720px] object-contain opacity-90"
          />
          <div className="absolute right-[-140px] top-[-60px] h-[780px] w-[780px] rounded-full " />
        </div>

        {/* Copy block */}
        <div className="max-w-xl">
          <h1 className="leading-tight text-[34px] font-semibold tracking-[-0.01em] sm:text-[40px] md:text-[44px] text-brand-gray-dark">
            The Right Engineering
            <br />
            Partner for Modern
            <br />
            Enterprises
          </h1>

          <p className="mt-5 text-[15.5px] leading-7 md:mt-6 text-brand-gray-dark">
            True innovation in engineering stems from seamless collaboration,
            powered by experimentation, and driven by exceptional talent. At{" "}
            <strong className="text-brand-gray-dark">Softronics</strong>, we’ve
            architected our entire approach around these foundational pillars to
            deliver impactful solutions for modern enterprises.
          </p>

          <button
            onClick={handleCTA}
            className="mt-7 inline-flex h-[44px] items-center rounded-md px-5 text-[14px] font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-[1px] text-white"
            type="button"
            style={{
              background: "#4ECCEF",
              boxShadow: "0 4px 15px rgba(78, 204, 239, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3DB8E0";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(78, 204, 239, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#4ECCEF";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(78, 204, 239, 0.3)";
            }}
          >
            Book a Consultation Call
          </button>
        </div>
      </section>

      {/* ======= PILLARS ======= */}
      <section className="relative mx-auto max-w-[1200px] px-6 py-14 md:px-10 lg:px-12 lg:py-16 text-brand-gray-dark">
        <h2 className="mb-6 text-[28px] font-semibold tracking-tight sm:text-[32px] text-brand-gray-dark">
          Softronics’{" "}
          <span className="underline decoration-black/20 underline-offset-2">
            foundational pillars
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[360px_minmax(0,1fr)] md:items-start">
          {/* Left tabs */}
          <div className="rounded-lg p-2 ring-1 ring-black/10 bg-white/50">
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
          <div className="relative rounded-xl bg-white/70 p-6 ring-1 ring-black/10 md:p-8 text-brand-gray-dark">
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
              className="mt-5 inline-block text-sm font-semibold underline decoration-transparent underline-offset-4 transition hover:decoration-current text-brand-gray-dark"
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
      // base
      "group flex w-full items-center justify-between rounded-md px-4 py-4 text-left transition text-brand-gray-dark ring-1 ring-black/10",
      // bg behavior
      active
        ? "service-card-gradient-3 shadow-sm"
        : "bg-transparent hover:service-card-gradient-3",
    ].join(" ")}
  >
    <div>
      <div className="text-[14px] leading-5 text-brand-gray-dark">
        {labelTop}
      </div>
      <div className="mt-0.5 text-[16px] font-semibold leading-6 text-brand-gray-dark">
        {label}
      </div>
    </div>
    <span
      className={[
        "ml-4 inline-grid h-6 w-6 place-items-center rounded-full text-xs transition",
        active ? "bg-white/50" : "bg-black/5 group-hover:bg-white/40",
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
  <div className="text-brand-gray-dark">
    <h3 className="text-[22px] font-semibold leading-7 sm:text-[24px] text-brand-gray-dark">
      {title}
    </h3>
    {body.map((p, i) => (
      <p key={i} className="mt-3 text-[15.5px] leading-7 text-brand-gray-dark">
        {p}
      </p>
    ))}
  </div>
);
