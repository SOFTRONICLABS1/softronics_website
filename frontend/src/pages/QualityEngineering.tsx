import { useEffect, useState } from "react";
import { useAnalytics } from "../hooks/useAnalytics";
import softCircle from "../assets/images/soft-logo2.webp";
import Testimonials from "../components/sections/Testimonials";
import CaseStudies from "../components/sections/CaseStudies";
import ContactForm from "../components/sections/ContactForm";

interface MenuItem {
  id: string;
  title: string;
  content: {
    description: string;
    details: string;
  };
}

const QualityEngineering = () => {
  const { trackPageView, trackCTAClick } = useAnalytics();
  const [activeMenuItem, setActiveMenuItem] = useState("test-automation");

  useEffect(() => {
    trackPageView("Quality Engineering - SoftronicLabs Portfolio", {
      page: "quality-engineering",
      section: "main",
    });
  }, [trackPageView]);

  const handleCTAClick = () => {
    trackCTAClick(
      "I'd Like To Know More!",
      "quality_engineering_hero",
      "primary",
      {
        section: "hero",
        page: "quality-engineering",
      }
    );
  };

  const menuItems: MenuItem[] = [
    {
      id: "test-automation",
      title: "Test automation",
      content: {
        description:
          "Our test automation services leverage low-code advanced scripting for various interfaces, from web to mobile. We identify ideal automation interfaces, unify frameworks and tools, and create reusable components and libraries.",
        details:
          "This approach significantly reduces manual testing efforts, improves test coverage, and enables faster, more reliable releases across diverse product ecosystems.",
      },
    },
    {
      id: "non-functional-testing",
      title: "Non-functional testing",
      content: {
        description:
          "Comprehensive performance, security, and usability testing to ensure your applications meet quality standards under various conditions.",
        details:
          "We conduct load testing, stress testing, security audits, and accessibility testing to identify bottlenecks and vulnerabilities before they impact your users.",
      },
    },
    {
      id: "shift-left-testing",
      title: "Shift-left testing",
      content: {
        description:
          "Early integration of testing practices in the development lifecycle to catch defects sooner and reduce overall project costs.",
        details:
          "By implementing testing strategies from the beginning of development, we help teams identify issues early, improve code quality, and accelerate delivery timelines.",
      },
    },
    {
      id: "qa-governance",
      title: "QA governance",
      content: {
        description:
          "Establish robust quality assurance processes, standards, and frameworks to ensure consistent quality across your organization.",
        details:
          "We help define QA strategies, implement testing standards, establish metrics and KPIs, and create governance frameworks that scale with your business growth.",
      },
    },
  ];

  const activeItem =
    menuItems.find((item) => item.id === activeMenuItem) || menuItems[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-16 sm:pt-20 pb-12 sm:pb-20">
        {/* Background with geometric shapes */}

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
                  style={{ backgroundColor: "var(--brand-orange)" }}
                >
                  QA engineering
                </span>
              </div>

              {/* Main heading */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gray-dark mb-4 sm:mb-6 leading-tight"
                style={{ textShadow: "0 2px 8px rgba(255,255,255,0.8)" }}
              >
                Strategic QA engineering to enhance business outcomes
              </h1>

              {/* Description */}
              <p
                className="text-lg sm:text-xl text-brand-gray-dark mb-6 sm:mb-8 leading-relaxed"
                style={{ textShadow: "0 1px 6px rgba(255,255,255,0.8)" }}
              >
                We develop and execute QA strategies that stem from the mapping
                of quality goals to your business objectives.
              </p>

              {/* CTA Button */}
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-white w-full sm:w-auto"
                style={{
                  backgroundColor: "var(--brand-button-primary)",
                  boxShadow: "0 4px 15px var(--shadow-cyan)",
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
                  style={{ backgroundColor: "var(--brand-orange)" }}
                >
                  QA engineering
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-brand-gray-dark mb-4 sm:mb-6 leading-tight">
                Strategic QA engineering to enhance business outcomes
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl lg:text-[22px] text-brand-gray-dark mb-6 sm:mb-8 leading-relaxed max-w-3xl">
                We develop and execute QA strategies that stem from the mapping
                of quality goals to your business objectives.
              </p>

              {/* CTA Button */}
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-white w-full sm:w-auto"
                style={{
                  backgroundColor: "var(--brand-button-primary)",
                  boxShadow: "0 4px 15px var(--shadow-cyan)",
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

      {/* QA Engineering Capabilities Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-brand-cyan">SoftronicLabs'</span>{" "}
              <span className="text-brand-gray-dark">
                QA engineering capabilities
              </span>
            </h2>
          </div>

          {/* Mobile: Stacked Layout */}
          <div className="lg:hidden space-y-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveMenuItem(activeMenuItem === item.id ? "" : item.id)
                  }
                  className="w-full text-left px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-gray-900">
                    {item.title}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 text-gray-600 ${
                      activeMenuItem === item.id ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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
                      ? "text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  style={{
                    backgroundColor:
                      activeMenuItem === item.id
                        ? "var(--brand-cyan)"
                        : "transparent",
                  }}
                >
                  <span className="font-semibold text-lg">{item.title}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeMenuItem === item.id ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Right Content Area */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
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

      {/* Reusable Sections */}
      <Testimonials />
      <CaseStudies />
      <ContactForm />
    </div>
  );
};

export default QualityEngineering;
