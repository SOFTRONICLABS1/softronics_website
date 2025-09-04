import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useAnalytics } from "../../hooks/useAnalytics";

type Pattern = "rings-right" | "rings-right-strong" | "quads" | "diagonals";

interface CardSpec {
  title: string;
  subtitle: string;
  from: string;
  to: string;
  pattern: Pattern;
  accentColor?: string; // For hover effects
}

const CARDS: CardSpec[] = [
  {
    title: "Accelerate product roadmaps with a Co-Engineering CoE",
    subtitle: "Digital Product Engineering",
    from: "#66e0ff",
    to: "#ccf7ff",
    pattern: "rings-right",
    accentColor: "#00bcd4",
  },
  {
    title: "Adopt, optimize, modernize, and build on the cloud",
    subtitle: "Cloud and DevOps Engineering",
    from: "#66e0ff",
    to: "#99ecff",
    pattern: "quads",
    accentColor: "#0099cc",
  },
  {
    title: "Build AI-ready data and analytics platforms",
    subtitle: "Data Engineering",
    from: "#66e0ff",
    to: "#b3f3ff",
    pattern: "rings-right-strong",
    accentColor: "#33d6ff",
  },
  {
    title: "Innovate with Gen-AI and custom ML development",
    subtitle: "AI/ML Engineering",
    from: "#66e0ff",
    to: "#ccf7ff",
    pattern: "diagonals",
    accentColor: "#00bcd4",
  },
  {
    title: "Transform experiences and applications with UX-led engineering",
    subtitle: "Digital and Experience Engineering",
    from: "#66e0ff",
    to: "#99ecff",
    pattern: "rings-right",
    accentColor: "#00bcd4",
  },
  {
    title: "Co-innovate, optimize delivery, and scale with product thinking",
    subtitle: "Product & Delivery",
    from: "#66e0ff",
    to: "#ccf7ff",
    pattern: "quads",
    accentColor: "#33d6ff",
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] font-semibold leading-tight max-w-5xl mb-6 sm:mb-8 md:mb-10">
          We consult, engineer, and design technology solutions to address
          complex business challenges with precision.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {CARDS.map((c, i) => (
            <ServiceCard key={i} spec={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

const ServiceCard: React.FC<{ spec: CardSpec; index: number }> = ({
  spec,
  index,
}) => {
  const { title, subtitle, from, to, pattern, accentColor } = spec;
  const { trackServiceInteraction } = useAnalytics();
  const [isHovered, setIsHovered] = React.useState(false);

  // Get the appropriate gradient style based on the from/to colors
  const getGradientStyle = () => {
    if (from === "#66e0ff" && to === "#ccf7ff")
      return "linear-gradient(135deg, #66e0ff 0%, #ccf7ff 100%)";
    if (from === "#66e0ff" && to === "#99ecff")
      return "linear-gradient(135deg, #66e0ff 0%, #99ecff 100%)";
    if (from === "#66e0ff" && to === "#b3f3ff")
      return "linear-gradient(135deg, #66e0ff 0%, #b3f3ff 100%)";
    return "linear-gradient(135deg, #66e0ff 0%, #ccf7ff 100%)"; // default cyan
  };

  const getShadowStyle = () => {
    return isHovered
      ? index % 2 === 0
        ? "0 20px 40px rgba(255, 165, 0, 0.25)"
        : "0 20px 40px rgba(77, 200, 232, 0.25)"
      : "0 10px 30px rgba(0, 0, 0, 0.1)";
  };

  const handleServiceHover = () => {
    setIsHovered(true);
    trackServiceInteraction(subtitle, "hover", "services_grid", {
      section: "services",
      service_title: title,
    });
  };

  const handleServiceLeave = () => {
    setIsHovered(false);
  };

  const handleServiceClick = () => {
    trackServiceInteraction(subtitle, "click", "services_grid", {
      section: "services",
      service_title: title,
    });
  };

  // All cards now use orange gradients, so no dark cards
  const isDarkCard = false;

  return (
    <article
      className="rounded-xl p-4 sm:p-6 md:p-8 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group relative overflow-hidden"
      style={{
        background: getGradientStyle(),
        boxShadow: getShadowStyle(),
      }}
      onMouseEnter={handleServiceHover}
      onMouseLeave={handleServiceLeave}
      onClick={handleServiceClick}
    >
      <Pattern variant={pattern} accentColor={accentColor} />

      {/* Hover overlay effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor}20 0%, transparent 70%)`,
        }}
      />

      <h3 className="relative z-10 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
        {title}
      </h3>

      <div className="relative z-10 mt-4 sm:mt-6 md:mt-8 flex items-center justify-between">
        <p
          className={`${
            isDarkCard ? "text-white/90" : "text-white/95"
          } text-xs sm:text-sm md:text-[15px]`}
        >
          {subtitle}
        </p>
        <span
          className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 border"
          style={{
            backgroundColor: isHovered
              ? `${accentColor}30`
              : "rgba(255, 255, 255, 0.15)",
            borderColor: isHovered ? accentColor : "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(1px)",
          }}
        >
          <FiArrowUpRight className="text-white text-sm sm:text-[16px]" />
        </span>
      </div>
    </article>
  );
};

const Pattern: React.FC<{ variant: Pattern; accentColor?: string }> = ({
  variant,
  accentColor = "#4DC8E8",
}) => {
  if (variant === "rings-right" || variant === "rings-right-strong") {
    return (
      <>
        <div
          className="absolute -right-8 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 280,
            height: 280,
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 48%, rgba(0,0,0,0) 52%)",
            filter: variant === "rings-right-strong" ? "brightness(1.05)" : "",
            opacity: variant === "rings-right-strong" ? 0.9 : 0.75,
            mixBlendMode: "soft-light" as React.CSSProperties["mixBlendMode"],
          }}
        />
        <div
          className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 180,
            height: 180,
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 58%, rgba(0,0,0,0) 62%)",
            opacity: 0.9,
            mixBlendMode: "soft-light" as React.CSSProperties["mixBlendMode"],
          }}
        />
        <div
          className="absolute right-6 top-0 h-full w-[12px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to bottom, ${accentColor}40, ${accentColor}20, ${accentColor}40)`,
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
          className="absolute right-[-20px] top-[-15px] w-[180px] h-[180px] rounded-lg rotate-45 pointer-events-none group-hover:rotate-[50deg] transition-transform duration-500"
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
          className="absolute -right-4 -bottom-8 w-[160px] h-[160px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500"
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
