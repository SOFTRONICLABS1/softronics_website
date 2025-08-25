import { useState, useEffect, type SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      avatar: "/api/placeholder/56/56",
    },
    {
      id: 2,
      content:
        "Simform delivered our application, including an MVP, within the agreed timeline. Their expertise and dedication really impress as they develop, test, and maintain the application. Their remarkable partner in software development.",
      name: "Abhilash Kumar",
      position: "Technical Product Manager",
      company: "AUDIENCEX",
      avatar: "/api/placeholder/56/56",
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
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
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

  const goToSlide = (index: SetStateAction<number>) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden py-16">
      {/* Background gradient circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-purple-300/30 rounded-full filter blur-3xl -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-300/40 to-pink-200/30 rounded-full filter blur-3xl translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <h2
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
          style={{ color: "#6B46C1" }}
        >
          Trusted by the World's Leading Companies
        </h2>

        {/* Company Logos Grid */}
        <div className="mb-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/50">
            <div className="grid grid-cols-3 gap-x-12 gap-y-8">
              {companyLogos.flat().map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="bg-purple-50/50 rounded-lg px-6 py-4 w-full text-center hover:bg-purple-100/50 transition-colors">
                    <span className="text-gray-600 font-medium text-sm opacity-70">
                      {logo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="flex justify-center items-center gap-12">
                    {/* Left Quote Box */}
                    <div className="flex-1 max-w-2xl">
                      <div
                        className="relative rounded-3xl p-10 shadow-2xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 50%, #C084FC 100%)",
                        }}
                      >
                        <div
                          className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rotate-45"
                          style={{
                            background:
                              "linear-gradient(135deg, #A78BFA 0%, #C084FC 100%)",
                          }}
                        ></div>
                        <p className="text-white text-lg leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>

                    {/* Right Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.position}
                        </p>
                        <p className="text-purple-600 font-semibold text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 gap-6">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-600 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-purple-500"
                      : "w-2 bg-purple-200 hover:bg-purple-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-600 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
