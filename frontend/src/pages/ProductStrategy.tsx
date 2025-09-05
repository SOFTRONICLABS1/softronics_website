import ServicePageTemplate from '../components/templates/ServicePageTemplate';
import ProductStrategyFeatures from '../components/sections/ProductStrategyFeatures';
import type { ServicePageConfig, ServiceMenuItem } from '../types/ServicePage';

const ProductStrategy = () => {
  const pageConfig: ServicePageConfig = {
    tag: 'Product strategy consulting',
    title: 'Your first step towards long-term product success',
    description: 'We combine your product vision with our engineering expertise and domain understanding to craft a product strategy that lays down preferred methodologies, tech stack, and projections to help you quickly realize business objectives.',
    analytics: {
      pageTitle: 'Product Strategy - SoftronicLabs Portfolio',
      page: 'product-strategy',
      ctaEventName: 'product_strategy_hero',
      ctaSection: 'hero'
    }
  };

  const menuItems: ServiceMenuItem[] = [
    {
      id: 'focus-workshops',
      title: 'Focus workshops',
      content: {
        description: 'We collaborate closely with your team to identify quick wins and monetization opportunities that will provide the most value for your product and users.',
        details: 'Our consultants align business objectives with product development, ensuring every feature adds value and meets market demands while avoiding technical debt to support future scalability.'
      }
    },
    {
      id: 'engineering-projections',
      title: 'Engineering projections',
      content: {
        description: 'Strategic technical roadmapping that aligns your engineering capacity with business objectives and market opportunities.',
        details: 'We analyze your current tech stack, team velocity, and resource constraints to create realistic timelines and identify potential bottlenecks before they impact delivery.'
      }
    },
    {
      id: 'distribution-adoption',
      title: 'Distribution and adoption planning',
      content: {
        description: 'Comprehensive go-to-market strategies that ensure your product reaches the right audience through optimal channels.',
        details: 'From user acquisition funnels to retention strategies, we help you build sustainable growth mechanisms that scale with your product evolution.'
      }
    },
    {
      id: 'success-metrics',
      title: 'Success metrics',
      content: {
        description: 'Define and implement meaningful KPIs that drive product decisions and demonstrate business value.',
        details: 'We establish measurement frameworks that track both leading and lagging indicators, enabling data-driven product iterations and strategic pivots.'
      }
    }
  ];

  const sectionTitle = (
    <>
      How <span className="text-brand-cyan">SoftronicLabs</span> <span className="text-brand-gray-dark">helps:</span>
    </>
  );

  return (
    <ServicePageTemplate
      pageConfig={pageConfig}
      menuItems={menuItems}
      sectionTitle={sectionTitle}
      additionalSections={[<ProductStrategyFeatures key="product-strategy-features" />]}
    />
  );
};

export default ProductStrategy;