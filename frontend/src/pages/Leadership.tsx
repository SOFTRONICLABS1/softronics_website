import React from "react";
import { motion } from "framer-motion";

const Leadership: React.FC = () => {
  return (
    <div className="bg-hero min-h-screen w-full text-brand-gray-dark">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#4ECCEF]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4ECCEF]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      {/* Page Wrapper */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16 relative z-10">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4ECCEF]/10 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#4ECCEF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-dark">
            Leadership at <span className="text-[#4ECCEF]">SofTronicLabs</span>
          </h1>
          <div className="w-24 h-1 bg-[#4ECCEF] mx-auto"></div>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-gray-dark/80 leading-relaxed">
            At SofTronicLabs, our leadership is committed to engineering
            excellence, innovation, and creating value for our clients through
            cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Grid Layout for Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Leadership Approach */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ECCEF]/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#4ECCEF]/10 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#4ECCEF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#4ECCEF]">
                  Leadership Approach
                </h2>
              </div>
              <p className="text-brand-gray-dark/80 leading-relaxed">
                Tejashree's approach combines technical knowledge with business
                expertise, bringing a unique perspective to the company's
                leadership. Her belief in social engagement and creative
                marketing has been instrumental in establishing SofTronicLabs'
                presence in the market.
              </p>
            </div>
          </motion.div>

          {/* Contributions */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4ECCEF]/5 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#4ECCEF]/10 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#4ECCEF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#4ECCEF]">
                  Contributions
                </h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Co-founded the company in 2017",
                  "Established financial frameworks and processes",
                  "Developed business strategies for growth",
                  "Created marketing initiatives for brand building",
                  "Fostered partnerships and client relationships",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-[#4ECCEF]/10 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-[#4ECCEF] rounded-full"></div>
                    </div>
                    <span className="text-brand-gray-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Leadership Philosophy */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#4ECCEF]/5 rounded-full -translate-y-20 -translate-x-20"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#4ECCEF]/10 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#4ECCEF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#4ECCEF]">
                  Leadership Philosophy
                </h2>
              </div>
              <p className="mb-6 text-brand-gray-dark/80">
                Together, Chethan and Tejashree have built SofTronicLabs on the
                foundation of:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Innovation First",
                    desc: "Constantly pushing technological boundaries",
                  },
                  {
                    title: "Customer Success",
                    desc: "Delivering solutions that truly solve business problems",
                  },
                  {
                    title: "Quality Excellence",
                    desc: "Maintaining the highest standards in every project",
                  },
                  {
                    title: "Talent Development",
                    desc: "Attracting and nurturing the best engineering talent",
                  },
                  {
                    title: "Open Source Commitment",
                    desc: "Contributing to and leveraging open-source technologies",
                    className: "md:col-span-2",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-[#4ECCEF]/5 p-4 rounded-lg ${
                      item.className || ""
                    }`}
                  >
                    <h3 className="font-semibold text-[#4ECCEF] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray-dark/80 text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Company Culture */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#4ECCEF]/5 rounded-full translate-y-20 translate-x-20"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#4ECCEF]/10 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#4ECCEF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#4ECCEF]">
                  Company Culture
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Passion for Engineering",
                    desc: '"We Engineer to let you free your time for all the other things you love in your life"',
                  },
                  {
                    title: "Continuous Learning",
                    desc: "Self-motivated to learn new technologies",
                  },
                  {
                    title: "Agile Approach",
                    desc: "Adapting quickly to changing market needs",
                  },
                  {
                    title: "Collaborative Environment",
                    desc: "Fostering teamwork and knowledge sharing",
                  },
                  {
                    title: "Client-Centric Focus",
                    desc: "Understanding and exceeding client expectations",
                    className: "md:col-span-2",
                  },
                ].map((item, index) => (
                  <div key={index} className={`flex ${item.className || ""}`}>
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-12 h-12 bg-[#4ECCEF]/10 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#4ECCEF] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-gray-dark mb-1">
                        {item.title}
                      </h3>
                      <p className="text-brand-gray-dark/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Leadership Impact */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ECCEF]/5 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#4ECCEF]/10 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#4ECCEF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#4ECCEF]">
                  Leadership Impact
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Established itself as a trusted technology partner",
                  "Developed innovative solutions in multiple domains",
                  "Built a team of passionate engineers and developers",
                  "Created platforms that solve complex data computing problems",
                  "Maintained steady growth since 2017",
                  "Delivered projects across various industries",
                  "Built strong client relationships based on trust and quality",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-[#4ECCEF]/10 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-[#4ECCEF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-brand-gray-dark/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Leadership */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 bg-gradient-to-r from-[#4ECCEF]/10 to-blue-100/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#4ECCEF]/5 rounded-full translate-y-20 -translate-x-20"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#4ECCEF]/20 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#4ECCEF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#4ECCEF]">
                  Contact Leadership
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-2">
                    <strong className="text-brand-gray-dark">Company:</strong>
                    <br />
                    <span className="text-brand-gray-dark/80">
                      SofTronicLabs (STLCO Technology Services Pvt Ltd.)
                    </span>
                  </p>
                  <p className="mb-2">
                    <strong className="text-brand-gray-dark">
                      Headquarters:
                    </strong>
                    <br />
                    <span className="text-brand-gray-dark/80">
                      Mysuru, Karnataka, India
                    </span>
                  </p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong className="text-brand-gray-dark">Founded:</strong>
                    <br />
                    <span className="text-brand-gray-dark/80">2017</span>
                  </p>
                  <p>
                    <strong className="text-brand-gray-dark">LinkedIn:</strong>
                    <br />
                    <a
                      href="https://www.linkedin.com/company/softroniclabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4ECCEF] underline hover:text-brand-gray-dark transition-colors"
                    >
                      SofTronicLabs Company Page
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
