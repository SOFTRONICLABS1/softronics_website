import { FiCpu, FiBatteryCharging, FiWifi, FiArrowRight } from "react-icons/fi";
import { useState } from "react";

// Example images (replace with your own imports)
import lecImg1 from "../../src/assets/images/Low Energy Computing.png";

const LowEnergyComputing: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      icon: FiCpu,
      title: "Embedded Processing",
      description:
        "Harness ARM Cortex-A and energy-efficient SoCs for real-time decision making in constrained environments.",
    },
    {
      icon: FiBatteryCharging,
      title: "Low Power Design",
      description:
        "Optimize computing performance while drastically reducing energy consumption for sustainable applications.",
    },
    {
      icon: FiWifi,
      title: "Sensor Integration",
      description:
        "Seamlessly connect sensors with UART, SPI, I2C, and CAN protocols for adaptive IoT-driven intelligence.",
    },
  ];

  const solutions = [
    {
      title: "Smart Farming",
      description:
        "Deployed sensor-driven farming automation systems for temperature, humidity, and soil health monitoring.",
    },
    {
      title: "Home Automation",
      description:
        "Developed energy-efficient embedded platforms for lighting, HVAC, and security automation.",
    },
    {
      title: "Environmental Monitoring",
      description:
        "Designed IoT clusters for monitoring air quality, water usage, and waste management with low power chips.",
    },
    {
      title: "Industrial IoT",
      description:
        "Implemented embedded controllers for predictive maintenance in factories with low energy boards.",
    },
  ];

  return (
    <div className="min-h-screen bg-hero text-brand-gray-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 md:py-32">
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h1 className="leading-tight text-[40px] font-semibold tracking-[-0.01em] sm:text-[48px] md:text-[56px] text-brand-gray-dark mb-6">
            Low Energy{" "}
            <span className="underline decoration-[#4ECCEF]/30 underline-offset-4">
              Computing
            </span>{" "}
            (Embedded Systems)
          </h1>
          <p className="text-[20px] sm:text-[24px] text-brand-gray-dark max-w-4xl mx-auto leading-relaxed font-medium">
            Engineering Sustainable Embedded Applications
          </p>
          <p className="text-[15.5px] leading-7 text-brand-gray-dark max-w-5xl mx-auto mt-4">
            We specialize in designing and developing energy-efficient embedded
            applications. From ARM Cortex-A processors to clustered
            system-on-chip solutions, our expertise lies in engineering
            sustainable and scalable systems for IoT, farming, home automation,
            and beyond.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-14 md:py-16 bg-white/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-[28px] font-semibold sm:text-[32px] text-brand-gray-dark mb-4">
              Key{" "}
              <span className="underline decoration-black/20 underline-offset-2">
                Features
              </span>
            </h2>
            <p className="text-[15.5px] leading-7 text-brand-gray-dark max-w-3xl mx-auto">
              Our low-energy computing solutions focus on sustainability,
              real-time intelligence, and seamless sensor integration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl p-8 ring-1 ring-black/10 bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-50 ring-1 ring-black/5 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-9 h-9 text-brand-gray-dark" />
                  </div>
                </div>
                <h3 className="text-[22px] font-semibold text-brand-gray-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-6 text-brand-gray-dark/90 mb-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-14 md:py-16 bg-white/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-[28px] font-semibold sm:text-[32px] text-brand-gray-dark mb-4">
              Our{" "}
              <span className="underline decoration-black/20 underline-offset-2">
                Solutions
              </span>
            </h2>
            <p className="text-[15.5px] leading-7 text-brand-gray-dark max-w-3xl mx-auto">
              Real-world use cases of our Low Energy Computing Platforms
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="rounded-xl p-6 md:p-8 ring-1 ring-black/10 bg-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-[18px] font-semibold text-brand-gray-dark mb-4">
                  {solution.title}
                </h3>
                <p className="text-[15px] leading-6 text-brand-gray-dark">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="relative py-14 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-semibold sm:text-[32px] text-brand-gray-dark mb-4">
              <span className="underline decoration-black/20 underline-offset-2">
                Low Energy Computing
              </span>
            </h2>
            <p className="text-[15.5px] leading-7 text-brand-gray-dark max-w-3xl mx-auto">
              Explore a sample of our low energy embedded system in action.
            </p>
          </div>

          {/* Single Screenshot */}
          <div
            onClick={() => setSelectedImage(lecImg1)}
            className="cursor-pointer rounded-xl overflow-hidden ring-1 ring-black/10 bg-white/70 hover:bg-white transition-colors duration-300 flex items-center justify-center max-w-3xl mx-auto"
          >
            <img
              src={lecImg1}
              alt="Low Energy Computing Screenshot"
              className="max-h-[400px] w-auto object-contain"
            />
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-5xl max-h-[90vh]">
                <img
                  src={selectedImage}
                  alt="Expanded Screenshot"
                  className="w-auto max-h-[90vh] rounded-lg shadow-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black rounded-full px-3 py-1 text-sm font-semibold shadow"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-14 md:py-16"
        style={{
          background: "linear-gradient(135deg, #4ECCEF 0%, #3DB8E0 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-[28px] font-semibold sm:text-[32px] text-white mb-6">
            Ready to Build Sustainable Embedded Systems?
          </h2>
          <p className="text-[15.5px] leading-7 text-white/90 max-w-3xl mx-auto mb-8">
            Discover how our low energy computing expertise can power your IoT,
            automation, and sensor-driven applications.
          </p>
          <button className="inline-flex items-center gap-3 h-[44px] px-6 bg-white text-brand-gray-dark font-semibold rounded-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            <span>Get Started</span>
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LowEnergyComputing;
