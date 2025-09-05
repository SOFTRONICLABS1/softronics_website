import { useState } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

interface FeatureCard {
  title: string;
  description: string;
}

const ProductStrategyFeatures = () => {
  const { trackCustomEvent } = useAnalytics();

  const featureCards: FeatureCard[] = [
    {
      title: "Focus workshops & blueprints",
      description: "Leverage proven best practices and frameworks tailored to the critical product engineering objectives, encompassing scalable frontends, modular architectures, performance engineering, and more."
    },
    {
      title: "Cloud-native & DevOps dev expertise", 
      description: "Our deep understanding of cloud-native technologies and DevOps (Microservices, API-first, Cloud-native, and Headless) architecture ensures that your solutions are modern, flexible, and highly scalable."
    },
    {
      title: "Co-engineering practices",
      description: "Perfected after years of primarily serving product companies, our co-engineering practices are designed to enhance collaboration between your teams and ours, fostering innovation and accelerating timelines."
    },
    {
      title: "Cloud partnership recognitions",
      description: "Our strong partnerships with leading cloud providers highlight our commitment to leveraging the best technologies for your projects, allowing us to implement robust advanced cloud solutions."
    },
    {
      title: "Diverse tech stack & skills",
      description: "We offer expertise across a wide range of tech stacks, including front-end, back-end, data science, DevOps, etc., ensuring we have the right tools and skills to address your unique requirements."
    },
    {
      title: "Agile delivery model",
      description: "Our Agile approach offers dedicated teams that swiftly scale up or down in response to your project's development requirements, ensuring timely deliveries while maximizing resource efficiency across multiple initiatives."
    }
  ];

  const handleCardInteraction = (cardTitle: string) => {
    trackCustomEvent('Product Strategy Feature Card View', {
      card_title: cardTitle,
      section: 'product_strategy_features',
      page: 'product-strategy'
    });
  };

  // Cyan gradient variations matching Services section
  const getCardGradient = (index: number) => {
    const gradients = [
      'linear-gradient(135deg, #66e0ff 0%, #ccf7ff 100%)', // Card 1
      'linear-gradient(135deg, #66e0ff 0%, #99ecff 100%)', // Card 2
      'linear-gradient(135deg, #66e0ff 0%, #b3f3ff 100%)', // Card 3
      'linear-gradient(135deg, #66e0ff 0%, #ccf7ff 100%)', // Card 4
      'linear-gradient(135deg, #66e0ff 0%, #99ecff 100%)', // Card 5
      'linear-gradient(135deg, #66e0ff 0%, #b3f3ff 100%)', // Card 6
    ];
    return gradients[index % gradients.length];
  };

  const getCardShadow = (isHovered: boolean, index: number) => {
    if (isHovered) {
      return index % 2 === 0
        ? "0 20px 40px rgba(255, 165, 0, 0.25)"
        : "0 20px 40px rgba(102, 224, 255, 0.25)";
    }
    return "0 10px 30px rgba(102, 224, 255, 0.15)";
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-brand-cyan">
            Accelerate product success with SoftronicLabs' digital engineering expertise
          </h2>
          <p className="text-lg sm:text-xl text-brand-gray-dark max-w-4xl mx-auto leading-relaxed">
            With SoftronicLabs, you can put together a perfect solution that accommodates your business objectives. We'll help you realize the power of end-to-end performance testing, and achieve extraordinary success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featureCards.map((card, index) => {
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer relative overflow-hidden group"
                style={{ 
                  background: getCardGradient(index),
                  minHeight: '280px',
                  boxShadow: getCardShadow(isHovered, index)
                }}
                onClick={() => handleCardInteraction(card.title)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Hover overlay effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(102, 224, 255, 0.2) 0%, transparent 70%)',
                  }}
                />
                
                <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="relative z-10 text-white/95 leading-relaxed text-base sm:text-lg">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductStrategyFeatures;