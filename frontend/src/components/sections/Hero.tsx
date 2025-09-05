import "./HeroStripes.css";
import ServicesGrid from "./ServicesGrid";
import { useAnalytics } from "../../hooks/useAnalytics";
import softCircle from "../../assets/images/soft-logo2.webp";

const Hero = () => {
  const { trackCTAClick } = useAnalytics();

  const handleConsultationClick = () => {
    trackCTAClick("Book a Consultation Call", "hero_section", "primary", {
      section: "hero",
      page: "home",
    });
  };

  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-4 sm:pt-20 md:pt-24 lg:pt-28 pb-4 sm:pb-16 md:pb-20 lg:pb-28"
      style={{ background: "var(--bg-hero)" }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden z-0 hidden sm:block">
        <div className="w-[120px] sm:w-[140px] md:w-[180px] h-full relative">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full vl-fade ml-12"
              style={{
                left: `${i * 17}px`,
                width: "8px",
                background: `linear-gradient(to bottom,
            var(--stripe-top) 0%,
            var(--stripe-mid) 50%,
            var(--stripe-bottom) 80%,
            transparent 100%)`,
                animationDuration: `${3 + i * 0.2}s`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 opacity-20 overflow-hidden">
        {/* Orange Blob */}
        <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>

        {/* Cyan Blob */}
        <div className="absolute top-1/4 -right-40 w-[34rem] h-[34rem] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

        {/* Orange-Pink Blob */}
        <div className="absolute bottom-0 left-1/3 w-[34rem] h-[34rem] bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-fit z-10">
        {/* Mobile Layout - Centered overlay with background image */}
        <div className="lg:hidden relative min-h-[70vh] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <img
              src={softCircle}
              alt="Engineering Excellence"
              className="w-full h-auto max-w-[320px] xs:max-w-[380px] sm:max-w-[420px] md:max-w-[460px] opacity-40 scale-110"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 max-w-2xl text-center mx-auto px-4 py-12">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-[800] leading-tight mb-4 sm:mb-6 text-gray-900"
                style={{ textShadow: "0 2px 8px rgba(255,255,255,0.8)" }}>
              <span className="hero-title-cyan">Engineering </span>{" "}
              <span className="hero-title-gray">next best thing</span>{" "}
              <span className="hero-title-orange">for the </span>
              <span className="hero-title-orange">digital world</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 sm:mb-8 leading-relaxed font-bold"
               style={{ textShadow: "0 1px 6px rgba(255,255,255,0.8)" }}>
              Agile in mind, spirit, and speed
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
              <button
                onClick={handleConsultationClick}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-lg font-semibold text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 min-h-[44px] w-auto group shadow-lg"
                style={{
                  background: "var(--brand-cyan)",
                  boxShadow: "0 4px 15px var(--shadow-orange)",
                }}
              >
                <span>Book a Consultation Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12 items-center lg:items-center">
          {/* Content */}
          <div className="max-w-2xl text-left">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[700] leading-tight mb-4 sm:mb-6">
              <span className="hero-title-cyan">Engineering </span>{" "}
              <span className="hero-title-gray">next best thing</span>{" "}
              <span className="hero-title-orange">for the </span>
              <span className="hero-title-orange">digital world</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Agile in mind, spirit, and speed
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-start">
              <button
                onClick={handleConsultationClick}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-lg font-semibold text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 min-h-[44px] w-full sm:w-auto group"
                style={{
                  background: "var(--brand-cyan)",
                  boxShadow: "0 4px 15px var(--shadow-orange)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--brand-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--brand-cyan)";
                }}
              >
                <span>Book a Consultation Call</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:-mt-16 xl:-mt-24 flex justify-end">
            <img
              src={softCircle}
              alt="Engineering Excellence"
              className="relative z-1 w-full h-auto
               max-w-lg
               scale-[1.8]
               origin-center ml-60"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="-mt-4 sm:mt-3 lg:mt-1">
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
