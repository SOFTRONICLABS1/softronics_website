import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import { navigationItems, iconMap } from '../utils/constants';
import { FiChevronRight, FiArrowUpRight } from 'react-icons/fi';

const Industries = () => {
  const { trackPageView, trackCustomEvent } = useAnalytics();

  useEffect(() => {
    trackPageView('Industries - SoftronicLabs Portfolio', {
      page: 'industries',
      section: 'main'
    });
  }, [trackPageView]);

  // Find the industries menu data
  const industriesMenu = navigationItems.find(item => item.label === 'Industries')?.megaMenu;

  // Healthcare section that should only appear on Industries page, not in navbar
  const healthcareColumn = {
    title: "Healthcare & Life Sciences",
    items: [
      { label: "Healthcare Solutions", href: "/industries" },
      { label: "Telemedicine Platforms", href: "/industries" },
      { label: "Medical Device Integration", href: "/industries" },
    ],
  };

  const handleIndustryClick = (industryName: string) => {
    trackCustomEvent('Industry Click', {
      industry: industryName,
      page: 'industries',
      section: 'industries_grid'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-hero">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        {/* Background decoration */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-[900px] w-[900px] rounded-full bg-gradient-to-tr from-orange-200/50 to-transparent blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-gray-dark mb-4 sm:mb-6">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-8 sm:mb-12">
            Delivering tailored technology solutions across diverse industries with deep domain expertise and innovative approaches.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {industriesMenu && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Healthcare column first */}
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-gray-dark mb-6 sm:mb-8 text-center bg-white/60 backdrop-blur-sm rounded-lg py-3 px-4 shadow-sm relative z-10">
                  {healthcareColumn.title}
                </h2>
                
                <div className="space-y-3 sm:space-y-4">
                  {healthcareColumn.items.map((industry) => {
                    const Icon = iconMap[industry.label] || FiChevronRight;
                    
                    return (
                      <div
                        key={industry.label}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                        onClick={() => handleIndustryClick(industry.label)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 service-card-gradient-1 rounded-lg group-hover:service-card-gradient-2 transition-colors flex-shrink-0">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-base sm:text-lg font-semibold text-brand-gray-dark group-hover:text-brand-orange transition-colors leading-tight">
                                {industry.label}
                              </h3>
                              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                                Innovative solutions tailored for your industry
                              </p>
                            </div>
                          </div>
                          <FiArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange group-hover:text-brand-cyan group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Navbar columns */}
              {industriesMenu.columns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-gray-dark mb-6 sm:mb-8 text-center bg-white/60 backdrop-blur-sm rounded-lg py-3 px-4 shadow-sm relative z-10">
                    {column.title}
                  </h2>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {column.items.map((industry) => {
                      const Icon = iconMap[industry.label] || FiChevronRight;
                      
                      return (
                        <div
                          key={industry.label}
                          className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                          onClick={() => handleIndustryClick(industry.label)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 service-card-gradient-1 rounded-lg group-hover:service-card-gradient-2 transition-colors flex-shrink-0">
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-base sm:text-lg font-semibold text-brand-gray-dark group-hover:text-brand-orange transition-colors leading-tight">
                                  {industry.label}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                                  Innovative solutions tailored for your industry
                                </p>
                              </div>
                            </div>
                            <FiArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange group-hover:text-brand-cyan group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-gray-dark mb-4 sm:mb-6">
                Why Industries Choose SoftronicLabs
              </h2>
              <p className="text-base sm:text-lg text-gray-800 max-w-3xl mx-auto">
                Our industry-specific expertise combined with cutting-edge technology ensures transformative solutions that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Domain Expertise",
                  description: "Deep understanding of industry-specific challenges and regulatory requirements.",
                  icon: "🎯"
                },
                {
                  title: "Proven Track Record",
                  description: "Successfully delivered 200+ projects across various industries with measurable impact.",
                  icon: "🏆"
                },
                {
                  title: "Innovation Focus",
                  description: "Cutting-edge technologies including AI/ML, cloud, and digital transformation.",
                  icon: "🚀"
                },
                {
                  title: "Agile Delivery",
                  description: "Fast, flexible, and collaborative approach to ensure rapid time-to-market.",
                  icon: "⚡"
                },
                {
                  title: "Compliance Ready",
                  description: "Built-in security and compliance measures for regulated industries.",
                  icon: "🔒"
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock support and maintenance for mission-critical applications.",
                  icon: "🛟"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="service-card-gradient-3 rounded-2xl p-6 sm:p-8 md:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Let's discuss how we can help accelerate your digital transformation with industry-specific solutions.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center bg-white text-brand-gray-dark px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-brand-cyan hover:text-white transition-colors duration-300 group text-sm sm:text-base"
            >
              Get Started Today
              <FiArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;