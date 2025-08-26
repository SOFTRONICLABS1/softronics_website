import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="py-12 md:py-14" style={{ background: "#38106F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Case Studies
          </h2>
          <p className="text-base md:text-lg text-purple-100 max-w-4xl font-light">
            Discover the many ways in which our clients have embraced the
            benefits of the Simform way of engineering.
          </p>
        </div>

        {/* Carousel (aligned with the title padding, wider, lower height) */}
        <div className="relative">
          {/* Card */}
          <div
            className="overflow-hidden shadow-2xl rounded-2xl w-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(233, 213, 255, 0.95) 0%, rgba(251, 207, 232, 0.95) 100%)",
            }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-6 md:p-10 lg:p-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 md:gap-3 mb-5 md:mb-6">
                  {caseStudies[currentSlide].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3.5 py-1.5 bg-white/80 text-purple-900 rounded-full text-xs md:text-sm font-medium border border-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-5 leading-tight">
                  {caseStudies[currentSlide].title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                  {caseStudies[currentSlide].description}
                </p>

                {/* Highlight Box */}
                <div className="mb-6 md:mb-8">
                  <p className="text-purple-700 font-semibold text-base md:text-lg leading-relaxed">
                    {caseStudies[currentSlide].highlight}
                  </p>
                </div>

                {/* Read More Link */}
                <button className="inline-flex items-center text-purple-700 hover:text-purple-900 font-medium text-sm md:text-base group">
                  Read More
                  <ArrowUpRight className="ml-1 w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Right Image */}
              <div className="lg:w-[44%] relative min-h-[280px] md:min-h-[320px] lg:min-h-[360px]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                <img
                  src={caseStudies[currentSlide].image}
                  alt={caseStudies[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-900/10"></div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows (inside slider, aligned) */}
          <button
            onClick={prevSlide}
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center rounded-full w-9 h-9 md:w-10 md:h-10 bg-white/80 hover:bg-white text-purple-900 shadow transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center rounded-full w-9 h-9 md:w-10 md:h-10 bg-white/80 hover:bg-white text-purple-900 shadow transition"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.75} />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-2 h-2 bg-white rounded-full"
                    : "w-2 h-2 bg-purple-300/50 hover:bg-purple-300 rounded-full"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
