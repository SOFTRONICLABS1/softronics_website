import "./HeroStripes.css";

const Services = () => {
  const microsoftPartners = [
    {
      title: "Microsoft Solutions Partner",
      subtitle: "Digital & App Innovation Azure",
      specialties: [
        "Kubernetes on Azure",
        "DevOps with GitHub",
        "App Modernization",
        "AI and Machine Learning on Microsoft Azure",
      ],
    },
    {
      title: "Microsoft Solutions Partner",
      subtitle: "Infrastructure Azure",
      specialties: [
        "Modernizing Platforms and Infrastructure on Microsoft Azure",
      ],
    },
    {
      title: "Microsoft Solutions Partner",
      subtitle: "Data & AI Azure",
      specialties: ["Build and deploy AI Apps on Azure"],
    },
    {
      title: "Microsoft Solutions Partner",
      subtitle: "Security",
      specialties: [],
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden">
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

      <div className="relative z-20 py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Microsoft Recognition */}
          <div className="bg-[#6740BA] rounded-2xl lg:rounded-xl p-3 sm:p-8 md:p-8 lg:p-8 mb-12 sm:mb-16 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold text-white mb-8 sm:mb-10 lg:mb-12 leading-tight">
              Recognized by Microsoft to Accelerate
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>your Engineering Vision
            </h3>

            {/* Microsoft Partner Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 h-fit">
              {microsoftPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-tl-xl rounded-tr-xl rounded-bl-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-fit"
                >
                  <div className="p-3 sm:p-4">
                    {/* Microsoft Partner Logo */}
                    <div className="mb-2 sm:mb-3">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D4E12AQGurRUmKgTlVw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715706715036?e=2147483647&v=beta&t=cOsTbU2m3D93cL36r9tXTegaMCvP3-W-WC-P6V5GsIo"
                        alt="Microsoft Solutions Partner"
                        className="w-16 h-auto sm:w-20 object-contain"
                      />
                    </div>
                    <div className="text-xs text-gray-600 mb-1">
                      {partner.title}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight">
                      {partner.subtitle}
                    </div>
                  </div>
                  {partner.specialties.length > 0 && (
                    <div className="bg-gray-800 text-white p-2 sm:p-3">
                      <div className="text-xs font-semibold mb-1">
                        Specialties
                      </div>
                      {partner.specialties.map((specialty, idx) => (
                        <div
                          key={idx}
                          className="text-xs opacity-90 leading-tight"
                        >
                          {specialty}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Rare League */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-700 mb-4 sm:mb-6 leading-tight">
                Amongst A Rare League Of Engineering Companies
              </h3>
              <p className="text-sm sm:text-base text-gray-900 mb-4 sm:mb-6 font-semibold leading-relaxed">
                Softronic Labs is best positioned to deliver on digital
                innovation through capabilities modeled on the best of all
                servicing companies.
              </p>
              <p className="text-sm sm:text-base text-gray-900 font-semibold leading-relaxed">
                As a predominantly engineering-focused company, we bring robust
                technical expertise while embodying the agility, customer
                obsession, and CX focus of agencies. Paired with the
                scalability, delivery maturity, and functional excellence of
                large SIs, we ensure transformative solutions tailored to your
                needs.
              </p>
            </div>

            {/* Venn Diagram */}
            <div className="relative mt-8 lg:mt-0">
              {/* <div className="text-center">
                <div className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
                  Engineering Company
                  <br />
                  Empowers you with
                </div>
              </div> */}

              <svg
                viewBox="0 0 400 350"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
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
                  <tspan x="130" y="180">
                    CX
                  </tspan>
                  <tspan x="130" y="195">
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
                  <tspan x="270" y="180">
                    Delivery Maturity
                  </tspan>
                  <tspan x="270" y="195">
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
                  <tspan x="280" y="280">
                    Large SI
                  </tspan>
                  <tspan x="280" y="295">
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
