import { useEffect } from "react";
import { useAnalytics } from "../hooks/useAnalytics";
import { FiCpu, FiServer, FiActivity } from "react-icons/fi";
import softLogo from "../assets/images/soft-logo2.webp";
const About: React.FC = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView("About Us - SoftronicLabs Portfolio", {
      page: "about",
      section: "main",
    });
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-hero">
      <section className="relative overflow-hidden">
        {/* brand background */}
        <div className="bg-hero">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-40 items-center py-12 md:py-24 lg:py-28">
              {/* Left copy */}
              <div className="text-brand-gray-dark">
                <h1 className="text-[28px] leading-[1.15] sm:text-[34px] md:text-[40px] lg:text-[44px] font-extrabold tracking-tight">
                  From Cloud to AI—We Help
                  <br className="hidden md:block" />
                  You Engineer with Purpose
                </h1>

                <p className="mt-5 text-sm sm:text-[15px] leading-6 md:leading-7 text-brand-gray-dark/85 max-w-xl">
                  With deep engineering DNA and a unique co-engineering delivery
                  model, we provide services from advising on cloud architecture
                  to building AI-driven platforms. We have a proven track record
                  of engineering innovative digital products, scalable cloud and
                  MACH infrastructures, and intelligent data systems for
                  industries such as high-tech, fintech, healthcare and life
                  sciences, supply chain and logistics, retail and e-commerce,
                  and professional services.
                </p>

                <button
                  className="mt-6 inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none"
                  style={{
                    background: "var(--brand-orange)",
                    boxShadow: "0 4px 15px var(--shadow-orange)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--brand-orange-light)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px var(--shadow-orange)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--brand-orange)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px var(--shadow-orange)";
                  }}
                >
                  Get in Touch
                </button>
              </div>

              {/* Right visual (replace src)dd */}
              <div className="relative mt-8 lg:-mt-24">
                {/* This preserves the "diamond" area and spacing */}
                <img
                  src={softLogo}
                  alt="Decorative"
                  className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] ml-auto select-none pointer-events-none lg:scale-[1.6] sm:scale-[2.5] scale-[1.3]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* soft diagonal sheen behind hero art (subtle) */}
        <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] translate-x-16 -translate-y-10 rotate-45 rounded-3xl bg-gradient-to-br from-brand-orange/30 to-transparent blur-2xl opacity-50 hidden lg:block" />
      </section>

      {/* ============== “Positioned to Deliver …” + Pyramid ============== */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-6 md:py-12 lg:py-14">
          <h2 className="text-brand-gray-dark font-extrabold text-[28px] leading-[1.15] sm:text-[34px] md:text-[40px] lg:text-[44px] tracking-tight">
            Positioned to Deliver
            <br className="hidden sm:block" />
            <span className="text-brand-gray-dark/90">
              {" "}
              What Innovative Companies Demands
            </span>
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            {/* Left list */}
            <div className="lg:col-span-7">
              <ul className="space-y-6 md:space-y-10">
                {/* Item 1 */}
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <FiActivity className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div className="text-brand-gray-dark/90">
                    <h3 className="font-semibold text-[15px]">
                      Customer-Led Mindset –{" "}
                      <span className="font-bold">Like an Agency</span>
                    </h3>
                    <p className="text-sm leading-6 text-brand-gray-dark/75 mt-1 max-w-lg">
                      Grounded in technical depth and product thinking.
                    </p>
                    {/* thin connector line to mimic screenshot */}
                    <div className="mt-3 h-px w-40 bg-brand-gray/25" />
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <FiServer className="h-6 w-6 text-brand-cyan" />
                  </div>
                  <div className="text-brand-gray-dark/90">
                    <h3 className="font-semibold text-[15px]">
                      Enterprise-Grade Execution –{" "}
                      <span className="font-bold">
                        like a System Integrator (SI)
                      </span>
                    </h3>
                    <p className="text-sm leading-6 text-brand-gray-dark/75 mt-1 max-w-lg">
                      Built for scale, complexity, and long-term success.
                    </p>
                    <div className="mt-3 h-px w-40 bg-brand-gray/25" />
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <FiCpu className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div className="text-brand-gray-dark/90">
                    <h3 className="font-semibold text-[15px]">
                      Engineering-First Culture –{" "}
                      <span className="font-bold">
                        Like an Engineering Company
                      </span>
                    </h3>
                    <p className="text-sm leading-6 text-brand-gray-dark/75 mt-1 max-w-lg">
                      Grounded in technical depth and product thinking.
                    </p>
                    <div className="mt-3 h-px w-40 bg-brand-gray/25" />
                  </div>
                </li>
              </ul>
            </div>

            {/* Right pyramid image (placeholder) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="https://www.simform.com/wp-content/uploads/2025/06/deliver-thumb-desktop-img.svg"
                alt="Pyramid Graphic"
                className="w-[360px] max-w-full select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        {/* light strip behind (like screenshot bottom) */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-r service-card-gradient-3" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="relative -mb-10 lg:-mb-12">
            <div className="mx-auto w-full max-w-4xl rounded-xl service-card-gradient-3 text-white px-6 py-6 md:px-10 md:py-7 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold">13+</div>
                  <div className="text-[11px] md:text-xs opacity-90">
                    Headquarters
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold">
                    2010
                  </div>
                  <div className="text-[11px] md:text-xs opacity-90">
                    Founded
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold">
                    1200+
                  </div>
                  <div className="text-[11px] md:text-xs opacity-90">
                    Employees
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold">
                    350+
                  </div>
                  <div className="text-[11px] md:text-xs opacity-90">
                    Platform Certified Engineers
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* spacer to reveal the light strip */}
          <div className="h-20" />
        </div>
      </section>
    </div>
  );
};

export default About;
