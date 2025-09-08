import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useAnalytics } from "../../hooks/useAnalytics";
import type { IndustryServiceCard } from "../../types/IndustryPage";

interface IndustryServicesGridProps {
  title: string;
  subtitle?: string;
  cards: IndustryServiceCard[];
}

const IndustryServicesGrid: React.FC<IndustryServicesGridProps> = ({
  title,
  subtitle,
  cards
}) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-brand-cyan">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => (
            <IndustryServiceCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryServiceCard: React.FC<{ card: IndustryServiceCard; index: number }> = ({
  card,
  index,
}) => {
  const { title, subtitle, description, from = "#66e0ff", to = "#66e0ff", pattern = "rings-right", accentColor = "#4DC8E8" } = card;
  const { trackServiceInteraction } = useAnalytics();
  const [isHovered, setIsHovered] = React.useState(false);

  const getGradientStyle = () => {
    return "linear-gradient(135deg, #66e0ff 0%, #66e0ff 100%)";
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
    trackServiceInteraction(subtitle, "hover", "industry_services_grid", {
      section: "industry_services",
      service_title: title,
    });
  };

  const handleServiceLeave = () => {
    setIsHovered(false);
  };

  const handleServiceClick = () => {
    trackServiceInteraction(subtitle, "click", "industry_services_grid", {
      section: "industry_services",
      service_title: title,
    });
  };

  return (
    <article
      className="rounded-xl p-4 sm:p-6 md:p-8 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group relative overflow-hidden"
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

      <div className="relative z-10">
        <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight mb-3">
          {title}
        </h3>
        <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-4 sm:mt-6 md:mt-8 flex items-center justify-between">
        <p className="text-white/95 text-xs sm:text-sm md:text-[15px]">
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

type Pattern = "rings-right" | "rings-right-strong" | "quads" | "diagonals";

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

export default IndustryServicesGrid;