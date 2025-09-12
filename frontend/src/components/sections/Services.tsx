import { useEffect, useRef } from "react";
import "./HeroStripes.css";
import { useAnalytics } from "../../hooks/useAnalytics";
import softCircle from "../../assets/images/soft-logo2.webp";

const Services = () => {
  const { trackCustomEvent } = useAnalytics();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackCustomEvent("Section View", {
              section: "services",
              section_name: "Microsoft Partnership Services",
              page: "home",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [trackCustomEvent]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden"
    >
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-services"></div>

      {/* Vertical Lines Animation - Right Side */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full overflow-hidden z-10 hidden md:block">
        <div className="w-[180px] h-full relative ml-auto">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full vl-fade mr-12"
              style={{
                right: `${i * 17}px`,
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

      <div className="relative z-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section — Microsoft Recognition + Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch mb-10">
            {/* LEFT: Microsoft recognition (single image) */}
            <div
              className="rounded-lg p-5 sm:p-6 shadow-lg flex flex-col items-center justify-center h-auto lg:h-[280px] xl:h-[300px]"
              style={{
                background: "var(--gradient-orange-primary)",
                boxShadow: "0 10px 30px rgba(255, 165, 0, 0.2)",
              }}
            >
              <h3
                className="text-white font-bold leading-snug
                   text-xl sm:text-2xl md:text-[26px] lg:text-[22px] xl:text-[24px] mb-4 text-center"
              >
                Recognized by Microsoft to Accelerate
                <br className="hidden sm:block" />
                your Engineering Vision
              </h3>

              <img
                src="https://www.simform.com/wp-content/uploads/2025/05/Partners-logo_v9.svg"
                alt="Microsoft Partner Logos"
                className="w-full max-w-[520px] max-h-[160px] object-contain rounded-lg p-2"
                loading="lazy"
              />
            </div>

            {/* RIGHT: Partner badges (single image) */}
            <div
              className="rounded-lg shadow-lg flex items-center justify-center p-4 sm:p-6 h-auto lg:h-[280px] xl:h-[300px]"
              style={{
                background: "var(--gradient-orange-primary)",
                boxShadow: "0 10px 30px rgba(77, 200, 232, 0.2)",
              }}
            >
              <img
                src="https://www.simform.com/wp-content/uploads/2025/02/Partners-logo_side-panel_v5.svg "
                alt="Partner Badges"
                className="w-full max-w-[520px] max-h-[180px] object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bottom Section - Rare League */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12 lg:mt-16">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 leading-tight">
                Amongst A Rare League Of Engineering Companies
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 md:mb-6 font-medium leading-relaxed">
                Softronic Labs is best positioned to deliver on digital
                innovation through capabilities modeled on the best of all
                servicing companies.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                As a predominantly engineering-focused company, we bring robust
                technical expertise while embodying the agility, customer
                obsession, and CX focus of agencies. Paired with the
                scalability, delivery maturity, and functional excellence of
                large SIs, we ensure transformative solutions tailored to your
                needs.
              </p>
            </div>

            {/* Venn Diagram */}
            <div className="relative mt-6 sm:mt-8 lg:mt-0 flex flex-col items-center">
              <svg
                viewBox="0 0 400 360"
                className="w-full max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
              >
                {/* Three overlapping circles */}
                <circle
                  cx="150"
                  cy="150"
                  r="120"
                  fill="rgba(76, 203, 237, 0.25)"
                  stroke="rgba(76, 203, 237, 0.6)"
                  strokeWidth="2"
                />
                <circle
                  cx="250"
                  cy="150"
                  r="120"
                  fill="rgba(119, 119, 119, 0.25)"
                  stroke="rgba(119, 119, 119, 0.6)"
                  strokeWidth="2"
                />
                <circle
                  cx="200"
                  cy="230"
                  r="120"
                  fill="rgba(232, 144, 0, 0.25)"
                  stroke="rgba(232, 144, 0, 0.6)"
                  strokeWidth="2"
                />

                {/* Center logo */}
                <image
                  x="175"
                  y="160"
                  width="55"
                  height="55"
                  href={softCircle}
                  clipPath="circle(25px at 25px 25px)"
                />

                {/* Labels */}
                {/* Left Circle - Software Development */}
                <text
                  x="100"
                  y="80"
                  textAnchor="middle"
                  fill="#44444E"
                  fontSize="10"
                  fontWeight="600"
                >
                  <tspan x="100" y="80">
                    Software
                  </tspan>
                  <tspan x="100" y="95">
                    Development
                  </tspan>
                </text>

                {/* Right Circle - Independent Validation Services */}
                <text
                  x="320"
                  y="75"
                  textAnchor="middle"
                  fill="#44444E"
                  fontSize="10"
                  fontWeight="600"
                >
                  <tspan x="305" y="75">
                    Independent
                  </tspan>
                  <tspan x="305" y="90">
                    Validation
                  </tspan>
                  <tspan x="305" y="105">
                    Services
                  </tspan>
                </text>

                {/* Left-Bottom Intersection - Cloud Services */}
                <text
                  x="140"
                  y="195"
                  textAnchor="middle"
                  fill="#44444E"
                  fontSize="10"
                  fontWeight="600"
                >
                  <tspan x="120" y="195">
                    Cloud
                  </tspan>
                  <tspan x="120" y="210">
                    Services
                  </tspan>
                </text>

                {/* Right-Bottom Intersection - Technology Consulting */}
                <text
                  x="260"
                  y="195"
                  textAnchor="middle"
                  fill="#44444E"
                  fontSize="10"
                  fontWeight="600"
                >
                  <tspan x="260" y="195">
                    Technology
                  </tspan>
                  <tspan x="260" y="210">
                    Consulting
                  </tspan>
                </text>

                {/* Bottom-Left Area - Software Maintenance */}
                <text
                  x="130"
                  y="300"
                  textAnchor="middle"
                  fill="#44444E"
                  fontSize="10"
                  fontWeight="600"
                >
                  <tspan x="150" y="290">
                    Software
                  </tspan>
                  <tspan x="150" y="305">
                    Maintenance
                  </tspan>
                </text>

                {/* Bottom Center - Customer Obsession */}
                <text
                  x="200"
                  y="330"
                  textAnchor="middle"
                  fill="#44444E"
                  fontSize="10"
                  fontWeight="600"
                >
                  <tspan x="200" y="320">
                    Customer
                  </tspan>
                  <tspan x="200" y="335">
                    Obsession
                  </tspan>
                </text>

                {/* Bottom-Right Area - Large SI Features */}
                <text
                  x="270"
                  y="300"
                  textAnchor="middle"
                  fill="#44444E"
                  fontSize="10"
                  fontWeight="600"
                >
                  <tspan x="270" y="290">
                    Large SI
                  </tspan>
                  <tspan x="270" y="305">
                    Features
                  </tspan>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
