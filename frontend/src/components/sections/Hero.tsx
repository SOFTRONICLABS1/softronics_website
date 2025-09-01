import "./HeroStripes.css";
import ServicesGrid from "./ServicesGrid";
import { useAnalytics } from "../../hooks/useAnalytics";

const Hero = () => {
  const { trackCTAClick } = useAnalytics();

  const handleConsultationClick = () => {
    trackCTAClick('Book a Consultation Call', 'hero_section', 'primary', {
      section: 'hero',
      page: 'home'
    });
  };

  return (
    <section
      className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-28 overflow-hidden"
      style={{ backgroundColor: "#38106F" }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[120px] sm:w-[140px] md:w-[180px] overflow-hidden z-0 hidden sm:block">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full vl-fade ml-12"
            style={{
              left: `${i * 17}px`, // ≈ 15px period from your image
              width: "8px", // wider stripe width
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

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-fit z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium">
                🚀 Engineering Excellence
              </span>
            </div> */}

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[700] leading-tight mb-4 sm:mb-6">
              <span style={{ color: "#D9C3FF" }}>
                Engineering the next best thing for
              </span>{" "}
              <span className="text-white">the</span> <br />
              <span className="text-white">digital world</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Agile in mind, spirit, and speed
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={handleConsultationClick}
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-white hover:opacity-90 min-h-[44px]"
                style={{ backgroundColor: "#EF5366" }}
              >
                <span>Book a Consultation Call</span>
                {/* <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
              </button>

              {/* <button className="group bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-md hover:shadow-lg">
                <FiPlay className="w-5 h-5 text-primary-500" />
                <span>Watch Demo</span>
              </button> */}
            </div>

            {/* Stats */}
            {/* <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">99%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div> */}
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 sm:mt-6 md:mt-4 lg:-mt-16 xl:-mt-24">
            <img
              src="https://www.simform.com/wp-content/uploads/2024/12/hm-hero-image.svg"
              alt="Engineering Excellence"
              className="relative z-10 w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:scale-[1.35] origin-center mx-auto lg:mx-0"
            />
          </div>
        </div>
        <ServicesGrid />
      </div>
    </section>
  );
};

export default Hero;
