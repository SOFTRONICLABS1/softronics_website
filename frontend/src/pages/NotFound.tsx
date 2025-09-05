import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import { FiHome, FiArrowRight, FiSearch } from 'react-icons/fi';

const NotFound = () => {
  const { trackPageView, trackCustomEvent } = useAnalytics();
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView('404 Not Found - SoftronicLabs Portfolio', {
      page: '404',
      section: 'error'
    });
  }, [trackPageView]);

  const handleLinkClick = (linkType: string) => {
    trackCustomEvent('404 Navigation', {
      link_type: linkType,
      page: '404'
    });
  };

  const handleContactClick = () => {
    trackCustomEvent('404 Navigation', {
      link_type: 'contact',
      page: '404'
    });
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0E8FA] via-[#E8D6F7] to-[#D9C3FF] flex items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold text-purple-200 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <FiSearch className="w-12 h-12 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Navigation Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            to="/"
            onClick={() => handleLinkClick('home')}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <FiHome className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Go Home</h3>
            <p className="text-gray-600 text-sm">Return to our homepage</p>
          </Link>

          <Link
            to="/services"
            onClick={() => handleLinkClick('services')}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <span className="text-xl">⚙️</span>
            </div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Our Services</h3>
            <p className="text-gray-600 text-sm">Explore what we offer</p>
          </Link>

          <Link
            to="/about"
            onClick={() => handleLinkClick('about')}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <span className="text-xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">About Us</h3>
            <p className="text-gray-600 text-sm">Learn more about our company</p>
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-semibold text-purple-900 mb-6">Popular Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { to: '/industries', label: 'Industries We Serve', icon: '🏢' },
              { to: '/case-studies', label: 'Case Studies', icon: '📊' },
              { to: '/services/1', label: 'Digital Product Engineering', icon: '💻' },
              { to: '/services/2', label: 'Cloud & DevOps', icon: '☁️' }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                onClick={() => handleLinkClick(link.label.toLowerCase().replace(/\s+/g, '_'))}
                className="flex items-center justify-between p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{link.icon}</span>
                  <span className="text-gray-700 group-hover:text-purple-600 transition-colors">
                    {link.label}
                  </span>
                </div>
                <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Still can't find what you're looking for?
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 group"
          >
            Contact Us
            <FiArrowRight className="ml-2 w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-purple-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default NotFound;