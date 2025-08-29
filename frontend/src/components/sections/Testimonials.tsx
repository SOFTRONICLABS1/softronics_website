import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RIGHT_IMG =
  "https://www.simform.com/wp-content/uploads/2024/12/hm-hero-image.svg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      content:
        "Unlike many firms, they approach the work with a sense of ownership and urgency, making them feel like an extension of our team. Their wide-ranging technical capabilities and reliability gave us the confidence to trust them with critical parts of our product.",
      name: "Robel Yemane",
      position: "Head of Engineering, Privilee",
      company: "Privilee",
    },
    {
      id: 2,
      content:
        "Softroniclabs delivered our application, including an MVP, within the agreed timeline. Their expertise and dedication really impress as they develop, test, and maintain the application. Their remarkable partner in software development.",
      name: "Abhilash Kumar",
      position: "Technical Product Manager",
      company: "AUDIENCEX",
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
        background: "#F0E8FA",
      }}
    >
      {/* NEW: Right-side decorative image (behind content) */}
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

      {/* decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-30 z-0"
        style={{
          background:
            "radial-gradient(circle, #C084FC 0%, #A78BFA 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-48 -right-48 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full opacity-25 z-0"
        style={{
          background:
            "radial-gradient(circle, #A78BFA 0%, #C084FC 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Put all main content above the image */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          style={{ color: "#6B46C1" }}
        >
          Trusted by the World's Leading Companies
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 items-stretch">
          <div className="w-full lg:w-[45%]">
            <div
              className="rounded-2xl lg:rounded-r-none lg:rounded-l-2xl p-4 sm:p-6 md:p-8 h-full"
              style={{
                // background: "#E7D7FC", // updated brands grid background
                // boxShadow: "0 10px 40px rgba(139, 92, 246, 0.1)",
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                {companyLogos.flat().map((logo, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <div
                      className="rounded-lg px-1 py-2 sm:px-2 sm:py-3 md:px-3 md:py-4 lg:px-4 lg:py-5 w-full text-center transition-all duration-300 hover:scale-105 cursor-pointer"
                      style={{
                        background: "#E7D7FC",
                        boxShadow: "0 2px 8px rgba(139, 92, 246, 0.1)",
                      }}
                    >
                      <span
                        className="font-semibold text-[8px] xs:text-[10px] sm:text-xs md:text-sm break-words"
                        style={{ color: "#715594" }}
                      >
                        {logo}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[55%] lg:-ml-px lg:pl-6 xl:pl-8">
            {/* Added pl-8 for gap */}
            <div className="relative h-full min-h-[280px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[400px]">
              <div className="overflow-hidden h-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 h-full"
                    >
                      {/* Outer container with #E7D7FC background */}
                      <div
                        className="relative rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 h-full"
                        style={{
                          background: "#E7D7FC",
                          boxShadow: "0 20px 50px rgba(147, 51, 234, 0.3)",
                        }}
                      >
                        {/* Inner content container with #D9C3FF background */}
                        <div
                          className="relative rounded-md p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 h-full flex flex-col justify-between"
                          style={{
                            background: "#D9C3FF",
                          }}
                        >
                        {/* Quote Content */}
                        <p className="text-[#715594] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                          "{testimonial.content}"
                        </p>
                        
                        {/* Author Info and Controls */}
                        <div className="space-y-3 sm:space-y-4 md:space-y-6">
                          {/* Author Info */}
                          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <div
                              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg flex-shrink-0"
                              style={{ background: "#715594" }}
                            >
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <h4 className="font-bold text-[#715594] text-xs sm:text-sm md:text-base lg:text-lg">
                                {testimonial.name}
                              </h4>
                              <p className="text-[#715594] text-[10px] sm:text-xs md:text-sm">
                                {testimonial.position}
                              </p>
                              <p className="text-[#715594] font-semibold text-[10px] sm:text-xs md:text-sm mt-0.5">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>

                          {/* Controls inside slider */}
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2 sm:gap-3 md:gap-4">
                              <button
                                onClick={goToPrevious}
                                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 min-h-[28px] min-w-[28px]"
                                style={{
                                  background: "#C7A8FA",
                                  color: "#715594",
                                }}
                                aria-label="Previous testimonial"
                              >
                                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                              </button>
                              
                              <button
                                onClick={goToNext}
                                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 min-h-[28px] min-w-[28px]"
                                style={{
                                  background: "#C7A8FA",
                                  color: "#715594",
                                }}
                                aria-label="Next testimonial"
                              >
                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                              </button>
                            </div>
                            
                            <div className="flex gap-1">
                              {testimonials.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => goToSlide(index)}
                                  className="h-1 sm:h-1.5 md:h-2 rounded-full transition-all duration-300"
                                  style={{
                                    width: index === currentIndex ? "16px" : "4px",
                                    background:
                                      index === currentIndex
                                        ? "#715594"
                                        : "rgba(113, 85, 148, 0.4)",
                                  }}
                                  aria-label={`Go to testimonial ${index + 1}`}
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
