import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  // ⬇️ NEW: separate timers for open/close to avoid hover flicker
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { trackNavigation, trackCTAClick } = useAnalytics();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileActiveDropdown(null);
    trackNavigation(
      "mobile_menu",
      "mobile",
      !isMobileMenuOpen ? "open" : "close",
      { section: "header" }
    );
  };

  const handleMobileDropdownToggle = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
    trackNavigation(
      label,
      "mobile_dropdown",
      mobileActiveDropdown === label ? "close" : "open",
      {
        section: "header",
        interaction_type: mobileActiveDropdown === label ? "close" : "open",
      }
    );
  };

  // ⬇️ NEW: helpers to clear timers
  const clearTimers = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  // ⬇️ UPDATED: debounced open/close for smoother feel
  const handleMouseEnter = (label: string) => {
    clearTimers();
    openTimerRef.current = setTimeout(() => {
      setActiveDropdown(label);
      if (
        label &&
        navigationItems.find((item) => item.label === label)?.megaMenu
      ) {
        trackNavigation(label, "mega_menu", undefined, {
          section: "header",
          interaction_type: "hover",
        });
      }
    }, 80); // small delay feels more natural
  };

  const handleMouseLeave = () => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160); // slightly longer on close to prevent flicker across gaps
  };

  const handleNavClick = (label: string, href: string) => {
    trackNavigation(label, "main", href, {
      section: "header",
      interaction_type: "click",
    });
  };

  const handleContactClick = () => {
    trackCTAClick("Contact Us", "header", "primary", { section: "header" });
  };

  useEffect(() => {
    return () => {
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <style>{`
        :root {
          --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
          --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          --ease-elegant: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-item {
          position: relative;
          transition: all 0.4s var(--ease-elegant);
          will-change: transform;
        }
        .nav-item::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #FFA500;
          transform: translateX(-50%);
          transition: width 0.4s var(--ease-elegant);
          border-radius: 1px;
        }
        .nav-item:hover::before,
        .nav-item.active::before {
          width: 100%;
        }
        .nav-item:hover {
          transform: translateY(-1px);
        }

        // .logo-container {
        //   transition: all 0.5s var(--ease-spring);
        //   will-change: transform;
        // }
        // .logo-container:hover {
        //   transform: scale(1.08) rotate(1deg);
        //   filter: drop-shadow(0 4px 12px rgba(255, 165, 0, 0.3));
        // }

        .chevron-elegant {
          transition: all 0.3s var(--ease-spring);
          transform-origin: center;
        }
        .chevron-elegant.rotated {
          transform: rotate(180deg) scale(1.1);
        }

        /* ⬇️ UPDATED: keep the element mounted and animate opacity/transform/visibility */
        .mega-menu {
          opacity: 0;
          transform: translateY(-8px);
          visibility: hidden;
          pointer-events: none;
          transition:
            opacity 220ms var(--ease-elegant),
            transform 220ms var(--ease-elegant),
            visibility 0s linear 220ms;
          will-change: opacity, transform;
          backface-visibility: hidden;
        }
        .mega-menu[data-open="true"] {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
          pointer-events: auto;
          transition:
            opacity 220ms var(--ease-elegant),
            transform 220ms var(--ease-elegant),
            visibility 0s;
        }

        /* inner items stagger */
        .menu-item-stagger {
          opacity: 0;
          transform: translateY(4px) translateZ(0);
          transition: opacity 200ms var(--ease-elegant), transform 200ms var(--ease-elegant);
          will-change: opacity, transform;
        }
        .menu-item-stagger.visible {
          opacity: 1;
          transform: translateY(0) translateZ(0);
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          transition: all 0.4s var(--ease-elegant);
          will-change: transform;
        }
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s var(--ease-elegant);
        }
        .cta-button:hover::before { left: 100%; }
        .cta-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(77, 200, 232, 0.4);
        }

        .mobile-menu {
          background: rgba(255, 255, 255, 0.98);
          transition: max-height 0.3s var(--ease-elegant), opacity 0.2s var(--ease-elegant);
          will-change: max-height, opacity;
          backface-visibility: hidden;
        }
        .mobile-item {
          transition: all 0.3s var(--ease-elegant);
          position: relative;
          overflow: hidden;
        }
        .mobile-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          height: 100%; width: 0;
          background: #FFA500;
          transition: width 0.4s var(--ease-elegant);
          opacity: 0.1;
        }
        .mobile-item:hover::before { width: 100%; }
        .mobile-item:hover {
          transform: translateX(8px);
          background: rgba(255, 165, 0, 0.05);
        }

        .mobile-dropdown { will-change: max-height, opacity; }

        .focus-ring { transition: all 0.3s var(--ease-elegant); }
        .focus-ring:focus-visible {
          outline: 2px solid #4DC8E8;
          outline-offset: 2px;
          border-radius: 4px;
          box-shadow: 0 0 0 4px rgba(77, 200, 232, 0.2);
        }

        /* Accessibility: user pref */
        @media (prefers-reduced-motion: reduce) {
          .mega-menu, .menu-item-stagger, .mobile-menu, .cta-button, .nav-item, .logo-container, .chevron-elegant {
            transition: none !important;
          }
        }
      `}</style>

      <header
        className="bg-white/98 sticky top-0 z-50 border-b border-gray-100/50"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center group logo-container focus-ring"
                tabIndex={0}
              >
                <div className="relative">
                  <img
                    src={softLogo}
                    alt="Softronic Labs"
                    className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </Link>
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
                    <Link
                      to={item.href}
                      onClick={() => handleNavClick(item.label, item.href)}
                      onFocus={() =>
                        item.megaMenu && handleMouseEnter(item.label)
                      }
                      onBlur={handleMouseLeave}
                      className={`nav-item text-gray-700 hover:text-gray-700 px-3 py-2 text-sm font-medium flex items-center space-x-1 focus-ring ${
                        activeDropdown === item.label ||
                        location.pathname === item.href
                          ? "text-orange-500 active"
                          : ""
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {item.megaMenu && (
                        <FiChevronDown
                          className={`w-3 h-3 chevron-elegant ${
                            activeDropdown === item.label ? "rotated" : ""
                          }`}
                        />
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={handleContactClick}
                className="px-4 py-2 rounded-lg font-semibold text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] relative overflow-hidden focus-ring"
                style={{
                  background: "var(--brand-button-primary)",
                  boxShadow: "0 4px 15px rgba(78, 204, 239, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--brand-button-hover)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(78, 204, 239, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "var(--brand-button-primary)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(78, 204, 239, 0.3)";
                }}
              >
                <span className="relative z-10 font-semibold">Contact Us</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-gray-900 p-2"
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
              className="mega-menu absolute left-0 right-0 bg-white border-t-2 overflow-x-hidden"
              data-open={
                activeDropdown === item.label
              } /* ⬅️ NEW: CSS drives animation */
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              role="menu"
              aria-label={`${item.label} mega menu`}
              style={{
                borderTopColor:
                  activeDropdown === item.label ? "#FFA500" : "transparent",
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-12 gap-8 py-10">
                  {/* Left Section - Menu Title with Arrow */}
                  <div className="col-span-3 border-r border-gray-200 pr-8">
                    <div className="flex items-center space-x-3 text-gray-800 mb-4 group">
                      <h2
                        className="text-2xl font-bold"
                        style={{ color: "#0095BB" }}
                      >
                        {item.megaMenu?.title}
                      </h2>
                      <FiChevronRight className="w-6 h-6 text-orange-500 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110 group-hover:text-cyan-500" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.megaMenu?.description}
                    </p>
                  </div>

                  {/* Middle Section - Menu Content */}
                  <div className="col-span-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                      {item.megaMenu?.columns.map((column, columnIndex) => (
                        <div
                          key={columnIndex}
                          className="transition-all duration-300 ease-out"
                          style={{ transitionDelay: `${columnIndex * 50}ms` }}
                        >
                          <h3
                            className="text-xs uppercase tracking-wider font-semibold mb-4"
                            style={{ color: "#0095BB" }}
                          >
                            {column.title}
                          </h3>
                          <ul className="space-y-3">
                            {column.items.map((subItem, itemIndex) => {
                              const Icon =
                                iconMap[subItem.label] || FiChevronRight;
                              return (
                                <li
                                  key={subItem.label}
                                  className={`menu-item-stagger ${
                                    activeDropdown === item.label
                                      ? "visible"
                                      : ""
                                  }`}
                                  style={{
                                    transitionDelay: `${
                                      (columnIndex * 2 + itemIndex) * 30
                                    }ms`,
                                  }}
                                >
                                  <Link
                                    to={subItem.href}
                                    className="text-gray-700 hover:text-gray-700 text-sm transition-all duration-300 flex items-center group p-2 rounded-md hover:bg-gradient-to-r hover:from-orange-50 hover:to-cyan-50 focus-ring"
                                  >
                                    <Icon className="w-3 h-3 mr-3 text-gray-400 group-hover:text-gray-600 transition-all duration-300 group-hover:scale-110" />
                                    <span className="group-hover:translate-x-2 transition-all duration-300 font-medium">
                                      {subItem.label}
                                    </span>
                                  </Link>
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
                    <div className="relative w-full h-56 rounded-lg overflow-hidden group border-2 border-gray-100">
                      <img
                        src={item.megaMenu?.image}
                        alt={item.megaMenu?.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-sm font-semibold">Learn More</p>
                        <p className="text-xs text-white/90">
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
          className={`mobile-menu lg:hidden z-50 overflow-x-hidden ${
            isMobileMenuOpen
              ? "max-h-[85vh] opacity-100 overflow-y-auto"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <div className="bg-gradient-to-b from-gray-50 to-white px-2 pt-2 pb-6 space-y-1 min-h-fit border-t border-gray-200">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.megaMenu ? (
                  <button
                    className="mobile-item text-gray-700 hover:bg-orange-50 hover:text-gray-700 px-3 py-3 text-base font-medium w-full text-left flex items-center justify-between rounded-md min-h-[44px] touch-manipulation focus-ring"
                    onClick={() => handleMobileDropdownToggle(item.label)}
                    aria-expanded={mobileActiveDropdown === item.label}
                    aria-controls={`mobile-dropdown-${item.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    aria-label={`${item.label} submenu`}
                  >
                    <span className="font-semibold">{item.label}</span>
                    <FiChevronDown
                      className={`w-4 h-4 chevron-elegant ${
                        mobileActiveDropdown === item.label ? "rotated" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="mobile-item text-gray-700 hover:bg-orange-50 hover:text-gray-700 px-3 py-3 text-base font-medium w-full text-left flex items-center justify-between rounded-md min-h-[44px] touch-manipulation focus-ring"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavClick(item.label, item.href);
                    }}
                  >
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                )}

                {/* Mobile Dropdown */}
                <div
                  id={`mobile-dropdown-${item.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className={`mobile-dropdown ${
                    item.megaMenu && mobileActiveDropdown === item.label
                      ? "max-h-[50vh] opacity-100 overflow-y-auto"
                      : "max-h-0 opacity-0 overflow-hidden"
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
                    transition:
                      "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
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
                          style={{ transitionDelay: `${columnIndex * 50}ms` }}
                        >
                          <h4
                            className="text-xs uppercase tracking-wider font-semibold mb-2"
                            style={{ color: "#0095BB" }}
                          >
                            {column.title}
                          </h4>
                          {column.items.map((subItem, itemIndex) => {
                            const Icon =
                              iconMap[subItem.label] || FiChevronRight;
                            return (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className={`text-gray-600 hover:text-gray-700 flex items-center px-3 py-2.5 text-sm min-h-[44px] touch-manipulation rounded-md hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-cyan-50/50 focus-ring ${
                                  mobileActiveDropdown === item.label
                                    ? "opacity-100 transform translate-y-0"
                                    : "opacity-0 transform translate-y-1"
                                }`}
                                style={{
                                  transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,
                                  transitionDelay: `${
                                    columnIndex * 50 + itemIndex * 25
                                  }ms`,
                                }}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setMobileActiveDropdown(null);
                                }}
                              >
                                <Icon className="w-3 h-3 mr-3 text-gray-400 transition-all duration-300 group-hover:text-gray-600 group-hover:scale-110" />
                                <span className="font-medium">
                                  {subItem.label}
                                </span>
                              </Link>
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
              <button
                onClick={handleContactClick}
                className="px-3 py-2 rounded-lg font-semibold text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 w-full min-h-[44px] focus-ring touch-manipulation"
                // style={{
                //   background: 'var(--brand-button-primary)',
                //   boxShadow: '0 4px 15px rgba(78, 204, 239, 0.3)'
                // }}
                // onMouseEnter={(e) => {
                //   e.currentTarget.style.background = 'var(--brand-button-hover)';
                //   e.currentTarget.style.boxShadow = '0 8px 25px rgba(78, 204, 239, 0.4)';
                // }}
                // onMouseLeave={(e) => {
                //   e.currentTarget.style.background = 'var(--brand-button-primary)';
                //   e.currentTarget.style.boxShadow = '0 4px 15px rgba(78, 204, 239, 0.3)';
                // }}
                style={{ background: "var(--brand-cyan)" }}
              >
                <span className="relative z-10">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
