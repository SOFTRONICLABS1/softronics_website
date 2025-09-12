import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import softCircle from "../../assets/images/soft-logo2.webp";

const RIGHT_IMG = softCircle;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 3,
      content:
        "I have known Chethan since 2011 when I joined L&T. Chethan's passion for getting it right every-time and all the time was very noticeable. His expertise and quest for excellence in the area of testing, automation and achieving the highest quality was very much appreciated by everybody he worked with. The innovations and improvements done by Chethan has helped us in making this a very successful test lab for our customers.",
      name: "Chetan G",
      position: "Founder & CEO",
      company: "SoftronicLabs",
    },
    {
      id: 4,
      content:
        "Tejashree is a young enthusiast who brings passion for business development and social engagement to SofTronicLabs. She believes in social engagement for business success, creative marketing strategies, and building strong business relationships with innovative approaches to business development.",
      name: "Tejashree S Sankangoudar",
      position: "Co-Founder & Former CFO",
      company: "SofTronicLabs",
    },
  ];

  const companyLogos = [
    ["cisco", "twilio", "vmware"],
    ["Tryg", "BANK OF AMERICA", "American"],
    ["MITSUBISHI ELECTRIC", "RENESAS", "FUJIFILM"],
    ["HYUNDAI GLOVIS", "Red Bull", "cameo"],
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      className="h-fit flex items-center justify-center relative overflow-hidden py-6 sm:py-8 md:py-12 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 50%, #F5F5F5 100%)",
      }}
    >
      {/* Right-side decorative image (behind content) */}
      <div
        className="
          pointer-events-none
          hidden lg:block mr-[-120px]
          absolute right-0 top-1/2 -translate-y-1/2
          lg:w-[360px] xl:w-[460px] 2xl:w-[560px]
          opacity-60 lg:opacity-80
          z-0
        "
        aria-hidden="true"
      >
        <img
          src={RIGHT_IMG}
          alt=""
          className="w-full h-auto select-none"
          loading="lazy"
        />
      </div>

      {/* Updated decorative blobs with new colors */}
      <div
        className="absolute -top-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-20 z-0"
        style={{
          background:
            "radial-gradient(circle, #FFA500 0%, #FFB84D 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-48 -right-48 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full opacity-15 z-0"
        style={{
          background:
            "radial-gradient(circle, #FFA500 0%, #FFB84D 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          style={{
            background: "linear-gradient(135deg, #171717 0%, #171717 100%)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Trusted by the World's Leading Companies
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 items-stretch">
          {/* Company Logos Grid */}
          <div className="w-full lg:w-[45%]">
            <div
              className="rounded-2xl lg:rounded-r-none lg:rounded-l-2xl p-4 sm:p-6 md:p-8 h-full"
              style={{
                background: "linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 100%)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(77, 200, 232, 0.2)",
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                {companyLogos.flat().map((logo, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <div
                      className="rounded-lg px-1 py-2 sm:px-2 sm:py-3 md:px-3 md:py-4 lg:px-4 lg:py-5 w-full text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                      style={{
                        background: "#FFFFFF",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                        border: "1px solid #E5E5E5",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(255, 165, 0, 0.15)";
                        e.currentTarget.style.borderColor = "#FFB84D";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0, 0, 0, 0.05)";
                        e.currentTarget.style.borderColor = "#E5E5E5";
                      }}
                    >
                      <span
                        className="font-semibold text-[8px] xs:text-[10px] sm:text-xs md:text-sm break-words transition-colors duration-300"
                        style={{ color: "#707070" }}
                      >
                        {logo}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Slider */}
          <div className="w-full lg:w-[55%] lg:-ml-px lg:pl-6 xl:pl-8">
            <div className="relative h-full min-h-[280px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[400px]">
              <div className="overflow-hidden h-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, idx) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 h-full"
                    >
                      {/* Outer container with gradient border effect */}
                      <div
                        className="relative rounded-lg p-[2px] h-full"
                        style={{
                          background:
                            idx === 0
                              ? "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)"
                              : "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)",
                          boxShadow: `0 20px 50px rgba(${
                            idx === 0 ? "255, 165, 0" : "77, 200, 232"
                          }, 0.2)`,
                        }}
                      >
                        {/* Inner content container */}
                        <div
                          className="relative rounded-md p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 h-full flex flex-col justify-between"
                          style={{
                            background: "#FFFFFF",
                          }}
                        >
                          {/* Decorative quote icon */}
                          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                            >
                              <path
                                d="M8 12C8 10.8954 8.89543 10 10 10H14C15.1046 10 16 10.8954 16 12V16C16 17.1046 15.1046 18 14 18H12C12 20.2091 13.7909 22 16 22V24C12.6863 24 10 21.3137 10 18V14C9.44772 14 9 13.5523 9 13V12C9 11.4477 8.55228 11 8 11V12Z"
                                fill={idx === 0 ? "#FFA500" : "#FFB84D"}
                                opacity="0.2"
                              />
                            </svg>
                          </div>

                          {/* Quote Content */}
                          <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed mb-3 sm:mb-4 md:mb-6 lg:mb-8 mt-8 sm:mt-10">
                            "{testimonial.content}"
                          </p>

                          {/* Author Info and Controls */}
                          <div className="space-y-3 sm:space-y-4 md:space-y-6">
                            {/* Author Info */}
                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                              <div
                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg flex-shrink-0"
                                style={{
                                  background:
                                    idx === 0
                                      ? "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)"
                                      : "linear-gradient(135deg, #FFB84D 0%, #FFA500 100%)",
                                }}
                              >
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                              <div>
                                <h4
                                  className="font-bold text-xs sm:text-sm md:text-base lg:text-lg"
                                  style={{ color: "#0095BB" }}
                                >
                                  {testimonial.name}
                                </h4>
                                <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm">
                                  {testimonial.position}
                                </p>
                                <p
                                  className="font-semibold text-[10px] sm:text-xs md:text-sm mt-0.5"
                                  style={{
                                    color: idx === 0 ? "#FFA500" : "#4DC8E8",
                                  }}
                                >
                                  {testimonial.company}
                                </p>
                              </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex gap-2 sm:gap-3 md:gap-4">
                                <button
                                  onClick={goToPrevious}
                                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 min-h-[28px] min-w-[28px] group"
                                  style={{
                                    background: "#F5F5F5",
                                    border: "1px solid #E5E5E5",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                      "#FFA500";
                                    e.currentTarget.style.borderColor =
                                      "#FFA500";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                      "#F5F5F5";
                                    e.currentTarget.style.borderColor =
                                      "#E5E5E5";
                                  }}
                                  aria-label="Previous testimonial"
                                >
                                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-white" />
                                </button>

                                <button
                                  onClick={goToNext}
                                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 min-h-[28px] min-w-[28px] group"
                                  style={{
                                    background: "#F5F5F5",
                                    border: "1px solid #E5E5E5",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                      "#4DC8E8";
                                    e.currentTarget.style.borderColor =
                                      "#4DC8E8";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                      "#F5F5F5";
                                    e.currentTarget.style.borderColor =
                                      "#E5E5E5";
                                  }}
                                  aria-label="Next testimonial"
                                >
                                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-white" />
                                </button>
                              </div>

                              {/* Pagination dots */}
                              <div className="flex gap-1">
                                {testimonials.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className="h-1 sm:h-1.5 md:h-2 rounded-full transition-all duration-300"
                                    style={{
                                      width:
                                        index === currentIndex ? "24px" : "8px",
                                      background:
                                        index === currentIndex
                                          ? `linear-gradient(90deg, #FFA500 0%, #4DC8E8 100%)`
                                          : "#D0D0D0",
                                    }}
                                    aria-label={`Go to testimonial ${
                                      index + 1
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
