import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { caseStudies } from '../../utils/constants';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              📈 Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Proven{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable growth through innovative technology solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-dark-900 mb-4">
                    {study.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Key Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                    <span>View Full Case Study</span>
                    <FiExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="group bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-primary-500 px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2">
                    <span>Similar Projects</span>
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Image/Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                  {/* Mockup Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="ml-4 bg-gray-100 rounded px-3 py-1 text-xs text-gray-600">
                        {study.title.toLowerCase().replace(/\s+/g, '-')}.app
                      </div>
                    </div>

                    {/* Content Mockup */}
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-primary-200 to-primary-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6"></div>
                    </div>

                    {/* Chart/Graph Mockup */}
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 mt-6">
                      <div className="flex items-end space-x-2 h-20">
                        <div className="bg-primary-400 w-4 h-8 rounded-t"></div>
                        <div className="bg-primary-500 w-4 h-12 rounded-t"></div>
                        <div className="bg-primary-600 w-4 h-16 rounded-t"></div>
                        <div className="bg-secondary-500 w-4 h-20 rounded-t"></div>
                        <div className="bg-secondary-600 w-4 h-14 rounded-t"></div>
                        <div className="bg-secondary-400 w-4 h-10 rounded-t"></div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-green-100 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-green-700">↑ 300%</div>
                        <div className="text-xs text-green-600">Performance</div>
                      </div>
                      <div className="bg-blue-100 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-blue-700">99.9%</div>
                        <div className="text-xs text-blue-600">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;