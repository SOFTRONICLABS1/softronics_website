import "./HeroStripes.css";
import ServicesGrid from "./ServicesGrid";

const Hero = () => {
  return (
    <section
      className="relative pt-24 lg:pt-28 pb-20 lg:pb-28 overflow-hidden"
      style={{ backgroundColor: "#38106F" }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[180px] overflow-hidden z-0 hidden md:block">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium">
                🚀 Engineering Excellence
              </span>
            </div> */}

            <h1 className="text-4xl md:text-5xl lg:text-[48px] font-[700] leading-tight mb-6">
              <span style={{ color: "#D9C3FF" }}>
                Engineering the next best thing for
              </span>{" "}
              <span className="text-white">the</span> <br />
              <span className="text-white">digital world</span>
            </h1>

            <p className="text-[22px] text-gray-300 mb-8 leading-relaxed">
              Agile in mind, spirit, and speed
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-white hover:opacity-90"
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
          <div className="relative lg:-mt-16 xl:-mt-24">
            <img
              src="https://www.simform.com/wp-content/uploads/2024/12/hm-hero-image.svg"
              alt="Simform Engineering Excellence"
              className="relative z-10 lg:scale-[1.35] origin-center"
            />
          </div>
        </div>
        <ServicesGrid />
      </div>
    </section>
  );
};

export default Hero;
