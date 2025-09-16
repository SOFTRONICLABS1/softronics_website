import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GamificationPage: React.FC = () => {
  const navigate = useNavigate();
  const keywords = [
    "PEDAGOGY",
    "TECHNOLOGY",
    "COMPLIANCE",
    "LEARNING",
    "OPEN LEARNING",
    "CRITICAL",
    "KEY",
    "MOCK",
    "RISK MANAGEMENT",
    "TRANSFORMATIVE",
    "EMPOWERING",
    "ETHICAL",
    "ONLINE",
    "DATA SECURITY",
    "EDUCATION",
    "CONTENT MANAGEMENT",
    "GAMING",
    "QUESTIONING",
    "REASONING",
    "MINDFULNESS",
    "CONCEPTS",
    "PRACTICE",
    "FOUNDATION",
    "CREATIVITY",
    "TEACHING",
    "IMAGINATION",
    "GLOBAL",
    "ENGAGE",
    "THINKING",
  ];

  // Marquee logic
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current) {
        const singleGroup =
          trackRef.current.querySelector<HTMLElement>(".marquee-group");
        if (singleGroup) setTrackWidth(singleGroup.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [keywords]);

  const SPEED_PX_PER_SEC = 80;
  const marqueeDuration = trackWidth
    ? Math.max(10, trackWidth / SPEED_PX_PER_SEC)
    : 15;

  return (
    <div className="min-h-screen bg-hero text-brand-gray-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
          <motion.div
            // initial={{ opacity: 0, y: 30 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="leading-tight text-[28px] font-semibold tracking-[-0.01em] sm:text-[36px] md:text-[48px] lg:text-[56px] text-brand-gray-dark mb-4 sm:mb-6">
              Gamification in{" "}
              <span className="relative">
                <span className="underline decoration-[#4ECCEF]/30 underline-offset-4">
                  Pedagogy
                </span>
              </span>
            </h1>
            <motion.p
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[14px] sm:text-[15px] md:text-[16px] leading-6 sm:leading-7 text-brand-gray-dark max-w-3xl mx-auto px-2 sm:px-0"
            >
              Transforming learning with gamified modules that engage, empower,
              and educate. We believe in engineering educational solutions that
              matter, combining our passion for technology with deep pedagogical
              expertise.
            </motion.p>

            <motion.div
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 sm:mt-8"
            >
              <button
                onClick={() => navigate("/")}
                className="inline-flex h-[40px] sm:h-[44px] items-center rounded-md px-5 sm:px-6 text-[13px] sm:text-[14px] font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-[1px] text-white"
                style={{
                  background: "#4ECCEF",
                  boxShadow: "0 4px 15px rgba(78, 204, 239, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3DB8E0";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(78, 204, 239, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#4ECCEF";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(78, 204, 239, 0.3)";
                }}
              >
                Explore Platform
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Dimensions (Marquee) */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-white/50 ring-1 ring-black/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 mb-6 sm:mb-8 text-center">
          <motion.h2
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className="text-[24px] font-semibold tracking-tight sm:text-[28px] md:text-[32px] text-brand-gray-dark mb-3 sm:mb-4"
          >
            Core{" "}
            <span className="underline decoration-black/20 underline-offset-2">
              Dimensions
            </span>
          </motion.h2>
          <p
            className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-6 sm:leading-7 
  text-brand-gray-dark max-w-3xl text-center mx-auto px-2 sm:px-0"
          >
            Discover the key elements that power our gamified learning
            experience
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div ref={trackRef} className="flex items-center">
            <motion.div
              className="flex marquee-group shrink-0"
              animate={{ x: [0, -trackWidth] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: marqueeDuration,
              }}
            >
              {keywords.map((kw, i) => (
                <div
                  key={`group1-${i}`}
                  className="inline-flex items-center justify-center mr-3 sm:mr-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md ring-0 ring-black/10 bg-white text-brand-gray-dark font-semibold text-[12px] sm:text-[14px] shadow-sm hover:shadow-md transition-shadow duration-300 whitespace-nowrap"
                  style={{ background: "rgba(78, 204, 239, 0.05)" }}
                >
                  {kw}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex marquee-group shrink-0"
              animate={{ x: [0, -trackWidth] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: marqueeDuration,
              }}
              aria-hidden
            >
              {keywords.map((kw, i) => (
                <div
                  key={`group2-${i}`}
                  className="inline-flex items-center justify-center mr-3 sm:mr-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md ring-1 ring-black/10 bg-white text-brand-gray-dark font-semibold text-[12px] sm:text-[14px] shadow-sm hover:shadow-md transition-shadow duration-300 whitespace-nowrap"
                  style={{ background: "rgba(78, 204, 239, 0.05)" }}
                >
                  {kw}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className="mb-8 sm:mb-10"
          >
            <h2 className="text-[24px] font-semibold tracking-tight sm:text-[28px] md:text-[32px] text-brand-gray-dark mb-3 sm:mb-4">
              Why Choose Our{" "}
              <span className="underline decoration-black/20 underline-offset-2">
                Platform
              </span>
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-6 sm:leading-7 text-brand-gray-dark max-w-3xl px-2 sm:px-0">
              Experience the future of education with our innovative
              gamification approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Interactive Learning",
                description:
                  "Engage with dynamic content that adapts to your learning style and provides personalized feedback for optimal knowledge retention.",
                icon: "🎮",
              },
              {
                title: "Real-time Progress",
                description:
                  "Track your advancement with detailed analytics, achievements, and comprehensive progress reports that keep you motivated.",
                icon: "📊",
              },
              {
                title: "Collaborative Environment",
                description:
                  "Learn together with peers in a supportive gaming community that encourages knowledge sharing and teamwork.",
                icon: "🤝",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                // variants={featureVariants}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true }}
                // transition={{ delay: i * 0.1 }}
                className="group rounded-xl p-5 sm:p-6 ring-1 ring-black/10 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-semibold text-brand-gray-dark mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-5 sm:leading-6 text-brand-gray-dark">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-white/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <motion.div
            // variants={cardVariants}
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            className="rounded-xl p-5 sm:p-6 md:p-8 ring-1 ring-black/10 bg-white"
          >
            <h2 className="text-[24px] font-semibold tracking-tight sm:text-[28px] md:text-[32px] text-brand-gray-dark mb-4 sm:mb-6">
              About Our{" "}
              <span className="underline decoration-black/20 underline-offset-2">
                Pedagogy Platform
              </span>
            </h2>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-6 sm:leading-7 text-brand-gray-dark">
                <strong className="text-brand-gray-dark">Pedagogy</strong> is
                the method and practice of teaching. We have embedded repeatable
                learning and practice modules in our Pedagogy platform in a game
                format to effectively teach the lessons required.
              </p>

              <div
                className="rounded-lg p-3 sm:p-4 ring-1 ring-black/5"
                style={{ background: "rgba(78, 204, 239, 0.05)" }}
              >
                <p className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-6 sm:leading-7 text-brand-gray-dark">
                  We are successfully using the platform to help employees
                  understand the organization's compliance process for risk
                  management. We have also designed modules to train minds in
                  applying programmatic logic while writing computer programs.
                </p>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex h-[40px] sm:h-[44px] items-center rounded-md px-4 sm:px-5 text-[13px] sm:text-[14px] font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-[1px] text-white"
                style={{
                  background: "#4ECCEF",
                  boxShadow: "0 4px 15px rgba(78, 204, 239, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3DB8E0";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(78, 204, 239, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#4ECCEF";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(78, 204, 239, 0.3)";
                }}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GamificationPage;
