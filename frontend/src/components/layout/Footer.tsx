import type { FC } from "react";
import { Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import softLogo from "../../assets/images/soft-logo.png";

const Footer: FC = () => {
  return (
    <footer className="border-t relative overflow-hidden bg-footer" style={{
        boxShadow: "0 -10px 30px rgba(255, 165, 0, 0.1)",
        borderTopColor: "rgba(255, 165, 0, 0.2)"
      }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-full opacity-50 -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-100 to-transparent rounded-full opacity-40 translate-y-12 -translate-x-12"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
        <div>
          <a href="/" className="block transition-transform hover:scale-105">
            <img
              src={softLogo}
              alt="Softroniclabs"
              className="h-10 sm:h-12 w-auto drop-shadow-sm"
              onError={(e) => {
                // Fallback to text if logo fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = document.createElement("h2");
                fallback.textContent = "Softroniclabs";
                fallback.className = "text-xl font-bold text-orange-500";
                target.parentNode?.insertBefore(fallback, target);
              }}
            />
          </a>
          <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
            <a 
              href="#" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:rotate-12"
              style={{
                color: 'var(--brand-cyan)',
                backgroundColor: 'rgba(78, 204, 239, 0.1)',
                boxShadow: '0 2px 8px rgba(78, 204, 239, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-cyan)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(78, 204, 239, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(78, 204, 239, 0.1)';
                e.currentTarget.style.color = 'var(--brand-cyan)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(78, 204, 239, 0.1)';
              }}
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:rotate-12"
              style={{
                color: 'var(--brand-cyan)',
                backgroundColor: 'rgba(78, 204, 239, 0.1)',
                boxShadow: '0 2px 8px rgba(78, 204, 239, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-cyan)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(78, 204, 239, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(78, 204, 239, 0.1)';
                e.currentTarget.style.color = 'var(--brand-cyan)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(78, 204, 239, 0.1)';
              }}
            >
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:rotate-12"
              style={{
                color: 'var(--brand-cyan)',
                backgroundColor: 'rgba(78, 204, 239, 0.1)',
                boxShadow: '0 2px 8px rgba(78, 204, 239, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-cyan)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(78, 204, 239, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(78, 204, 239, 0.1)';
                e.currentTarget.style.color = 'var(--brand-cyan)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(78, 204, 239, 0.1)';
              }}
            >
              <Youtube size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:rotate-12"
              style={{
                color: 'var(--brand-cyan)',
                backgroundColor: 'rgba(78, 204, 239, 0.1)',
                boxShadow: '0 2px 8px rgba(78, 204, 239, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-cyan)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(78, 204, 239, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(78, 204, 239, 0.1)';
                e.currentTarget.style.color = 'var(--brand-cyan)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(78, 204, 239, 0.1)';
              }}
            >
              <Facebook size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Ratings / Badges */}
          {/* <div className="mt-6 space-y-2">
            <img
              src="https://via.placeholder.com/100x40"
              alt="Clutch rating"
              className="h-8"
            />
            <img
              src="https://via.placeholder.com/80x30"
              alt="DMCA Protected"
              className="h-6"
            />
          </div> */}
        </div>

        {/* About Softroniclabs */}
        <div>
          <h3 className="font-bold border-b border-orange-200 pb-2 mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base relative">
            <span style={{ color: "#84807B" }}>
              About Softroniclabs
            </span>
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                Why Softroniclabs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold border-b border-orange-200 pb-2 mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base relative">
            <span style={{ color: "#84807B" }}>
              Services
            </span>
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                Digital Product Engineering
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                Cloud and DevOps Engineering
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                Data Engineering
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                AI/ML Engineering
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                Digital and Experience Engineering
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold border-b border-orange-200 pb-2 mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base relative">
            <span style={{ color: "#84807B" }}>
              Resources
            </span>
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                Ebooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">
                Case Studies
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="relative border-t border-t-zinc-200 py-2 sm:py-3 text-xs sm:text-sm text-center"
        // style={{
        //   background: 'linear-gradient(135deg, var(--brand-orange) 0%, var(--brand-orange-light) 50%, var(--brand-orange) 100%)',
        //   borderTopColor: 'rgba(255, 165, 0, 0.3)'
        // }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="relative z-10">
          <p className="text-brand-gray-dark font-medium">
            Copyright © {new Date().getFullYear()} Softroniclabs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
