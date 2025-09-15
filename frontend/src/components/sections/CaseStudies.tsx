import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import "./HeroStripes.css";
import iofImg from "../../assets/images/IOF.png";
import iotImg from "../../assets/images/IOT.png";

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const caseStudies = [
    {
      id: 1,
      tags: ["IoT", "Agriculture"],
      title: "Internet of Farming",
      description:
        "One of the applications where we use the IoT platform is in the field of agriculture. We have pioneered customizing the IoT platform to be useful on the Internet of Farming. We are constantly researching in the field of plant growth and monitoring.",
      highlight:
        "Our unique system is an ergonomic solution for plant growth where it monitors different growth indexes of plants like nutrient absorption index and controls the inflow of nutrients to the plant for its healthy life.",
      image: iofImg,
    },
    {
      id: 2,
      tags: ["IoT Platform", "Data Analytics"],
      title: "Internet Of Things",
      description:
        "Being a specialist in designing and developing embedded applications we also focus on collating the data coming from different units to a single platform. This gives rise to our single-point IoT platform which is designed to acquire data across different units into a common protocol IoT cloud.",
      highlight:
        "Our IoT cloud application uses our analytics solutions to perform backend processing and front-end rendering of the data for visualization.",
      image: iotImg,
    },
    {
      id: 3,
      tags: ["Web Development", "UX/UI Design"],
      title: "Web Application Design & Development",
      description:
        "Our talent pool loves to create the ultimate user experience with eye-catching designs. We provide reliable and functional solutions to improve business growth. We design, model, and test the software architecture for cost-effective functional solutions.",
      highlight:
        "100% Responsive design to cater to different class of devices. We connect your customers to you digitizing all your business operations with aesthetic designs that elevate your brand name.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
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
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden bg-services">
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
              className="pointer-events-auto ml-[-40px] sm:ml-[-60px] w-6 h-6 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              style={{
                // backgroundColor: 'rgba(255, 255, 255, 0.9)',
                // borderColor: 'var(--brand-cyan)',
                color: 'var(--brand-cyan)',
                // boxShadow: '0 4px 12px rgba(78, 204, 239, 0.2)'
              }}
              // onMouseEnter={(e) => {
              //   e.currentTarget.style.backgroundColor = 'var(--brand-cyan)';
              //   e.currentTarget.style.color = 'white';
              // }}
              // onMouseLeave={(e) => {
              //   e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              //   e.currentTarget.style.color = 'var(--brand-cyan)';
              // }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-2 h-2 sm:w-5 sm:h-5" strokeWidth={2} />
            </button>
            
            <button
              onClick={nextSlide}
              className="pointer-events-auto mr-[-40px] sm:mr-[-60px] w-6 h-6 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              style={{
                // backgroundColor: 'rgba(255, 255, 255, 0.9)',
                // borderColor: 'var(--brand-cyan)',
                color: 'var(--brand-cyan)',
                // boxShadow: '0 4px 12px rgba(78, 204, 239, 0.2)'
              }}
              // onMouseEnter={(e) => {
              //   // e.currentTarget.style.backgroundColor = 'var(--brand-cyan)';
              //   e.currentTarget.style.color = 'white';
              // }}
              // onMouseLeave={(e) => {
              //   // e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              //   e.currentTarget.style.color = 'var(--brand-cyan)';
              // }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
            </button>
          </div>

          {/* Card */}
          <div 
            className="w-full rounded-xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: 'white' }}
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
                <button 
                  className="inline-flex items-center font-medium text-xs sm:text-sm md:text-base group min-h-[44px] transition-all duration-300"
                  style={{
                    color: 'var(--brand-cyan)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--brand-button-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--brand-cyan)';
                  }}
                >
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
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 transition-all duration-300 hover:scale-125"
              style={{
                backgroundColor: index === currentSlide ? 'var(--brand-orange)' : 'transparent',
                borderColor: 'var(--brand-orange)',
                opacity: index === currentSlide ? 1 : 0.6
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
