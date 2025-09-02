import { FiTrendingUp, FiShield, FiHeart, FiShoppingBag, FiGlobe, FiZap } from 'react-icons/fi';

const industries = [
  {
    id: '1',
    name: 'FinTech',
    description: 'Digital banking, payment solutions, and financial services',
    icon: FiTrendingUp,
    projects: '50+',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '2',
    name: 'Healthcare',
    description: 'Telemedicine, patient management, and healthcare analytics',
    icon: FiHeart,
    projects: '35+',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: '3',
    name: 'E-commerce',
    description: 'Online marketplaces, retail platforms, and logistics',
    icon: FiShoppingBag,
    projects: '80+',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: '4',
    name: 'Enterprise',
    description: 'Business automation, ERP systems, and workflow management',
    icon: FiGlobe,
    projects: '120+',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: '5',
    name: 'Security',
    description: 'Cybersecurity solutions, threat detection, and compliance',
    icon: FiShield,
    projects: '25+',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: '6',
    name: 'Energy & IoT',
    description: 'Smart grids, renewable energy, and connected devices',
    icon: FiZap,
    projects: '40+',
    color: 'from-yellow-500 to-orange-500'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium">
              🏭 Industry Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Serving Diverse{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring deep domain expertise across multiple industries, understanding unique challenges and delivering tailored solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-transparent overflow-hidden relative"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
                    {industry.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-gray-500">Projects Delivered:</span>
                      <div className="text-2xl font-bold text-primary-500 mt-1">{industry.projects}</div>
                    </div>
                    
                    <button 
                      className="opacity-0 group-hover:opacity-100 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)",
                        boxShadow: "0 4px 15px rgba(255, 165, 0, 0.3)"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, #FFB84D 0%, #FFA500 100%)";
                        e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 165, 0, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)";
                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 165, 0, 0.3)";
                      }}
                    >
                      View Projects
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">350+</div>
              <div className="text-primary-100 font-medium">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100 font-medium">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;