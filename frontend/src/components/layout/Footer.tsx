import type { FC } from "react";
import { Facebook, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-[#F0E8FA] shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Social */}
        <div>
          <h2 className="text-xl font-bold text-[#9C27B0]">SIMFORM</h2>
          <div className="flex gap-4 mt-4 text-[#6A1B9A]">
            <a href="#">
              <Linkedin size={20} />
            </a>
            <a href="#">
              <Twitter size={20} />
            </a>
            <a href="#">
              <Youtube size={20} />
            </a>
            <a href="#">
              <Facebook size={20} />
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

        {/* About Simform */}
        <div>
          <h3 className="font-semibold border-b border-gray-300 pb-1 mb-3 text-[#6740BA]">
            About Simform
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6A1B9A]">
                Why Simform
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
          <h3 className="font-semibold border-b border-gray-300 pb-1 mb-3 text-[#6740BA]">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
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
          <h3 className="font-semibold border-b border-gray-300 pb-1 mb-3 text-[#6740BA]">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
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
      <div className="bg-[#A077F8] text-white text-center py-3 text-sm">
        Copyright © {new Date().getFullYear()} Simform. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
