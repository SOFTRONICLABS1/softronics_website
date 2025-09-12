import { useEffect } from "react";
import { FiDatabase, FiCpu, FiBarChart, FiArrowRight } from "react-icons/fi";

const DDPPlatform: React.FC = () => {
  const features = [
    {
      icon: FiDatabase,
      title: "ETL Layer",
      description: "Seamlessly transform diverse data sources into structured formats with dynamic time series data ingestion capability.",
      gradient: "from-brand-cyan to-brand-cyan/80"
    },
    {
      icon: FiCpu,
      title: "AI Layer",
      description: "Employ advanced algorithms for predictive analysis, revealing patterns and actionable insights.",
      gradient: "from-brand-orange to-brand-orange/80"
    },
    {
      icon: FiBarChart,
      title: "Visualization Layer",
      description: "Ensure data-driven decisions via customizable dashboards, charts, and reports.",
      gradient: "from-brand-gray-dark to-brand-gray-dark/80"
    }
  ];

  const solutions = [
    {
      title: "Employee Sentimeter",
      description: "We performed sentiment analysis for Employee Reviews, providing clear insights to organizations for decision-making regarding employee attrition rates, feedback from employees on management, work culture, and company benefits."
    },
    {
      title: "Product Sentimeter",
      description: "We conducted sentiment analysis for Product Reviews, enabling companies to gauge customer sentiments accurately."
    },
    {
      title: "Solar Panel Management and Smart Grid Management",
      description: "We developed energy efficiency meters for enhanced management of solar panels and smart grids."
    },
    {
      title: "Hotel Occupancy Dashboard",
      description: "Using the DDP platform, we created a user occupancy dashboard with indoor mapping and custom charts to assist hotel management in optimizing occupancy rates."
    }
  ];

  return (
    <div className="min-h-screen bg-hero text-brand-gray-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 md:py-32">
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="leading-tight text-[40px] font-semibold tracking-[-0.01em] sm:text-[48px] md:text-[56px] text-brand-gray-dark mb-6">
              DDP{" "}
              <span className="underline decoration-[#4ECCEF]/30 underline-offset-4">
                Dissection
              </span>{" "}
              Platform
            </h1>
            <p className="text-[20px] sm:text-[24px] text-brand-gray-dark max-w-4xl mx-auto leading-relaxed font-medium">
              Empower Your Data Journey
            </p>
            <p className="text-[15.5px] leading-7 text-brand-gray-dark max-w-5xl mx-auto mt-4">
              The DDP Dissection Platform is a cutting-edge three-layered architecture solution that seamlessly 
              combines Extract, Transform, Load (ETL), Artificial Intelligence (AI), and Visualization. 
              It is your one-stop solution for unlocking insights from your data, making data-driven decisions, 
              and achieving actionable results.
            </p>
          </div>

          {/* Video Section */}
          <div className="rounded-xl p-6 md:p-8 ring-1 ring-black/10 bg-white mb-16">
            <div className="text-center mb-8">
              <h2 className="text-[22px] font-semibold leading-7 sm:text-[24px] text-brand-gray-dark mb-4">
                Watch our video to see how DDP Dissection Platform transforms data into insights
              </h2>
              <div className="bg-white/50 rounded-xl p-4 sm:p-6 ring-1 ring-black/5">
                <video
                  className="w-full rounded-lg shadow-lg"
                  src="https://softroniclabs.com/videos/DDP_Dissection_Platform.mp4"
                  controls
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Key Features Section */}
      <section className="relative py-14 md:py-16 bg-white/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="mb-16">
            <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px] text-brand-gray-dark mb-4 text-center">
              Key{" "}
              <span className="underline decoration-black/20 underline-offset-2">
                Features
              </span>
            </h2>
            <p className="text-[15.5px] leading-7 text-brand-gray-dark max-w-3xl mx-auto text-center">
              DDP Dissection Platform offers a comprehensive three-layered architecture 
              that transforms raw data into actionable insights
            </p>
          </div>

          {/* Three-Layer Architecture Visualization */}
          <div className="relative mb-12">
            <div className="hidden lg:flex items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-4 text-[14px] font-semibold text-brand-gray-dark/70">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
                  <span>Data Sources</span>
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400/50 to-cyan-400/50"></div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"></div>
                  <span>ETL Processing</span>
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-teal-400/50 to-orange-400/50"></div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                  <span>AI Analysis</span>
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-400/50 to-purple-400/50"></div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  <span>Insights</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const colors = [
                { bg: 'rgba(59, 130, 246, 0.05)', accent: '#3b82f6', shadow: 'rgba(59, 130, 246, 0.15)' },
                { bg: 'rgba(249, 115, 22, 0.05)', accent: '#f97316', shadow: 'rgba(249, 115, 22, 0.15)' },
                { bg: 'rgba(107, 114, 128, 0.05)', accent: '#6b7280', shadow: 'rgba(107, 114, 128, 0.15)' }
              ];
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl p-8 ring-1 ring-black/10 bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  {/* Animated background gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors[index].bg} 0%, transparent 100%)`
                    }}
                  ></div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div 
                      className="w-full h-full rounded-full blur-2xl"
                      style={{ backgroundColor: colors[index].accent }}
                    ></div>
                  </div>

                  {/* Enhanced icon container */}
                  <div className="relative mb-8">
                    <div 
                      className="inline-flex items-center justify-center w-20 h-20 rounded-2xl ring-1 ring-black/5 group-hover:scale-110 transition-all duration-300"
                      style={{ 
                        backgroundColor: colors[index].bg,
                        boxShadow: `0 4px 20px ${colors[index].shadow}`
                      }}
                    >
                      <feature.icon 
                        className="w-9 h-9 transition-all duration-300" 
                        style={{ color: colors[index].accent }}
                      />
                    </div>
                    
                    {/* Number indicator */}
                    <div 
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold"
                      style={{ backgroundColor: colors[index].accent }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="text-[22px] font-semibold text-brand-gray-dark mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] leading-6 text-brand-gray-dark/90 mb-6">
                      {feature.description}
                    </p>
                    
                    {/* Interactive progress bar */}
                    <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                      <div className="flex-1 h-2 bg-black/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 delay-300 group-hover:w-full"
                          style={{ 
                            width: '0%',
                            backgroundColor: colors[index].accent
                          }}
                        ></div>
                      </div>
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ backgroundColor: colors[index].accent }}
                      >
                        <FiArrowRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div 
                    className="absolute top-0 right-0 w-16 h-16 -translate-y-8 translate-x-8 rotate-45 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: colors[index].accent }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Bottom connection visual */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full ring-1 ring-black/10 bg-white text-[14px] font-semibold text-brand-gray-dark">
              <span>Three-Layer Architecture</span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4ECCEF' }}></div>
              <span>Seamless Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="relative py-14 md:py-16 bg-white/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="mb-12">
            <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px] text-brand-gray-dark mb-4 text-center">
              Our{" "}
              <span className="underline decoration-black/20 underline-offset-2">
                Solutions
              </span>
            </h2>
            <p className="text-[15.5px] leading-7 text-brand-gray-dark max-w-3xl mx-auto text-center">
              Real-world applications of the DDP Dissection Platform
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
            <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px] text-brand-gray-dark mb-4">
              <span className="underline decoration-black/20 underline-offset-2">
                Screenshots
              </span>
            </h2>
            <p className="text-[15.5px] leading-7 text-brand-gray-dark max-w-3xl mx-auto">
              Explore some example screenshots showcasing the power of DDP Dissection Platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="rounded-xl aspect-video flex items-center justify-center ring-1 ring-black/10 bg-white/50 hover:bg-white transition-colors duration-300">
                <div className="text-center text-brand-gray-dark/60">
                  <FiBarChart className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-[14px] font-medium">Dashboard Screenshot {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-14 md:py-16" style={{ background: 'linear-gradient(135deg, #4ECCEF 0%, #3DB8E0 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px] text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-[15.5px] leading-7 text-white/90 max-w-3xl mx-auto mb-8">
            Get started with the DDP Dissection Platform and unlock the power of your data today.
          </p>
          <button 
            className="inline-flex items-center gap-3 h-[44px] px-6 bg-white text-brand-gray-dark font-semibold rounded-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Get Started</span>
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DDPPlatform;