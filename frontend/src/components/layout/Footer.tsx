import type { FC } from "react";
import { Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import softLogo from "../../assets/images/soft-logo.png";

const Footer: FC = () => {
  return (
    <footer className="bg-[#F0E8FA] shadow-[0_-10px_30px_rgba(103,64,186,0.3)] border-t border-[#6740BA]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <a href="/">
            <img
              src={softLogo}
              alt="Softroniclabs"
              className="h-10 sm:h-12 w-auto"
              onError={(e) => {
                // Fallback to text if logo fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = document.createElement("h2");
                fallback.textContent = "Softroniclabs";
                fallback.className = "text-xl font-bold text-[#9C27B0]";
                target.parentNode?.insertBefore(fallback, target);
              }}
            />
          </a>
          <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4 text-[#6A1B9A]">
            <a href="#">
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#">
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#">
              <Youtube size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#">
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
          <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2 sm:mb-3 text-[#6740BA] text-sm sm:text-base">
            About Softroniclabs
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Why Softroniclabs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2 sm:mb-3 text-[#6740BA] text-sm sm:text-base">
            Services
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Digital Product Engineering
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Cloud and DevOps Engineering
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Data Engineering
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                AI/ML Engineering
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Digital and Experience Engineering
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold border-b border-gray-300 pb-1 mb-2 sm:mb-3 text-[#6740BA] text-sm sm:text-base">
            Resources
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Ebooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Case Studies
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#A077F8] text-white text-center py-2 sm:py-3 text-xs sm:text-sm">
        Copyright © {new Date().getFullYear()} Softroniclabs. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
