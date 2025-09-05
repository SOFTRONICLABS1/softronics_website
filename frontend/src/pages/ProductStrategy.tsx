import { useEffect, useState } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import softCircle from '../assets/images/soft-logo2.webp';
import ProductStrategyFeatures from '../components/sections/ProductStrategyFeatures';
import Testimonials from '../components/sections/Testimonials';
import CaseStudies from '../components/sections/CaseStudies';
import ContactForm from '../components/sections/ContactForm';

interface MenuItem {
  id: string;
  title: string;
  content: {
    description: string;
    details: string;
  };
}

const ProductStrategy = () => {
  const { trackPageView, trackCTAClick } = useAnalytics();
  const [activeMenuItem, setActiveMenuItem] = useState('focus-workshops');

  useEffect(() => {
    trackPageView('Product Strategy - SoftronicLabs Portfolio', {
      page: 'product-strategy',
      section: 'main'
    });
  }, [trackPageView]);

  const handleCTAClick = () => {
    trackCTAClick("I'd Like To Know More!", "product_strategy_hero", "primary", {
      section: "hero",
      page: "product-strategy",
    });
  };

  const menuItems: MenuItem[] = [
    {
      id: 'focus-workshops',
      title: 'Focus workshops',
      content: {
        description: 'We collaborate closely with your team to identify quick wins and monetization opportunities that will provide the most value for your product and users.',
        details: 'Our consultants align business objectives with product development, ensuring every feature adds value and meets market demands while avoiding technical debt to support future scalability.'
      }
    },
    {
      id: 'engineering-projections',
      title: 'Engineering projections',
      content: {
        description: 'Strategic technical roadmapping that aligns your engineering capacity with business objectives and market opportunities.',
        details: 'We analyze your current tech stack, team velocity, and resource constraints to create realistic timelines and identify potential bottlenecks before they impact delivery.'
      }
    },
    {
      id: 'distribution-adoption',
      title: 'Distribution and adoption planning',
      content: {
        description: 'Comprehensive go-to-market strategies that ensure your product reaches the right audience through optimal channels.',
        details: 'From user acquisition funnels to retention strategies, we help you build sustainable growth mechanisms that scale with your product evolution.'
      }
    },
    {
      id: 'success-metrics',
      title: 'Success metrics',
      content: {
        description: 'Define and implement meaningful KPIs that drive product decisions and demonstrate business value.',
        details: 'We establish measurement frameworks that track both leading and lagging indicators, enabling data-driven product iterations and strategic pivots.'
      }
    }
  ];

  const activeItem = menuItems.find(item => item.id === activeMenuItem) || menuItems[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-16 sm:pt-20 pb-12 sm:pb-20">
        {/* Background with geometric shapes */}
        <div 
          className="absolute inset-0 z-0 bg-hero"
        >
          {/* Geometric diamond shapes - responsive sizes */}
          {/* <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 transform rotate-45"
              style={{
                background: 'linear-gradient(135deg, var(--brand-orange-variant) 0%, var(--brand-orange-light) 100%)',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
              }}
            ></div>
            <div 
              className="absolute top-3/4 right-1/3 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 transform rotate-12"
              style={{
                background: 'linear-gradient(135deg, var(--brand-cyan-alt) 0%, var(--brand-cyan) 100%)',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
              }}
            ></div>
            <div 
              className="absolute top-1/2 right-1/6 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 transform -rotate-30"
              style={{
                background: 'var(--gradient-orange-primary)',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
              }}
            ></div>
          </div> */}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Mobile Layout - Centered overlay with background logo */}
          <div className="lg:hidden relative min-h-[70vh] flex items-center justify-center">
            {/* Background Logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <img
                src={softCircle}
                alt="SoftronicLabs Logo"
                className="w-full h-auto max-w-[280px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-[420px] opacity-30 scale-110"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 max-w-2xl text-center mx-auto px-4 py-12">
              {/* Tag */}
              <div className="mb-6 sm:mb-8">
                <span 
                  className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded text-white font-semibold text-xs sm:text-sm tracking-wide"
                  style={{ backgroundColor: 'var(--brand-orange)' }}
                >
                  Product strategy consulting
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gray-dark mb-4 sm:mb-6 leading-tight"
                  style={{ textShadow: "0 2px 8px rgba(255,255,255,0.8)" }}>
                Your first step towards long-term product success
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-brand-gray-dark mb-6 sm:mb-8 leading-relaxed"
                 style={{ textShadow: "0 1px 6px rgba(255,255,255,0.8)" }}>
                We combine your product vision with our engineering expertise and domain understanding to craft a product strategy that lays down preferred methodologies, tech stack, and projections to help you quickly realize business objectives.
              </p>

              {/* CTA Button */}
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-white w-full sm:w-auto"
                style={{
                  backgroundColor: 'var(--brand-button-primary)',
                  boxShadow: '0 4px 15px var(--shadow-cyan)'
                }}
              >
                I'd Like To Know More!
              </button>
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12 items-center lg:items-center">
            {/* Content */}
            <div className="max-w-4xl">
              {/* Tag */}
              <div className="mb-6 sm:mb-8">
                <span 
                  className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded text-white font-semibold text-xs sm:text-sm tracking-wide"
                  style={{ backgroundColor: 'var(--brand-orange)' }}
                >
                  Product strategy consulting
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-brand-gray-dark mb-4 sm:mb-6 leading-tight">
                Your first step towards long-term product success
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl lg:text-[22px] text-brand-gray-dark mb-6 sm:mb-8 leading-relaxed max-w-3xl">
                We combine your product vision with our engineering expertise and domain understanding to craft a product strategy that lays down preferred methodologies, tech stack, and projections to help you quickly realize business objectives.
              </p>

              {/* CTA Button */}
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-white w-full sm:w-auto"
                style={{
                  backgroundColor: 'var(--brand-button-primary)',
                  boxShadow: '0 4px 15px var(--shadow-cyan)'
                }}
              >
                I'd Like To Know More!
              </button>
            </div>

            {/* Hero Logo */}
            <div className="relative lg:-mt-16 xl:-mt-24 flex justify-end">
              <img
                src={softCircle}
                alt="SoftronicLabs Logo"
                className="relative z-1 w-full h-auto max-w-lg scale-[1.8] origin-center ml-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How SoftronicLabs helps Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How <span className="text-brand-cyan">SoftronicLabs</span> <span className="text-brand-gray-dark">helps:</span>
            </h2>
          </div>

          {/* Mobile: Stacked Layout */}
          <div className="lg:hidden space-y-6">
            {menuItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveMenuItem(activeMenuItem === item.id ? '' : item.id)}
                  className="w-full text-left px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-gray-900">{item.title}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 text-gray-600 ${
                      activeMenuItem === item.id ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {activeMenuItem === item.id && (
                  <div className="px-4 pb-6 pt-2 bg-gray-50">
                    <p className="text-base mb-4 leading-relaxed text-brand-gray-dark">
                      {item.content.description}
                    </p>
                    <p className="text-sm leading-relaxed text-brand-gray">
                      {item.content.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12">
            {/* Left Navigation Menu */}
            <div className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMenuItem(item.id)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-between group ${
                    activeMenuItem === item.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: activeMenuItem === item.id ? 'var(--brand-cyan)' : 'transparent'
                  }}
                >
                  <span className="font-semibold text-lg">{item.title}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeMenuItem === item.id ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Right Content Area */}
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-brand-gray-dark mb-6">
                  {activeItem.title}
                </h3>
                
                <p className="text-lg text-brand-gray-dark mb-6 leading-relaxed">
                  {activeItem.content.description}
                </p>
                
                <p className="text-base text-brand-gray leading-relaxed">
                  {activeItem.content.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Strategy Features Section */}
      <ProductStrategyFeatures />
      <Testimonials />
      <CaseStudies />
      <ContactForm />
    </div>
  );
};

export default ProductStrategy;