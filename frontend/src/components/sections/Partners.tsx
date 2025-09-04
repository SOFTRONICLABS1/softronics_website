import { FiAward, FiTrendingUp, FiUsers, FiGlobe } from 'react-icons/fi';

const partnerCategories = [
  {
    title: 'Technology Partners',
    description: 'Leading technology providers we collaborate with',
    partners: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes']
  },
  {
    title: 'Integration Partners',
    description: 'Seamless integrations with popular platforms',
    partners: ['Salesforce', 'HubSpot', 'Stripe', 'PayPal', 'Slack']
  },
  {
    title: 'Consulting Partners',
    description: 'Strategic alliances for comprehensive solutions',
    partners: ['Deloitte', 'Accenture', 'PwC', 'KPMG', 'EY']
  }
];

const achievements = [
  {
    icon: FiAward,
    title: 'Industry Recognition',
    description: 'Multiple awards for innovation and excellence',
    stats: '15+ Awards'
  },
  {
    icon: FiTrendingUp,
    title: 'Growth Rate',
    description: 'Consistent year-over-year growth',
    stats: '40% YoY'
  },
  {
    icon: FiUsers,
    title: 'Team Size',
    description: 'Expert engineers and consultants',
    stats: '200+ Experts'
  },
  {
    icon: FiGlobe,
    title: 'Global Presence',
    description: 'Serving clients worldwide',
    stats: '15+ Countries'
  }
];

const Partners = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              🤝 Partnerships
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Strategic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Partnerships
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver comprehensive solutions and drive innovation across all technology stacks.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {partnerCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              <div className="space-y-3">
                {category.partners.map((partner, partnerIndex) => (
                  <div 
                    key={partnerIndex}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {partner.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium text-gray-700">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-dark-900 mb-4">
              Our Achievements
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones that demonstrate our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    {achievement.stats}
                  </div>
                  <h4 className="text-lg font-semibold text-dark-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise and partnerships can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                style={{
                  background: "#4ECCEF",
                  boxShadow: "0 4px 15px rgba(78, 204, 239, 0.3)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3DB8E0";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(78, 204, 239, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#4ECCEF";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(78, 204, 239, 0.3)";
                }}
              >
                Schedule Consultation
              </button>
              <button 
                className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-0.5 border-2"
                style={{
                  background: "#4ECCEF",
                  borderColor: "#4ECCEF",
                  boxShadow: "0 4px 15px rgba(78, 204, 239, 0.3)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3DB8E0";
                  e.currentTarget.style.borderColor = "#3DB8E0";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(78, 204, 239, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#4ECCEF";
                  e.currentTarget.style.borderColor = "#4ECCEF";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(78, 204, 239, 0.3)";
                }}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;