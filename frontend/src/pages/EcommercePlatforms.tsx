import IndustryPageTemplate from "../components/templates/IndustryPageTemplate";
import type { IndustryPageConfig, IndustryCapability, IndustryServiceCard } from "../types/IndustryPage";

const EcommercePlatforms = () => {
  const pageConfig: IndustryPageConfig = {
    tag: "E-commerce",
    title: "Modern e-commerce platforms that drive sales and enhance customer experiences",
    description: "We build scalable e-commerce solutions that integrate seamlessly across channels, optimize conversions, and deliver exceptional shopping experiences for modern consumers.",
    analytics: {
      pageTitle: "E-commerce Platforms - SoftronicLabs Portfolio",
      page: "e-commerce-platforms",
      ctaEventName: "e_commerce_platforms_hero",
      ctaSection: "hero",
    },
  };

  const capabilities: IndustryCapability[] = [
    {
      id: "Omnichannel commerce",
      title: "Omnichannel commerce",
      content: {
        description: "Create unified shopping experiences across web, mobile, social media, and physical stores with consistent branding and functionality.",
        details: "Our omnichannel solutions include unified inventory management, cross-channel customer profiles, consistent pricing and promotions, and seamless shopping cart synchronization across all touchpoints.",
      },
    },
    {
      id: "Personalization engines",
      title: "Personalization engines",
      content: {
        description: "AI-powered recommendation systems that deliver personalized product suggestions and targeted marketing campaigns.",
        details: "We implement machine learning algorithms for product recommendations, dynamic pricing, personalized content delivery, and behavioral targeting that increase conversion rates and customer engagement.",
      },
    },
    {
      id: "Inventory management",
      title: "Inventory management",
      content: {
        description: "Real-time inventory tracking and management systems that optimize stock levels and prevent stockouts.",
        details: "Our inventory solutions include automated stock replenishment, multi-warehouse management, real-time inventory tracking, demand forecasting, and integration with suppliers and logistics partners.",
      },
    },
    {
      id: "Payment integration",
      title: "Payment integration",
      content: {
        description: "Secure and flexible payment processing systems supporting multiple payment methods and currencies globally.",
        details: "We integrate payment gateways, digital wallets, buy-now-pay-later options, cryptocurrency payments, and subscription billing with fraud detection and PCI compliance for secure transactions.",
      },
    },
    {
      id: "Mobile commerce",
      title: "Mobile commerce",
      content: {
        description: "Mobile-optimized shopping experiences with native apps and progressive web applications for enhanced user engagement.",
        details: "Our mobile commerce solutions include responsive design, mobile apps, push notifications, mobile payments, location-based services, and offline functionality for seamless mobile shopping.",
      },
    },
    {
      id: "Analytics insights",
      title: "Analytics & insights",
      content: {
        description: "Comprehensive analytics platforms that provide actionable insights into customer behavior, sales performance, and business metrics.",
        details: "We build analytics dashboards with customer journey mapping, conversion funnel analysis, product performance metrics, and predictive analytics for data-driven decision making and growth optimization.",
      },
    },
  ];

  const serviceCards: IndustryServiceCard[] = [
    {
      id: "retail-expertise",
      title: "Retail expertise",
      subtitle: "E-commerce Knowledge",
      description: "Our deep understanding of retail operations, consumer behavior, and e-commerce best practices ensures solutions that drive real business results.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "performance-optimization",
      title: "Performance optimization",
      subtitle: "Speed & Scalability",
      description: "We build high-performance e-commerce platforms that load fast, handle traffic spikes, and provide smooth shopping experiences across all devices.",
      pattern: "quads",
      accentColor: "#0099cc",
    },
    {
      id: "integration-capabilities",
      title: "Integration capabilities",
      subtitle: "Seamless Connections",
      description: "Connect your e-commerce platform with ERP, CRM, marketing automation, and third-party services for streamlined operations and enhanced functionality.",
      pattern: "rings-right-strong",
      accentColor: "#33d6ff",
    },
    {
      id: "mobile-first-design",
      title: "Modular design",
      subtitle: "Mobile Commerce",
      description: "Create mobile-optimized shopping experiences that convert, with intuitive interfaces and fast performance on all mobile devices.",
      pattern: "diagonals",
      accentColor: "#00bcd4",
    },
    {
      id: "analytics-bi",
      title: "Analytics & BI",
      subtitle: "Data-Driven Insights",
      description: "Transform e-commerce data into actionable insights with advanced analytics, reporting, and business intelligence tools for strategic decision making.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "growth-enablement",
      title: "Growth enablement",
      subtitle: "Business Growth",
      description: "Our e-commerce solutions are designed to scale with your business growth, supporting increased traffic, transactions, and global expansion.",
      pattern: "quads",
      accentColor: "#33d6ff",
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">SoftronicLabs capabilities</span>
    </>
  );

  return (
    <IndustryPageTemplate
      pageConfig={pageConfig}
      capabilities={capabilities}
      serviceCards={serviceCards}
      sectionTitle={sectionTitle}
    />
  );
};

export default EcommercePlatforms;