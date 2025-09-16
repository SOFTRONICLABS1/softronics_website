import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "../hooks/useAnalytics";
import {
  FiDatabase,
  FiTrendingUp,
  FiBatteryCharging,
  FiWifi,
  FiArrowRight,
} from "react-icons/fi";
import { Gamepad } from "lucide-react";

import LowEnergyCompution from "../assets/images/Low Energy Computing.png";
import iotImg from "../assets/images/IOT.png";
import analyticSol from "../assets/images/Analytics.jpg";

const Products: React.FC = () => {
  const navigate = useNavigate();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView("Products - SoftronicLabs", {
      page: "products",
      section: "main",
    });
  }, [trackPageView]);

  const products = [
    {
      id: "ddp-platform",
      title: "DDP Dissection Platform",
      subtitle: "Transforming Data into Actionable Insights",
      description:
        "A cutting-edge three-layered architecture solution that seamlessly combines Extract, Transform, Load (ETL), Artificial Intelligence (AI), and Visualization.",
      features: [
        "ETL Layer for data transformation",
        "AI Layer for predictive analysis",
        "Visualization Layer for dashboards",
        "Real-time data processing",
      ],
      icon: FiDatabase,
      gradient: "from-brand-cyan to-brand-cyan/80",
      href: "/ddp-platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "analytics-solutions",
      title: "Analytics Solutions",
      subtitle: "Feature-Rich User Dashboards",
      description:
        "Highly customizable and configurable dashboards for underlying data with processing using Python on big data platforms.",
      features: [
        "Customizable user dashboards",
        "Big data processing with Python",
        "Security by default",
        "Inherent user management",
      ],
      icon: FiTrendingUp,
      gradient: "from-brand-orange to-brand-orange/80",
      href: "/analytics-solutions",
      image: analyticSol,
    },
    {
      id: "low-energy-computing",
      title: "Low Energy Computing",
      subtitle: "Sustainable Embedded Applications",
      description:
        "Energy-efficient embedded applications using ARM Cortex-A processors and clustered system-on-chip solutions for IoT and automation.",
      features: [
        "ARM Cortex-A processors",
        "Energy-efficient design",
        "Sensor network integration",
        "Communication protocols (UART, SPI, CAN, I2C)",
      ],
      icon: FiBatteryCharging,
      gradient: "from-brand-cyan to-brand-cyan/80",
      href: "/low-energy-computing",
      image: LowEnergyCompution,
    },
    {
      id: "gamification",
      title: "Gamification in Pedagogy",
      subtitle: "Transforming Learning Through Technology",
      description:
        "Engaging educational solutions that combine gamification with deep pedagogical expertise to empower and educate learners.",
      features: [
        "Interactive learning modules",
        "Pedagogical expertise integration",
        "Technology-driven education",
        "Engagement-focused design",
      ],
      icon: Gamepad,
      gradient: "from-brand-cyan to-brand-cyan/80",
      href: "/gamification-in-pedagogy",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "iot-solutions",
      title: "Internet of Things & Farming",
      subtitle: "Embedded Systems & IoT Solutions",
      description:
        "Single-point IoT platform designed to acquire data across different units into a common protocol IoT cloud, specializing in Internet of Farming.",
      features: [
        "Single-point IoT platform",
        "Smart farming solutions",
        "Home automation systems",
        "Sensor network integration",
      ],
      icon: FiWifi,
      gradient: "from-brand-cyan to-brand-cyan/80",
      href: "/iot-solutions",
      image: iotImg,
    },
  ];

  const handleProductClick = (href: string) => {
    navigate(href);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

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
              Our <span className="text-brand-orange">Products</span>
            </h1>
            <p className="text-[18px] sm:text-[20px] md:text-[24px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Innovative solutions designed to transform your business
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-500 max-w-5xl mx-auto mt-3 sm:mt-4 leading-relaxed px-2 sm:px-0">
              Explore our comprehensive suite of cutting-edge products, from
              data analytics platforms to IoT solutions, all engineered to drive
              innovation and deliver exceptional results for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-80`}
                    ></div>
                    <div className="absolute inset-0 bg-black/20"></div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1">
                        {product.title}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-gray-900 font-semibold mb-3 text-sm sm:text-base">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm sm:text-base text-gray-600"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient} mr-3 flex-shrink-0`}
                            ></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button
                        onClick={() => handleProductClick(product.href)}
                        className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${product.gradient} text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center group`}
                      >
                        Learn More
                        <FiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      <button
                        onClick={handleContactClick}
                        className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-brand-orange to-brand-cyan">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-10 lg:px-12">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-zinc-900 mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-zinc-800 mb-6 sm:mb-8 leading-relaxed">
            Discover how our innovative products can help you achieve your
            goals. Get in touch with our experts to discuss your specific
            requirements.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
          >
            <Gamepad className="mr-2 w-5 h-5" />
            Start Your Journey
            <FiArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
