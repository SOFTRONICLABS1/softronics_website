import { useEffect } from "react";
import { useAnalytics } from "../hooks/useAnalytics";
import { FiTrendingUp, FiShield, FiUsers, FiTarget, FiDatabase, FiMonitor, FiWifi, FiSun } from "react-icons/fi";
import analyticsImg from "../assets/images/Analytics.jpg";
import iofImg from "../assets/images/IOF.png";
import iotImg from "../assets/images/IOT.png";

const AnalyticsSolutions: React.FC = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView("Analytics Solutions - SoftronicLabs", {
      page: "analytics-solutions",
      section: "main",
    });
  }, [trackPageView]);

  const features = [
    {
      icon: FiMonitor,
      title: "Feature-rich User Dashboard",
      description: "Dashboard created will be highly customizable and configurable for user needs with advanced visualization capabilities."
    },
    {
      icon: FiDatabase,
      title: "Big Data Processing",
      description: "Processing of underlying data is carried out with a technology stack like python on big data platforms."
    },
    {
      icon: FiShield,
      title: "Security by Default",
      description: "We keep the security aspect of the analytics system by default for all our analytics solutions with inherent user management."
    },
    {
      icon: FiUsers,
      title: "User Management",
      description: "We provide inherent user management and administrative functionality by default for secure access control."
    }
  ];

  const useCases = [
    {
      icon: FiTarget,
      title: "Ads Campaign Management",
      description: "Manage Ads Campaign across multiple platforms in a single location for comprehensive oversight and optimization."
    },
    {
      icon: FiTrendingUp,
      title: "Dev-Ops Dashboard",
      description: "Integrate test results from different test levels (Unit Test, Functional Test, Performance test) at one place."
    }
  ];

  const solutions = [
    {
      title: "Employee Sentimeter",
      description: "We performed sentiment analysis for Employee Reviews, providing clear insights to organizations for decision-making regarding:",
      features: [
        "Employee attrition rates",
        "Feedback from employees on management",
        "Work culture assessment",
        "Company benefits analysis"
      ]
    },
    {
      title: "Product Sentimeter",
      description: "We conducted sentiment analysis for Product Reviews, enabling companies to gauge customer sentiments accurately and make data-driven product decisions."
    },
    {
      title: "Solar Panel Management and Smart Grid Management",
      description: "We developed energy efficiency meters for enhanced management of solar panels and smart grids, providing real-time monitoring and optimization."
    },
    {
      title: "Hotel Occupancy Dashboard",
      description: "Using the DDP platform, we created a user occupancy dashboard with indoor mapping and custom charts to assist hotel management in optimizing occupancy rates."
    }
  ];

  return (
    <div className="min-h-screen bg-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Analytics <span className="text-brand-orange">Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Powerful data insights through advanced analytics and visualization
            </p>
            <p className="text-lg text-gray-500 max-w-5xl mx-auto mt-4 leading-relaxed">
              Analytics solutions from SofTronicLabs concentrate on providing a feature-rich user dashboard for the 
              underlying data. Our dashboards are highly customizable and configurable for user needs, utilizing 
              open-source technologies to provide cost-effective solutions.
            </p>
          </div>

          {/* Hero Image */}
          <div className="bg-white rounded-2xl p-4 shadow-2xl mb-16">
            <div className="rounded-xl overflow-hidden">
              <img
                src={analyticsImg}
                alt="Analytics Dashboard - Real-time data visualization and insights"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Advanced analytics capabilities designed for modern business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange/80 mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We utilize modern open-source technologies for cost-effective solutions
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Backend Processing</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    Python on big data platforms
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    Open-source technologies
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    Scalable data processing
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frontend Technologies</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                    JavaScript frameworks
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                    Interactive visualizations
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                    Responsive design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Areas where we use our analytics system for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-cyan/80 mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="relative py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real-world applications of our analytics platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{solution.description}</p>
                {solution.features && (
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-r from-brand-orange to-brand-cyan">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Unlock Your Data Insights?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Get started with our analytics solutions and transform your data into actionable insights.
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <span>Contact Us</span>
            <FiTrendingUp className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsSolutions;