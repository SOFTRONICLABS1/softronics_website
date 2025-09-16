import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "../hooks/useAnalytics";
import {
  FiCpu,
  FiWifi,
  FiTrendingUp,
  FiMonitor,
  FiSettings,
  FiZap,
} from "react-icons/fi";

import iotDashboard from "../assets/images/IOF.png";

const IoTSolutions: React.FC = () => {
  const navigate = useNavigate();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView("IoT Solutions - SoftronicLabs", {
      page: "iot-solutions",
      section: "main",
    });
  }, [trackPageView]);

  const expertise = [
    {
      icon: FiCpu,
      title: "ARM Cortex-A Series Processors",
      description:
        "We have a special interest in systems on chipboards and huge experience with ARM Cortex-A series processors for sustainable clustered applications.",
    },
    {
      icon: FiSettings,
      title: "Sensor Networks Integration",
      description:
        "We work with tonnes of sensor networks that need to get hooked up to energy-efficient computing power for basic decision-making actions.",
    },
    {
      icon: FiWifi,
      title: "Communication Protocols",
      description:
        "We attach sensors to boards using various protocols like UART, SPI, CAN, I2C for efficient data transmission.",
    },
  ];

  const applications = [
    {
      title: "Farming",
      description:
        "Smart agricultural solutions for monitoring and controlling farm conditions",
      icon: "🌱",
    },
    {
      title: "Home Automation",
      description:
        "Intelligent home systems for comfort, security, and energy efficiency",
      icon: "🏠",
    },
  ];

  const farmingFeatures = [
    {
      title: "Plant Nutrients Management",
      description:
        "Advanced nutrient monitoring and management systems for optimal plant growth",
      color: "bg-green-500",
    },
    {
      title: "Lighting Solutions For Plant Growth",
      description:
        "Specialized lighting systems optimized for different growth stages",
      color: "bg-blue-500",
    },
    {
      title: "Specialist Hydroponic, Aquaponic, Airophonic",
      description:
        "Complete solutions for modern farming techniques and soilless cultivation",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-gray-900 mb-4 sm:mb-6">
              Internet of Things &{" "}
              <span className="text-brand-orange">Internet of Farming</span>
            </h1>
            <p className="text-[18px] sm:text-[20px] md:text-[24px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Embedded Systems & IoT Solutions for the Future
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-500 max-w-5xl mx-auto mt-3 sm:mt-4 leading-relaxed px-2 sm:px-0">
              We specialize in designing and developing embedded applications,
              focusing on collating data from different units to a single
              platform. Our single-point IoT platform is designed to acquire
              data across different units into a common protocol IoT cloud.
            </p>
          </div>

          {/* IoT Diagram Placeholder */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl mb-8 sm:mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl aspect-video flex items-center justify-center border-1 border-gray-300 overflow-hidden">
              <img
                src="../../src/assets/images/IOT.png"
                alt="IoT Architecture Diagram"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Systems Expertise */}
      <section className="relative py-10 sm:py-14 md:py-18 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 mb-4 sm:mb-6">
              Embedded Systems & IoT Expertise
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Low Energy Computing for sustainable and efficient solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-cyan/80 mb-4 sm:mb-6">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-bold text-gray-900 mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Platform Features */}
      <section className="relative py-10 sm:py-14 md:py-18 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 mb-4 sm:mb-6">
              IoT Platform
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Single-point platform for comprehensive IoT data management
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-gray-900 mb-4 sm:mb-6">
                  Platform Capabilities
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Data Acquisition
                      </p>
                      <p className="text-gray-600 text-sm">
                        Acquire data across different units into a common
                        protocol IoT cloud
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Analytics Integration
                      </p>
                      <p className="text-gray-600 text-sm">
                        Uses our analytics solutions to perform backend
                        processing
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Data Visualization
                      </p>
                      <p className="text-gray-600 text-sm">
                        Front-end rendering of data for comprehensive
                        visualization
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 aspect-square flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <img
                    src={iotDashboard}
                    alt="IoT Dashboard"
                    className="w-20 h-20 mx-auto mb-4 object-contain"
                  />
                  <p className="font-semibold">IoT Dashboard</p>
                  <p className="text-sm mt-2">
                    Real-time monitoring and control
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="relative py-10 sm:py-14 md:py-18 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 mb-4 sm:mb-6">
              Application Areas
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              We are moving ahead in managing artificial environmental
              parameters in many applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{app.icon}</div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-gray-900 mb-3 sm:mb-4">
                  {app.title}
                </h3>
                <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internet of Farming */}
      <section className="relative py-10 sm:py-14 md:py-18 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 mb-4 sm:mb-6">
              Internet of Farming
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              We have pioneered customizing the IoT platform to be useful for
              agriculture, constantly researching in the field of plant growth
              and monitoring.
            </p>
          </div>

          {/* Farming Specialization Diagram */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Center circle */}
                <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full border-3 sm:border-4 border-orange-500 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🌱</span>
                </div>

                {/* Surrounding circles */}
                {farmingFeatures.map((feature, index) => {
                  const angle = index * 120 * (Math.PI / 180);
                  const radius = 96;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div
                        className={`w-20 h-20 sm:w-24 sm:h-24 ${feature.color} rounded-full flex items-center justify-center text-white font-bold text-center text-[10px] sm:text-xs leading-tight p-1.5 sm:p-2`}
                      >
                        {feature.title.split(" ")[0]}
                        <br />
                        {feature.title.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-gray-900 mb-3 sm:mb-4">
                Specialist Solutions
              </h3>
              <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] max-w-3xl mx-auto px-2 sm:px-0">
                Our unique system is an ergonomic solution for plant growth
                where it monitors different growth indexes of plants like
                nutrient absorption index and controls the inflow of nutrients
                to the plant for its healthy life.
              </p>
            </div>
          </div>

          {/* Features Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {farmingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <FiZap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10 sm:py-14 md:py-18 lg:py-24 bg-gradient-to-r from-brand-orange to-brand-cyan">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Ready to Connect Your World?
          </h2>
          <p className="text-xl text-zinc-800/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Get started with our IoT solutions and transform your business with
            connected intelligence.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <span>Explore IoT Solutions</span>
            <FiWifi className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default IoTSolutions;
