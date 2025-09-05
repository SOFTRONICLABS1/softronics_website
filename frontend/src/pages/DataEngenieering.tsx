import ServicePageTemplate from "../components/templates/ServicePageTemplate";
import ProductStrategyFeatures from "../components/sections/ProductStrategyFeatures";
import type { ServicePageConfig, ServiceMenuItem } from "../types/ServicePage";

const DataEngenieering = () => {
  const pageConfig: ServicePageConfig = {
    tag: "Data science consulting",
    title: "Turn complex data into actionable business insights",
    description:
      "Our data scientists transform your raw data into powerful visualizations and predictive models, for informed decision-making across your organization.",
    analytics: {
      pageTitle: "Product Strategy - SoftronicLabs Portfolio",
      page: "product-strategy",
      ctaEventName: "product_strategy_hero",
      ctaSection: "hero",
    },
  };

  const menuItems: ServiceMenuItem[] = [
    {
      id: "Data strategy consulting",
      title: "Data strategy consulting",
      content: {
        description:
          "Get a precise strategy to transform your data into business value, with a clear roadmap prioritizing high-impact initiatives and measurable outcomes.",
        details:
          "Our team analyzes your data maturity and business objectives to recommend priority data initiatives, implementation milestones, and capability requirements. We also help you design optimal data architecture that can continuously scale as your needs evolve.",
      },
    },
    {
      id: "Data management",
      title: "Data management",
      content: {
        description:
          "Build a reliable data foundation that eliminates inconsistencies and ensures data quality at every step of your data journey.",
        details:
          "Our data engineers help you select relevant data sources and create efficient data pipelines that handle diverse data sources and complex transformations at scale. We also guide you on unifying datasets through advanced entity resolution and normalization for utmost integrity.",
      },
    },
    {
      id: "Predictive modeling and refinement",
      title: "Predictive modeling and refinement",
      content: {
        description:
          "Transform your historical data into accurate forecasts that reduce business uncertainty and drive data-powered decision making across your organization.",
        details:
          "Our data scientists guide you in selecting optimal modeling approaches, from ensemble learning to deep belief networks for your specific needs. We also help you establish processes for continuous model validation and improvement across diverse business use cases.",
      },
    },
    {
      id: "AI and ML integration",
      title: "AI and ML integration",
      content: {
        description:
          "Optimize your data science lifecycle with advanced AI and ML capabilities to automate everything from data preparation and exploration to building, deploying, and monitoring models.",
        details:
          "We evaluate your organization’s AI readiness, identify high-impact use cases across your data science processes, and guide you on selecting the right automation algorithms and validation approaches for seamless integration.",
      },
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">SoftronicLabs'</span>{' '}
      <span className="text-brand-gray-dark">QA engineering capabilities</span>
    </>
  );

  return (
    <ServicePageTemplate
      pageConfig={pageConfig}
      menuItems={menuItems}
      sectionTitle={sectionTitle}
      additionalSections={[
        <ProductStrategyFeatures key="product-strategy-features" />,
      ]}
    />
  );
};

export default DataEngenieering;
