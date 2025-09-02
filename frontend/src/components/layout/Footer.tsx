import type { FC } from "react";
import { Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import softLogo from "../../assets/images/soft-logo.png";

const Footer: FC = () => {
  return (
    <footer className="border-t relative overflow-hidden" style={{
        background: "linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 50%, #F0F0F0 100%)",
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
            <a href="#" className="text-orange-500 hover:text-cyan-500 transition-all duration-300 hover:scale-110 p-1 rounded-full hover:bg-orange-50">
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-orange-500 hover:text-cyan-500 transition-all duration-300 hover:scale-110 p-1 rounded-full hover:bg-orange-50">
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-orange-500 hover:text-cyan-500 transition-all duration-300 hover:scale-110 p-1 rounded-full hover:bg-orange-50">
              <Youtube size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-orange-500 hover:text-cyan-500 transition-all duration-300 hover:scale-110 p-1 rounded-full hover:bg-orange-50">
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
      <div className="text-white text-center py-3 sm:py-4 text-xs sm:text-sm relative overflow-hidden" style={{
        background: "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)"
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="relative z-10">
          <p className="font-medium">
            Copyright © {new Date().getFullYear()} Softroniclabs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
