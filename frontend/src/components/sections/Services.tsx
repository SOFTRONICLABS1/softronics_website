import { useEffect, useRef } from "react";
import "./HeroStripes.css";
import { useAnalytics } from "../../hooks/useAnalytics";

const Services = () => {
  const { trackCustomEvent } = useAnalytics();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackCustomEvent('Section View', {
              section: 'services',
              section_name: 'Microsoft Partnership Services',
              page: 'home'
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
  // const microsoftPartners = [
  //   {
  //     title: "Microsoft Solutions Partner",
  //     subtitle: "Digital & App Innovation Azure",
  //     specialties: [
  //       "Kubernetes on Azure",
  //       "DevOps with GitHub",
  //       "App Modernization",
  //       "AI and Machine Learning on Microsoft Azure",
  //     ],
  //   },
  //   {
  //     title: "Microsoft Solutions Partner",
  //     subtitle: "Infrastructure Azure",
  //     specialties: [
  //       "Modernizing Platforms and Infrastructure on Microsoft Azure",
  //     ],
  //   },
  //   {
  //     title: "Microsoft Solutions Partner",
  //     subtitle: "Data & AI Azure",
  //     specialties: ["Build and deploy AI Apps on Azure"],
  //   },
  //   {
  //     title: "Microsoft Solutions Partner",
  //     subtitle: "Security",
  //     specialties: [],
  //   },
  // ];

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-[#F0E8FA]"></div>

      {/* Vertical Lines Animation - Right Side */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[180px] overflow-hidden z-10 hidden md:block">
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

      <div className="relative z-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section — Microsoft Recognition + Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch mb-10">
            {/* LEFT: Microsoft recognition (single image) */}
            <div
              className="bg-[#6740BA] rounded p-5 sm:p-6 shadow
                  flex flex-col items-center justify-center
                  h-auto lg:h-[280px] xl:h-[300px]"
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
              className="bg-[#D9C3FF] rounded shadow flex items-center justify-center
                  p-4 sm:p-6 h-auto lg:h-[280px] xl:h-[300px]"
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-700 mb-3 sm:mb-4 md:mb-6 leading-tight">
                Amongst A Rare League Of Engineering Companies
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-900 mb-3 sm:mb-4 md:mb-6 font-semibold leading-relaxed">
                Softronic Labs is best positioned to deliver on digital
                innovation through capabilities modeled on the best of all
                servicing companies.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold leading-relaxed">
                As a predominantly engineering-focused company, we bring robust
                technical expertise while embodying the agility, customer
                obsession, and CX focus of agencies. Paired with the
                scalability, delivery maturity, and functional excellence of
                large SIs, we ensure transformative solutions tailored to your
                needs.
              </p>
            </div>

            {/* Venn Diagram */}
            <div className="relative mt-6 sm:mt-8 lg:mt-0">
              {/* <div className="text-center">
                <div className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
                  Engineering Company
                  <br />
                  Empowers you with
                </div>
              </div> */}

              <svg
                viewBox="0 0 400 360"
                className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto"
              >
                {/* Three overlapping circles */}
                <circle
                  cx="150"
                  cy="150"
                  r="120"
                  fill="rgba(147, 51, 234, 0.3)"
                  stroke="rgba(147, 51, 234, 0.5)"
                  strokeWidth="2"
                />
                <circle
                  cx="250"
                  cy="150"
                  r="120"
                  fill="rgba(147, 51, 234, 0.3)"
                  stroke="rgba(147, 51, 234, 0.5)"
                  strokeWidth="2"
                />
                <circle
                  cx="200"
                  cy="230"
                  r="120"
                  fill="rgba(147, 51, 234, 0.3)"
                  stroke="rgba(147, 51, 234, 0.5)"
                  strokeWidth="2"
                />

                {/* Center logo */}
                <rect
                  x="180"
                  y="160"
                  width="40"
                  height="40"
                  fill="#ef4444"
                  rx="4"
                  transform="rotate(45 200 180)"
                />
                <text
                  x="200"
                  y="185"
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="bold"
                >
                  S
                </text>

                {/* Labels */}
                <text
                  x="100"
                  y="100"
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="500"
                >
                  <tspan x="100" y="100">
                    Modern
                  </tspan>
                  <tspan x="100" y="115">
                    Capabilities
                  </tspan>
                </text>

                <text
                  x="300"
                  y="100"
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="500"
                >
                  <tspan x="300" y="100">
                    Engineering
                  </tspan>
                  <tspan x="300" y="115">
                    Platform
                  </tspan>
                  <tspan x="300" y="130">
                    Partnerships
                  </tspan>
                </text>

                <text
                  x="130"
                  y="180"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                >
                  <tspan x="120" y="180">
                    CX
                  </tspan>
                  <tspan x="120" y="195">
                    Agility
                  </tspan>
                </text>

                <text
                  x="270"
                  y="180"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                >
                  <tspan x="260" y="180">
                    Delivery Maturity
                  </tspan>
                  <tspan x="260" y="195">
                    Scalability
                  </tspan>
                </text>

                <text
                  x="120"
                  y="280"
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="500"
                >
                  <tspan x="120" y="280">
                    Agency
                  </tspan>
                  <tspan x="120" y="295">
                    Focus
                  </tspan>
                </text>

                <text
                  x="200"
                  y="300"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                >
                  <tspan x="200" y="300">
                    Customer
                  </tspan>
                  <tspan x="200" y="315">
                    Obsession
                  </tspan>
                </text>

                <text
                  x="280"
                  y="280"
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="500"
                >
                  <tspan x="270" y="280">
                    Large SI
                  </tspan>
                  <tspan x="270" y="295">
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
