import { FiCode, FiCloud, FiDatabase, FiCpu, FiSmartphone, FiArrowRight } from 'react-icons/fi';
import { services } from '../../utils/constants';

const iconMap = {
  FiCode: FiCode,
  FiCloud: FiCloud,
  FiDatabase: FiDatabase,
  FiBrain: FiCpu,
  FiSmartphone: FiSmartphone,
};

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
              🔧 Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Engineering Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ideation to deployment, we provide end-to-end technology solutions that drive business growth and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary-200"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="group/btn flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                  <span>Learn More</span>
                  <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our engineering expertise can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;