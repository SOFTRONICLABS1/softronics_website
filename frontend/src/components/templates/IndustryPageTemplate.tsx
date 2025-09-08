import { useEffect, useState } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import softCircle from '../../assets/images/soft-logo2.webp';
import Testimonials from '../sections/Testimonials';
import CaseStudies from '../sections/CaseStudies';
import ContactForm from '../sections/ContactForm';
import IndustryServicesGrid from '../sections/IndustryServicesGrid';
import '../sections/HeroStripes.css';
import type { IndustryPageProps } from '../../types/IndustryPage';

const IndustryPageTemplate = ({ 
  pageConfig, 
  capabilities, 
  serviceCards,
  sectionTitle, 
  additionalSections = [] 
}: IndustryPageProps) => {
  const { trackPageView, trackCTAClick } = useAnalytics();
  const [activeCapability, setActiveCapability] = useState(capabilities[0]?.id || '');

  useEffect(() => {
    trackPageView(pageConfig.analytics.pageTitle, {
      page: pageConfig.analytics.page,
      section: 'main'
    });
  }, [trackPageView, pageConfig.analytics.pageTitle, pageConfig.analytics.page]);

  const handleCTAClick = () => {
    trackCTAClick("I'd Like To Know More!", pageConfig.analytics.ctaEventName, "primary", {
      section: pageConfig.analytics.ctaSection,
      page: pageConfig.analytics.page,
    });
  };

  const activeItem = capabilities.find(item => item.id === activeCapability) || capabilities[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-4 sm:pt-20 md:pt-24 lg:pt-28 pb-4 sm:pb-16 md:pb-20 lg:pb-28"
        // style={{ background: "var(--bg-hero)" }}
      >
        {/* Animated Vertical Stripes */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden z-0">
          <div className="w-[80px] sm:w-[120px] md:w-[140px] lg:w-[180px] h-full relative">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute h-full vl-fade hero-stripe"
                style={{
                  left: `${i * 12}px`,
                  animationDuration: `${3 + i * 0.2}s`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Blobs */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          {/* Orange Blob */}
          <div className="absolute top-28 -left-32 w-[36rem] h-[36rem] bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          
          {/* Cyan Blob */}
          <div className="absolute top-1/4 -right-40 w-[34rem] h-[34rem] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          
          {/* Orange-Pink Blob */}
          <div className="absolute bottom-0 left-1/3 w-[34rem] h-[34rem] bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-fit z-10">
          <div 
            className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12 
                  items-center justify-center text-center 
                  lg:justify-between lg:text-left"
          >
            {/* Content */}
            <div className="max-w-2xl mt-10 text-center lg:text-left mx-auto lg:mx-0">
              {/* Tag */}
              <div className="mb-4 sm:mb-6">
                <span 
                  className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded text-white font-semibold text-xs sm:text-sm tracking-wide"
                  style={{ backgroundColor: 'var(--brand-orange)' }}
                >
                  {pageConfig.tag}
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[700] leading-tight mb-4 sm:mb-6">
                {pageConfig.title}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {pageConfig.description}
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
                <button
                  onClick={handleCTAClick}
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-lg font-semibold text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 min-h-[44px] w-full sm:w-auto group"
                  style={{
                    background: "var(--brand-cyan)",
                    boxShadow: "0 4px 15px var(--shadow-orange)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--brand-cyan)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--brand-cyan)";
                  }}
                >
                  <span>I'd Like To Know More!</span>
                </button>
              </div>
            </div>

            {/* Hero Logo */}
            <div 
              className="relative mt-4 sm:mt-6 lg:-mt-16 xl:-mt-24
            flex justify-center lg:justify-end order-last lg:order-last"
            >
              <img
                src={softCircle}
                alt="SoftronicLabs Logo"
                className="relative z-1 w-full h-auto
               max-w-[280px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-lg
               scale-[1.3] xs:scale-[1.85] sm:scale-[1.85] md:scale-100 lg:scale-[1.8]
               origin-center mx-auto lg:mx-0 lg:ml-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Capabilities Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {sectionTitle}
            </h2>
          </div>

          {/* Mobile: Stacked Layout */}
          <div className="lg:hidden space-y-6">
            {capabilities.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveCapability(activeCapability === item.id ? '' : item.id)}
                  className="w-full text-left px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-gray-900">{item.title}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 text-gray-600 ${
                      activeCapability === item.id ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {activeCapability === item.id && (
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
              {capabilities.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveCapability(item.id)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-between group ${
                    activeCapability === item.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: activeCapability === item.id ? 'var(--brand-cyan)' : 'transparent'
                  }}
                >
                  <span className="font-semibold text-lg">{item.title}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeCapability === item.id ? 'rotate-90' : ''
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

      {/* Services Grid Section */}
      <IndustryServicesGrid
        title="Your edge in BFSI innovation"
        subtitle="Simform has comprehensive engineering experience that spans across diverse segments of the financial services industry, helping businesses navigate complex challenges and capitalize on opportunities for growth and innovation."
        cards={serviceCards}
      />

      {/* Additional Sections */}
      {additionalSections.map((section, index) => (
        <div key={index}>{section}</div>
      ))}

      {/* Standard Sections */}
      <Testimonials />
      <CaseStudies />
      <ContactForm />
    </div>
  );
};

export default IndustryPageTemplate;