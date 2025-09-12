import { useEffect, useRef } from "react";
import { FiUsers, FiTrendingUp, FiBookOpen } from "react-icons/fi";
import { useAnalytics } from "../../hooks/useAnalytics";

const WhyChooseUs = () => {
  const { trackCustomEvent } = useAnalytics();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackCustomEvent('Section View', {
              section: 'why_choose_us',
              section_name: 'Why Choose SofTronicLabs',
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

  const reasons = [
    {
      icon: FiUsers,
      title: "We listen, discuss, advise and develop",
      description: "We understand technology and our clients' needs, enabling us to design predictive solutions that create win-win situations for all stakeholders.",
      color: "text-brand-cyan"
    },
    {
      icon: FiTrendingUp,
      title: "Feature-rich, professional products",
      description: "We anticipate every engineering aspect - functional, performance, and security - delivering high-quality solutions with modern CI/CD practices.",
      color: "text-brand-orange"
    },
    {
      icon: FiBookOpen,
      title: "Latest technologies and continuous learning",
      description: "We stay ahead by learning new technologies and leveraging advanced open-source solutions to provide cutting-edge services to our clients.",
      color: "text-brand-gray-dark"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-hero py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-brand-orange">SofTronicLabs</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industrial proven process with ultra-high speed delivery and open-source expertise.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Icon */}
              <div className="mb-4">
                <reason.icon className={`w-8 h-8 ${reason.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are true believers in the Agile methodology of the development process and are very agile to adapt ourselves to the changing world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;