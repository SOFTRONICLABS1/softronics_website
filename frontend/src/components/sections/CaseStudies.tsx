import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import "./HeroStripes.css";

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const caseStudies = [
    {
      id: 1,
      tags: ["Cloud and DevOps engineering", "Digital product engineering"],
      title:
        "Semiconductor Manufacturer Boosts Data Accuracy 80% with Automation",
      description:
        "Build an enterprise application that eliminates hours of manual spreadsheet work. Solution processes thousands of daily orders through various sales channels and gives real-time visibility of inventory levels.",
      highlight:
        "Reduced the order fulfillment lead time by 70% and got visibility of inventory levels across 200+ fulfillment partners having 5000+ product SKUs.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      tags: ["AI/ML Solutions", "Data Analytics"],
      title:
        "Retail Giant Transforms Customer Experience with AI-Powered Insights",
      description:
        "Implemented advanced machine learning models to predict customer behavior and personalize shopping experiences across all digital touchpoints.",
      highlight:
        "Increased customer retention by 45% and boosted average order value by 35% through personalized recommendations.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      tags: ["Mobile Development", "UX/UI Design"],
      title: "Healthcare Platform Revolutionizes Patient Care Management",
      description:
        "Created a comprehensive mobile solution connecting patients, doctors, and healthcare providers for seamless care coordination.",
      highlight:
        "Achieved 90% patient satisfaction score and reduced appointment no-shows by 60% with automated reminders.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
  ];

  // Auto-scroll functions
  const startAutoScroll = () => {
    if (window.innerWidth < 1024) { // Only on screens smaller than lg
      autoScrollRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
      }, 4000); // Auto-scroll every 4 seconds
    }
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const nextSlide = () => {
    stopAutoScroll(); // Stop auto-scroll on manual interaction
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    stopAutoScroll(); // Stop auto-scroll on manual interaction
    setCurrentSlide(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const goToSlide = (index: number) => {
    stopAutoScroll(); // Stop auto-scroll on manual interaction
    setCurrentSlide(index);
  };

  // Set up auto-scroll effect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        startAutoScroll();
      } else {
        stopAutoScroll();
      }
    };

    // Initial setup
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      stopAutoScroll();
    };
  }, []);

  // Restart auto-scroll if component is hovered out on mobile
  const handleMouseEnter = () => {
    if (window.innerWidth < 1024) {
      stopAutoScroll();
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 1024) {
      startAutoScroll();
    }
  };

  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden" style={{
        background: "linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 50%, #F0F0F0 100%)",
      }}>
      {/* Animated Vertical Stripes - Left Side */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[120px] sm:w-[140px] md:w-[180px] overflow-hidden z-0 hidden sm:block">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full vl-fade"
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

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Case Studies
          </h2>
          <p className="text-xl sm:text-base md:text-lg text-[#171717] max-w-4xl font-light">
            Discover the many ways in which our clients have embraced the
            benefits of the Softroniclabs way of engineering.
          </p>
        </div>

        {/* Carousel Container with External Navigation */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows - Absolutely positioned */}
          <div className="absolute inset-y-0 left-0 right-0 items-center justify-between pointer-events-none z-10 hidden lg:flex">
            <button
              onClick={prevSlide}
              className="pointer-events-auto flex items-center justify-center rounded-lg w-8 h-6 sm:w-9 sm:h-7 md:w-10 md:h-8 text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 min-h-[24px] min-w-[32px] ml-[-40px] sm:ml-[-60px]"
              style={{ backgroundColor: "#FFA500" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFB84D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFA500";
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
            </button>
            
            <button
              onClick={nextSlide}
              className="pointer-events-auto flex items-center justify-center rounded-lg w-8 h-6 sm:w-9 sm:h-7 md:w-10 md:h-8 text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 min-h-[24px] min-w-[32px] mr-[-40px] sm:mr-[-60px]"
              style={{ backgroundColor: "#FFA500" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFB84D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFA500";
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
            </button>
          </div>

          {/* Card */}
          <div
            className="overflow-hidden shadow-2xl rounded w-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 247, 232, 0.95) 0%, rgba(236, 253, 255, 0.95) 100%)",
            }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 mb-2 sm:mb-3 md:mb-3 lg:mb-4">
                  {caseStudies[currentSlide].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 lg:px-3.5 py-1 sm:py-1.5 bg-white/90 text-orange-600 rounded-full text-[10px] sm:text-xs md:text-sm font-medium border border-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-3 leading-tight">
                  {caseStudies[currentSlide].title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-3 sm:mb-4 md:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                  {caseStudies[currentSlide].description}
                </p>

                {/* Highlight Box */}
                <div className="mb-3 sm:mb-4 md:mb-5">
                  <p className="text-orange-600 font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
                    {caseStudies[currentSlide].highlight}
                  </p>
                </div>

                {/* Read More Link */}
                <button className="inline-flex items-center text-orange-600 hover:text-cyan-600 font-medium text-xs sm:text-sm md:text-base group min-h-[44px]">
                  Read More
                  <ArrowUpRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Right Image */}
              <div className="lg:w-[50%] relative min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] xl:min-h-[220px]">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-cyan-500/20"></div>
                <img
                  src={caseStudies[currentSlide].image}
                  alt={caseStudies[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-orange-900/10"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-1 sm:space-x-2 mt-4 sm:mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                  : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400/50 hover:bg-gray-400 rounded-full"
              }`}
              style={{
                background: index === currentSlide ? "linear-gradient(90deg, #FFA500 0%, #4DC8E8 100%)" : undefined
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
