import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "../hooks/useAnalytics";
import { FiCpu, FiServer, FiActivity } from "react-icons/fi";
import softLogo from "../assets/images/soft-logo2.webp";
const About: React.FC = () => {
  const { trackPageView } = useAnalytics();
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView("About Us - SoftronicLabs Portfolio", {
      page: "about",
      section: "main",
    });
  }, [trackPageView]);

  const handleGetInTouchClick = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-hero min-h-screen bg-hero">
      <section className="bg-hero relative overflow-hidden">
        {/* brand background */}
        <div className="bg-hero">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 lg:gap-40 items-center py-12 md:py-24 lg:py-28">
              {/* Left copy */}
              <div className="text-brand-gray-dark">
                <h1 className="text-[28px] leading-[1.15] sm:text-[34px] md:text-[40px] lg:text-[44px] font-extrabold tracking-tight">
                  From Cloud to AI—We Help
                  <br className="hidden md:block" />
                  You Engineer with Purpose
                </h1>

                <p className="mt-5 text-sm sm:text-[15px] leading-6 md:leading-7 text-brand-gray-dark/85 max-w-xl">
                  SofTronicLabs (SofTronicLabs Technology Services Pvt Ltd.) was
                  founded in 2017 by two Indian engineers, Chethan G Puttaswamy
                  and Tejashree S Sankangoudar. We are an engineering Services
                  company that operates in the Software and Hardware development
                  space, providing a wide range of Information Technology
                  services including Software Development, Maintenance,
                  Independent Validation Services, Cloud Services, and
                  Technology Consulting.
                </p>

                <p className="mt-4 text-sm sm:text-[15px] leading-6 md:leading-7 text-brand-gray-dark/85 max-w-xl">
                  At SofTronicLabs we come to work every single day to solve the
                  biggest problems in Huge Data computing. Whether a business is
                  aware of data getting generated or they are ignorant, over a
                  period every business is generating a huge amount of data. We
                  solve the problem of maintaining and managing the data, giving
                  business insights from the gathered data.
                </p>

                <button
                  onClick={handleGetInTouchClick}
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
              <div className="relative mt-2 lg:-mt-24">
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

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
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
                    {/* <div className="mt-3 h-px w-40 bg-brand-gray/25" /> */}
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
                    {/* <div className="mt-3 h-px w-40 bg-brand-gray/25" /> */}
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
                    {/* <div className="mt-3 h-px w-40 bg-brand-gray/25" /> */}
                  </div>
                </li>
              </ul>
            </div>

            {/* Right pyramid image (placeholder) */}
            <div className=" lg:col-span-5 flex justify-center lg:justify-end">
              <img
                // src="https://www.simform.com/wp-content/uploads/2025/06/deliver-thumb-desktop-img.svg"
                src={softLogo}
                alt="Pyramid Graphic"
                className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] max-w-full select-none pointer-events-none scale-125 sm:scale-110 lg:scale-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At SofTronicLabs, our leadership team brings together decades of
              experience in technology engineering, business development, and
              innovation. Founded in 2017 by two passionate Indian engineers.
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Chethan G Puttaswamy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-brand-orange to-brand-orange/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-900 text-2xl font-bold">CP</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Chethan G Puttaswamy
                </h3>
                <p className="text-brand-orange font-semibold">
                  Founder & CEO, SofTronicLabs
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Experience:</strong> Two decades of experience in
                  technology engineering
                </p>
                <p>
                  <strong>Education:</strong> Visvesvaraya Technological
                  University
                </p>
                <p>
                  <strong>Location:</strong> Mysore, Karnataka, India
                </p>
                <p>
                  <strong>Network:</strong> 500+ connections on LinkedIn
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Domain Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Application Engineering",
                      "Embedded Application Engineering",
                      "Automotive",
                      "Medical",
                      "Robotics",
                      "Banking",
                      "E-commerce",
                    ].map((domain) => (
                      <span
                        key={domain}
                        className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tejashree S Sankangoudar */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-brand-cyan to-brand-cyan/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-900 text-2xl font-bold">TS</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Tejashree S Sankangoudar
                </h3>
                <p className="text-brand-cyan font-semibold">
                  Co-Founder & Former CFO, SofTronicLabs
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Education:</strong> Engineering degree in Electronics
                  and Communication
                </p>
                <p>
                  Tejashree is a young enthusiast who brings passion for
                  business development and social engagement to SofTronicLabs.
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Strengths:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Business Development",
                      "Social Engagement",
                      "Creative Marketing",
                      "Financial Management",
                      "Strategic Planning",
                    ].map((strength) => (
                      <span
                        key={strength}
                        className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3
                className="text-3xl md:text-4xl font-bold mb-4"
                // style={{
                //   background:
                //     "linear-gradient(135deg, #FFA500 0%, #4DC8E8 100%)",
                //   WebkitBackgroundClip: "text",
                //   WebkitTextFillColor: "transparent",
                //   backgroundClip: "text",
                // }}
              >
                Our Shared Vision & Values
              </h3>
              <div
                className="w-24 h-1 mx-auto rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #FFA500 0%, #4DC8E8 100%)",
                }}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Innovation First",
                  desc: "Constantly pushing technological boundaries to create cutting-edge solutions",
                  icon: "⚡",
                  gradient: "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)",
                },
                {
                  title: "Customer Success",
                  desc: "Delivering solutions that truly solve business problems and drive growth",
                  icon: "🎯",
                  gradient: "linear-gradient(135deg, #4DC8E8 0%, #77C9E8 100%)",
                },
                {
                  title: "Quality Excellence",
                  desc: "Maintaining the highest standards in every project we undertake",
                  icon: "💎",
                  gradient: "linear-gradient(135deg, #FFA500 0%, #4DC8E8 100%)",
                },
                {
                  title: "Talent Development",
                  desc: "Attracting and nurturing the best engineering talent in the industry",
                  icon: "🚀",
                  gradient: "linear-gradient(135deg, #77C9E8 0%, #4DC8E8 100%)",
                },
                {
                  title: "Open Source Commitment",
                  desc: "Contributing to and leveraging open-source technologies for innovation",
                  icon: "🌐",
                  gradient: "linear-gradient(135deg, #FFB84D 0%, #FFA500 100%)",
                },
                {
                  title: "Continuous Learning",
                  desc: "Self-motivated to learn and adapt to emerging technologies",
                  icon: "📚",
                  gradient: "linear-gradient(135deg, #4DC8E8 0%, #FFA500 100%)",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(255, 165, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  {/* Decorative gradient overlay */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 opacity-80"
                    style={{ background: value.gradient }}
                  ></div>

                  <div className="p-6 text-center relative">
                    {/* Icon */}
                    <div className="mb-4">
                      <div
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: value.gradient,
                        }}
                      >
                        <span className="filter drop-shadow-sm">
                          {value.icon}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-gray-700 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                      {value.desc}
                    </p>
                  </div>

                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, #FFA500 0%, transparent 50%)`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
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
                  <div className="text-2xl md:text-3xl font-extrabold">1</div>
                  <div className="text-[11px] md:text-xs opacity-90">
                    Headquarters
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold">
                    2017
                  </div>
                  <div className="text-[11px] md:text-xs opacity-90">
                    Founded
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold">8+</div>
                  <div className="text-[11px] md:text-xs opacity-90">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold">50+</div>
                  <div className="text-[11px] md:text-xs opacity-90">
                    Projects Delivered
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
