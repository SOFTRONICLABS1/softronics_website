import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { navigationItems } from "../../utils/constants";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="bg-[#38106F] shadow-sm text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="https://softroniclabs.com/img/logo.png"
                alt="Softronic Labs"
                className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  <button
                    className="text-white hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors"
                    onClick={() =>
                      item.subItems && handleDropdownToggle(item.label)
                    }
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className="absolute left-0 mt-2 w-64 bg-[#46178A] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#DF4B68] hover:bg-white text-white hover:text-[#DF4B68] border-2 border-transparent hover:border-[#DF4B68] px-6 py-2 rounded-md text-sm font-medium transition-all duration-300">
              Book a Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary-500 p-2"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="text-gray-700 hover:text-primary-500 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                    onClick={() =>
                      item.subItems && handleDropdownToggle(item.label)
                    }
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.subItems && activeDropdown === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="text-gray-600 hover:text-primary-500 block px-3 py-2 text-sm font-medium transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 pt-4">
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
