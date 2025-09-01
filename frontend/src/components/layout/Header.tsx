import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { navigationItems, iconMap } from "../../utils/constants";
import { useAnalytics } from "../../hooks/useAnalytics";
import softLogo from "../../assets/images/soft-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { trackNavigation, trackCTAClick } = useAnalytics();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileActiveDropdown(null);
    trackNavigation('mobile_menu', 'mobile', !isMobileMenuOpen ? 'open' : 'close', {
      section: 'header'
    });
  };

  const handleMobileDropdownToggle = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
    trackNavigation(label, 'mobile_dropdown', mobileActiveDropdown === label ? 'close' : 'open', {
      section: 'header',
      interaction_type: mobileActiveDropdown === label ? 'close' : 'open'
    });
  };

  // Handle mouse enter with delay clear
  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
    // Track mega menu hover/view
    if (label && navigationItems.find(item => item.label === label)?.megaMenu) {
      trackNavigation(label, 'mega_menu', undefined, {
        section: 'header',
        interaction_type: 'hover'
      });
    }
  };

  /**
   * Handle mouse leave with delay to prevent flickering
   * when moving between navigation item and dropdown
   */
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Small delay to allow moving to dropdown
  };

  const handleNavClick = (label: string, href: string) => {
    trackNavigation(label, 'main', href, {
      section: 'header',
      interaction_type: 'click'
    });
  };

  const handleContactClick = () => {
    trackCTAClick('Contact Us', 'header', 'primary', {
      section: 'header'
    });
  };

  /**
   * Cleanup timeout on unmount to prevent memory leaks
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <header className="bg-[#38106F] shadow-sm text-white sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center group">
                <div className="relative">
                  <img
                    src={softLogo}
                    alt="Softronic Labs"
                    className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navigationItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                      item.megaMenu && handleMouseEnter(item.label)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.label, item.href)}
                      className={`text-white hover:text-gray-200 px-3 py-2 text-sm font-medium flex items-center space-x-1 transition-all duration-200 relative ${
                        activeDropdown === item.label ? "text-[#DF4B68]" : ""
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.megaMenu && (
                        <FiChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      {activeDropdown === item.label && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 animate-pulse"></span>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={handleContactClick}
                className="relative bg-[#DF4B68] hover:bg-white text-white hover:text-[#DF4B68] border-2 border-transparent hover:border-[#DF4B68] px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-gray-200 p-2"
                aria-expanded={isMobileMenuOpen}
                aria-label={
                  isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
                }
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Desktop Mega Menu Dropdown */}
        {navigationItems
          .filter((item) => item.megaMenu)
          .map((item) => (
            <div
              key={`mega-${item.label}`}
              className={`absolute left-0 right-0 bg-[#572C98] shadow-2xl border-t border-[#6B35A8] transition-all duration-500 ease-out ${
                activeDropdown === item.label
                  ? "opacity-100 visible transform translate-y-0 scale-100"
                  : "opacity-0 invisible transform -translate-y-2 scale-98 pointer-events-none"
              }`}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              role="menu"
              aria-label={`${item.label} mega menu`}
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(223, 75, 104, 0.1) 0%, transparent 50%)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                transformOrigin: "top center",
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-12 gap-8 py-10">
                  {/* Left Section - Menu Title with Arrow */}
                  <div className="col-span-3 border-r border-[#6B35A8]/50 pr-8">
                    <div className="flex items-center space-x-3 text-white mb-4 group">
                      <h2 className="text-2xl font-bold">
                        {item.megaMenu?.title}
                      </h2>
                      <FiChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-2 duration-300" />
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.megaMenu?.description}
                    </p>
                  </div>

                  {/* Middle Section - Menu Content */}
                  <div className="col-span-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                      {item.megaMenu?.columns.map((column, columnIndex) => (
                        <div key={columnIndex}>
                          <h3 className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-4">
                            {column.title}
                          </h3>
                          <ul className="space-y-3">
                            {column.items.map((subItem) => {
                              const Icon =
                                iconMap[subItem.label] || FiChevronRight;
                              return (
                                <li key={subItem.label}>
                                  <a
                                    href={subItem.href}
                                    className="text-white/90 hover:text-[#DF4B68] text-sm transition-all duration-200 flex items-center group"
                                  >
                                    <Icon className="w-3 h-3 mr-3 text-white/30 group-hover:text-[#DF4B68] transition-colors" />
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                      {subItem.label}
                                    </span>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Section - Image */}
                  <div className="col-span-3 flex items-center justify-center">
                    <div className="relative w-full h-56 rounded-lg overflow-hidden group">
                      <img
                        src={item.megaMenu?.image}
                        alt={item.megaMenu?.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#38106F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-sm font-semibold">Learn More</p>
                        <p className="text-xs text-white/70">
                          Discover our solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out z-50 ${
            isMobileMenuOpen 
              ? "max-h-[85vh] opacity-100 overflow-y-auto" 
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          role="navigation"
          aria-label="Mobile navigation menu"
          style={{
            scrollBehavior: 'smooth'
          }}
        >
          <div className="bg-gradient-to-b from-[#46178A] to-[#38106F] px-2 pt-2 pb-6 space-y-1 min-h-fit">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <button
                  className="text-white hover:bg-white/10 px-3 py-3 text-base font-medium w-full text-left flex items-center justify-between rounded-md transition-colors min-h-[44px] touch-manipulation"
                  onClick={() => {
                    if (item.megaMenu) {
                      handleMobileDropdownToggle(item.label);
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                  aria-expanded={
                    item.megaMenu
                      ? mobileActiveDropdown === item.label
                      : undefined
                  }
                  aria-controls={
                    item.megaMenu
                      ? `mobile-dropdown-${item.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      : undefined
                  }
                  aria-label={
                    item.megaMenu
                      ? `${item.label} submenu`
                      : `Navigate to ${item.label}`
                  }
                >
                  <span>{item.label}</span>
                  {item.megaMenu && (
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileActiveDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                <div
                  id={`mobile-dropdown-${item.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className={`transition-all duration-500 ease-in-out transform-gpu ${
                    item.megaMenu && mobileActiveDropdown === item.label
                      ? "max-h-[50vh] opacity-100 transform translate-y-0 scale-y-100 overflow-y-auto"
                      : "max-h-0 opacity-0 transform -translate-y-2 scale-y-95 overflow-hidden"
                  }`}
                  role={item.megaMenu ? "region" : undefined}
                  aria-labelledby={
                    item.megaMenu
                      ? `mobile-button-${item.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      : undefined
                  }
                  style={{
                    transformOrigin: "top center",
                    scrollBehavior: 'smooth'
                  }}
                >
                  {item.megaMenu && (
                    <div className="pl-4 space-y-4 mt-2">
                      {item.megaMenu?.columns.map((column, columnIndex) => (
                        <div
                          key={columnIndex}
                          className={`transition-all duration-300 ease-out ${
                            mobileActiveDropdown === item.label
                              ? "opacity-100 transform translate-y-0"
                              : "opacity-0 transform translate-y-2"
                          }`}
                          style={{
                            transitionDelay: `${columnIndex * 50}ms`,
                          }}
                        >
                          <h4 className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-2">
                            {column.title}
                          </h4>
                          {column.items.map((subItem, itemIndex) => {
                            const Icon =
                              iconMap[subItem.label] || FiChevronRight;
                            return (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                className={`text-white/80 hover:text-white flex items-center px-3 py-2.5 text-sm transition-all duration-200 ease-out hover:transform hover:translate-x-1 min-h-[44px] touch-manipulation ${
                                  mobileActiveDropdown === item.label
                                    ? "opacity-100 transform translate-y-0"
                                    : "opacity-0 transform translate-y-1"
                                }`}
                                style={{
                                  transitionDelay: `${
                                    columnIndex * 50 + itemIndex * 25
                                  }ms`,
                                }}
                              >
                                <Icon className="w-3 h-3 mr-2 text-white/40" />
                                {subItem.label}
                              </a>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="px-3 pt-6 pb-2">
              <button className="w-full bg-gradient-to-r from-[#DF4B68] to-[#FF6B8A] hover:from-[#FF6B8A] hover:to-[#DF4B68] text-white px-4 py-3 rounded-md text-sm font-medium transition-all shadow-lg min-h-[44px] touch-manipulation">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
