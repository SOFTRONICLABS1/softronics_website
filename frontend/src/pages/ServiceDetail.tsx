import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import { services } from '../utils/constants';
import { FiArrowLeft, FiCheck, FiArrowUpRight, FiCode, FiCloud, FiDatabase, FiSmartphone } from 'react-icons/fi';

// Icon mapping for services
const serviceIcons: Record<string, React.ComponentType<any>> = {
  FiCode,
  FiCloud,
  FiDatabase,
  FiSmartphone,
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { trackPageView, trackCustomEvent } = useAnalytics();
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    if (serviceId) {
      const foundService = services.find(s => s.id === serviceId);
      setService(foundService);
      
      if (foundService) {
        trackPageView(`Service Detail - ${foundService.title}`, {
          page: 'service_detail',
          // service: foundService.title,
          // service_id: serviceId
        });
      }
    }
  }, [serviceId, trackPageView]);

  const handleCTAClick = () => {
    trackCustomEvent('CTA Click', {
      cta_type: 'get_started',
      service: service?.title,
      page: 'service_detail'
    });
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
          >
            <FiArrowLeft className="mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = serviceIcons[service.icon] || FiCode;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-purple-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-purple-600">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-purple-600 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#38106F] via-[#572C98] to-[#6B35A8] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link
                to="/services"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Back to Services
              </Link>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-lg">
                  <ServiceIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {service.title}
                  </h1>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 group"
              >
                Get Started
                <FiArrowUpRight className="ml-2 w-5 h-5 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Capabilities</h3>
                <ul className="space-y-3">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-white/90">
                      <FiCheck className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What We Deliver
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  {service.id === '1' && (
                    <div>
                      <p className="text-gray-700 mb-6">
                        Our Digital Product Engineering services encompass the entire product development lifecycle, from initial concept and strategy to final deployment and ongoing support. We combine technical expertise with business acumen to create products that not only meet your requirements but exceed market expectations.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h3>
                      <ul className="space-y-2 text-gray-700 mb-6">
                        <li>• Agile development methodologies for rapid iteration</li>
                        <li>• User-centered design principles for optimal UX</li>
                        <li>• Scalable architecture for future growth</li>
                        <li>• Comprehensive testing and quality assurance</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies We Use</h3>
                      <p className="text-gray-700">
                        React, Angular, Vue.js, Node.js, Python, Java, .NET, React Native, Flutter, AWS, Azure, GCP, Docker, Kubernetes, and more.
                      </p>
                    </div>
                  )}
                  
                  {service.id === '2' && (
                    <div>
                      <p className="text-gray-700 mb-6">
                        Transform your infrastructure with our comprehensive Cloud & DevOps Engineering services. We help organizations migrate to the cloud, optimize existing cloud environments, and implement robust DevOps practices for faster, more reliable software delivery.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Services</h3>
                      <ul className="space-y-2 text-gray-700 mb-6">
                        <li>• Cloud migration and modernization</li>
                        <li>• Multi-cloud and hybrid cloud strategies</li>
                        <li>• Infrastructure as Code (IaC)</li>
                        <li>• Cloud security and compliance</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps Excellence</h3>
                      <p className="text-gray-700">
                        CI/CD pipelines, containerization, monitoring, automated testing, and continuous improvement processes.
                      </p>
                    </div>
                  )}
                  
                  {service.id === '3' && (
                    <div>
                      <p className="text-gray-700 mb-6">
                        Unlock the power of your data with our comprehensive Data Engineering solutions. We build robust, scalable data pipelines and analytics platforms that transform raw data into actionable business insights.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Pipeline Development</h3>
                      <ul className="space-y-2 text-gray-700 mb-6">
                        <li>• Real-time and batch processing systems</li>
                        <li>• Data lake and data warehouse solutions</li>
                        <li>• ETL/ELT pipeline automation</li>
                        <li>• Data quality and validation frameworks</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & BI</h3>
                      <p className="text-gray-700">
                        Advanced analytics, business intelligence dashboards, and self-service analytics platforms.
                      </p>
                    </div>
                  )}
                  
                  {(service.id === '4' || service.id === '5') && (
                    <div>
                      <p className="text-gray-700 mb-6">
                        {service.description} Our expert team combines cutting-edge technology with industry best practices to deliver solutions that drive real business value.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-2 text-gray-700 mb-6">
                        {service.features.map((feature: string, index: number) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                      <p className="text-gray-700">
                        Improved efficiency, reduced costs, enhanced user experience, and accelerated time-to-market.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss how we can help transform your business with {service.title.toLowerCase()}.
                </p>
                <Link
                  to="/#contact"
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 text-center block"
                >
                  Contact Us Today
                </Link>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Related Services
                </h3>
                <div className="space-y-3">
                  {services.filter(s => s.id !== service.id).slice(0, 3).map((relatedService) => {
                    const RelatedIcon = serviceIcons[relatedService.icon] || FiCode;
                    return (
                      <Link
                        key={relatedService.id}
                        to={`/services/${relatedService.id}`}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                          <RelatedIcon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors text-sm">
                            {relatedService.title}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how our {service.title.toLowerCase()} can help accelerate your digital transformation.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 group"
            onClick={handleCTAClick}
          >
            Start Your Project
            <FiArrowUpRight className="ml-2 w-5 h-5 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;