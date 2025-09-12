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
            Your Trusted Technology
            <br />
            Partner for Digital
            <br />
            Innovation
          </h1>

          <p className="mt-5 text-[15.5px] leading-7 md:mt-6 text-brand-gray-dark">
            We believe in engineering solutions that matter. Our passion for technology
            combined with deep industry expertise allows us to create innovative solutions
            that drive your business forward. At{" "}
            <strong className="text-brand-gray-dark">SofTronicLabs</strong>, we transform
            complex challenges into elegant, scalable solutions.
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
          Why Choose{" "}
          <span className="underline decoration-black/20 underline-offset-2">
            SofTronicLabs?
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[360px_minmax(0,1fr)] md:items-start">
          {/* Left tabs */}
          <div className="rounded-lg p-2 ring-1 ring-black/10">
            <TabButton
              labelTop="Our Approach:"
              label="Listen, Discuss, Advise & Develop"
              active={active === "delivery"}
              onClick={() => handleTab("delivery")}
            />
            <TabButton
              labelTop="Our Products:"
              label="Feature-rich Professional Solutions"
              active={active === "solutions"}
              onClick={() => handleTab("solutions")}
            />
            <TabButton
              labelTop="Our Philosophy:"
              label="Latest Technologies & Learning"
              active={active === "expertise"}
              onClick={() => handleTab("expertise")}
            />
          </div>

          {/* Right panel */}
          <div className="relative rounded-xl p-6 ring-1 ring-black/10 md:p-8 text-brand-gray-dark">
            {active === "delivery" && (
              <Panel
                title="We listen, we discuss, we advise and develop"
                body={[
                  "At SofTronicLabs we have a talent pool that has a great sense of understanding of technology, this enables us to understand the pulse of our clients for predictive solution design and development. We are highly proactive in advising the right solution to meet a win-win situation for every stakeholder achieving a business goal.",
                  "We have an Industrial proven standard process of development for conceptualizing the end results at ultra-high speed. We believe in open-source technology and are also passionate about giving more than we take as knowledge.",
                ]}
              />
            )}
            {active === "solutions" && (
              <Panel
                title="Offering feature-rich, professional products"
                body={[
                  "Our offerings provide feature-rich and professional products as we anticipate every engineering aspect during the development process, though it may be functional, performance, or security requirements. We believe in modern test technologies for Continuous Integration and Continuous Delivery (CICD) of the product with high ROI on investment in testing services.",
                  "We are true believers in the Agile methodology of the development process and are very agile to adapt ourselves to the changing world.",
                ]}
              />
            )}
            {active === "expertise" && (
              <Panel
                title="We love to learn and use the latest technologies"
                body={[
                  "We understand that learning is the only tool that will equip every individual or organization to adapt themselves to a rapidly changing world. In the aspect of learning, we are self-motivated to learn new technologies and provide the latest technology solutions to our clients.",
                  "We are focused on identifying advanced engineered solutions provided by the open-source community and believe in saving the efforts of reinventing the wheel.",
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
