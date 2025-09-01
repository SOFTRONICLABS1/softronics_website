import { useEffect } from "react";
import { useAnalytics } from "../hooks/useAnalytics";
import { FiCpu, FiServer, FiActivity } from "react-icons/fi";

const About: React.FC = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView("About Us - SoftronicLabs Portfolio", {
      page: "about",
      section: "main",
    });
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-[#2c0053]">
      <section className="relative overflow-hidden">
        {/* deep purple background */}
        <div className="bg-[#2c0053]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-20 md:py-24 lg:py-28">
              {/* Left copy */}
              <div className="text-white">
                <h1 className="text-[28px] leading-[1.15] sm:text-[34px] md:text-[40px] lg:text-[44px] font-extrabold tracking-tight">
                  From Cloud to AI—We Help
                  <br className="hidden md:block" />
                  You Engineer with Purpose
                </h1>

                <p className="mt-5 text-sm sm:text-[15px] leading-6 md:leading-7 text-white/85 max-w-xl">
                  With deep engineering DNA and a unique co-engineering delivery
                  model, we provide services from advising on cloud architecture
                  to building AI-driven platforms. We have a proven track record
                  of engineering innovative digital products, scalable cloud and
                  MACH infrastructures, and intelligent data systems for
                  industries such as high-tech, fintech, healthcare and life
                  sciences, supply chain and logistics, retail and e-commerce,
                  and professional services.
                </p>

                <button className="mt-6 inline-flex items-center rounded-md bg-[#ff7b7b] px-4 py-2 text-sm font-semibold text-white shadow-[0_2px_0_rgba(0,0,0,0.1)] hover:brightness-105 focus:outline-none">
                  Get in Touch
                </button>
              </div>

              {/* Right visual (replace src)dd */}
              <div className="relative -mt-48">
                {/* This preserves the “diamond” area and spacing */}
                <img
                  src="https://www.simform.com/wp-content/uploads/2025/01/about-hero-image.svg"
                  alt="Decorative"
                  className="w-[1220px] max-w-full ml-auto select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* soft diagonal sheen behind hero art (subtle) */}
        <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] translate-x-16 -translate-y-10 rotate-45 rounded-3xl bg-gradient-to-br from-[#8b5cf6]/30 to-transparent blur-2xl opacity-50 hidden lg:block" />
      </section>

      {/* ============== “Positioned to Deliver …” + Pyramid ============== */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12 lg:py-14">
          <h2 className="text-white font-extrabold text-[28px] leading-[1.15] sm:text-[34px] md:text-[40px] lg:text-[44px] tracking-tight">
            Positioned to Deliver
            <br className="hidden sm:block" />
            <span className="text-white/90">
              {" "}
              What Innovative Companies Demands
            </span>
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            {/* Left list */}
            <div className="lg:col-span-7">
              <ul className="space-y-10">
                {/* Item 1 */}
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <FiActivity className="h-6 w-6 text-[#b58cff]" />
                  </div>
                  <div className="text-white/90">
                    <h3 className="font-semibold text-[15px]">
                      Customer-Led Mindset –{" "}
                      <span className="font-bold">Like an Agency</span>
                    </h3>
                    <p className="text-sm leading-6 text-white/75 mt-1 max-w-lg">
                      Grounded in technical depth and product thinking.
                    </p>
                    {/* thin connector line to mimic screenshot */}
                    <div className="mt-3 h-px w-40 bg-white/25" />
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <FiServer className="h-6 w-6 text-[#b58cff]" />
                  </div>
                  <div className="text-white/90">
                    <h3 className="font-semibold text-[15px]">
                      Enterprise-Grade Execution –{" "}
                      <span className="font-bold">
                        like a System Integrator (SI)
                      </span>
                    </h3>
                    <p className="text-sm leading-6 text-white/75 mt-1 max-w-lg">
                      Built for scale, complexity, and long-term success.
                    </p>
                    <div className="mt-3 h-px w-40 bg-white/25" />
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <FiCpu className="h-6 w-6 text-[#b58cff]" />
                  </div>
                  <div className="text-white/90">
                    <h3 className="font-semibold text-[15px]">
                      Engineering-First Culture –{" "}
                      <span className="font-bold">
                        Like an Engineering Company
                      </span>
                    </h3>
                    <p className="text-sm leading-6 text-white/75 mt-1 max-w-lg">
                      Grounded in technical depth and product thinking.
                    </p>
                    <div className="mt-3 h-px w-40 bg-white/25" />
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
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[#efe7fb]" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="relative -mb-10 lg:-mb-12">
            <div className="mx-auto w-full max-w-4xl rounded-xl bg-[#6f47c1] text-white px-6 py-6 md:px-10 md:py-7 shadow-lg">
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
