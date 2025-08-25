import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary-400 mb-4">Softronics</h3>
              <p className="text-gray-300 mb-6">
                Engineering the next best thing for the digital world. We consult, engineer, and design technology solutions to address complex business challenges.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">contact@softronics.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Digital Product Engineering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Cloud & DevOps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Data Engineering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">AI/ML Engineering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Digital Experience</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Whitepapers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Leadership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">News & Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links & Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
            
            <div className="flex space-x-6 items-center">
              <div className="bg-gray-700 px-4 py-2 rounded-md">
                <span className="text-sm text-gray-300">⭐ Clutch Top Rated</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-md">
                <span className="text-sm text-gray-300">🏆 G2 Leader</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-md">
                <span className="text-sm text-gray-300">🔥 Google Premier</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Simform. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;