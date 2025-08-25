import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type Pattern = "rings-right" | "rings-right-strong" | "quads" | "diagonals";

interface CardSpec {
  title: string;
  subtitle: string;
  from: string;
  to: string;
  pattern: Pattern;
}

const CARDS: CardSpec[] = [
  {
    title: "Accelerate product roadmaps with a Co-Engineering CoE",
    subtitle: "Digital Product Engineering",
    from: "#6C43D9",
    to: "#A174F6",
    pattern: "rings-right",
  },
  {
    title: "Adopt, optimize, modernize, and build on the cloud",
    subtitle: "Cloud and DevOps Engineering",
    from: "#6C43D9",
    to: "#9E6EF3",
    pattern: "quads",
  },
  {
    title: "Build AI-ready data and analytics platforms",
    subtitle: "Data Engineering",
    from: "#8E5BF0",
    to: "#B887FF",
    pattern: "rings-right-strong",
  },
  {
    title: "Innovate with Gen-AI and custom ML development",
    subtitle: "AI/ML Engineering",
    from: "#6C43D9",
    to: "#9E70F4",
    pattern: "diagonals",
  },
  {
    title: "Transform experiences and applications with UX-led engineering",
    subtitle: "Digital and Experience Engineering",
    from: "#744BDE",
    to: "#A478FF",
    pattern: "rings-right",
  },
  {
    title: "Co-innovate, optimize delivery, and scale with product thinking",
    subtitle: "Product & Delivery",
    from: "#6C43D9",
    to: "#9E70F4",
    pattern: "quads",
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="relative py-36">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-3xl md:text-4xl lg:text-[32px] font-semibold leading-tight max-w-5xl mb-10">
          We consult, engineer, and design technology solutions to address
          complex business challenges with precision.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARDS.map((c, i) => (
            <ServiceCard key={i} spec={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

const ServiceCard: React.FC<{ spec: CardSpec }> = ({ spec }) => {
  const { title, subtitle, from, to, pattern } = spec;

  const bgStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
  };

  return (
    <article
      className="relative overflow-hidden rounded-xl p-8 min-h-[220px] flex flex-col justify-between
                 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      style={bgStyle}
    >
      <Pattern variant={pattern} />

      <h3 className="relative z-10 text-white text-xl md:text-2xl font-semibold">
        {title}
      </h3>

      <div className="relative z-10 mt-8 flex items-center justify-between">
        <p className="text-white/85 text-sm md:text-[15px]">{subtitle}</p>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 backdrop-blur-[1px] border border-white/20">
          <FiArrowUpRight className="text-white text-[16px]" />
        </span>
      </div>
    </article>
  );
};

const Pattern: React.FC<{ variant: Pattern }> = ({ variant }) => {
  if (variant === "rings-right" || variant === "rings-right-strong") {
    return (
      <>
        <div
          className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 360,
            height: 360,
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 48%, rgba(0,0,0,0) 52%)",
            filter: variant === "rings-right-strong" ? "brightness(1.05)" : "",
            opacity: variant === "rings-right-strong" ? 0.9 : 0.75,
            mixBlendMode: "soft-light" as React.CSSProperties["mixBlendMode"],
          }}
        />
        <div
          className="absolute -right-[72px] top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 220,
            height: 220,
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 58%, rgba(0,0,0,0) 62%)",
            opacity: 0.9,
            mixBlendMode: "soft-light" as React.CSSProperties["mixBlendMode"],
          }}
        />
        <div
          className="absolute right-6 top-0 h-full w-[12px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.20), rgba(255,255,255,0.10), rgba(255,255,255,0.20))",
            opacity: 0.32,
            borderRadius: 4,
          }}
        />
      </>
    );
  }

  if (variant === "quads") {
    return (
      <>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.00) 55%)",
            mixBlendMode: "soft-light" as React.CSSProperties["mixBlendMode"],
          }}
        />
        <div
          className="absolute right-[-40px] top-[-30px] w-[240px] h-[240px] rounded-lg rotate-45 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.00))",
            filter: "blur(0.2px)",
            opacity: 0.35,
          }}
        />
      </>
    );
  }

  if (variant === "diagonals") {
    return (
      <>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(225deg, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.00) 60%)",
            mixBlendMode: "soft-light" as React.CSSProperties["mixBlendMode"],
          }}
        />
        <div
          className="absolute -right-6 -bottom-10 w-[220px] h-[220px] rounded-full pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.10) 56%, rgba(0,0,0,0) 60%)",
            opacity: 0.8,
            mixBlendMode: "soft-light" as React.CSSProperties["mixBlendMode"],
          }}
        />
      </>
    );
  }

  return null;
};
