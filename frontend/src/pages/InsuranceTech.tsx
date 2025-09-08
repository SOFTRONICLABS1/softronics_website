import IndustryPageTemplate from "../components/templates/IndustryPageTemplate";
import type { IndustryPageConfig, IndustryCapability, IndustryServiceCard } from "../types/IndustryPage";

const InsuranceTech = () => {
  const pageConfig: IndustryPageConfig = {
    tag: "Healthcare and Life Sciences",
    title: "Transform insurance operations with digital-first solutions",
    description: "We develop innovative InsurTech solutions that streamline operations, enhance customer experience, and drive digital transformation across the insurance value chain.",
    analytics: {
      pageTitle: "Insurance Tech - SoftronicLabs Portfolio",
      page: "insurance-tech",
      ctaEventName: "insurance_tech_hero",
      ctaSection: "hero",
    },
  };

  const capabilities: IndustryCapability[] = [
    {
      id: "Policy management systems",
      title: "Policy management systems",
      content: {
        description: "Comprehensive policy lifecycle management from quote generation to claims settlement with automated workflows.",
        details: "Our policy management solutions include quote engines, underwriting automation, policy administration systems, renewals management, and integrated customer portals with real-time policy updates and self-service capabilities.",
      },
    },
    {
      id: "Claims automation",
      title: "Claims automation",
      content: {
        description: "Streamline claims processing with AI-powered automation, reducing processing time and improving customer satisfaction.",
        details: "We implement intelligent claims routing, automated damage assessment using computer vision, fraud detection algorithms, and digital claims settlement processes with real-time status tracking and communication.",
      },
    },
    {
      id: "Risk assessment tools",
      title: "Risk assessment tools",
      content: {
        description: "Advanced risk modeling and assessment platforms using data analytics and machine learning for accurate pricing.",
        details: "Our solutions include predictive risk models, real-time risk monitoring, IoT integration for dynamic pricing, behavioral analytics, and comprehensive risk dashboards for underwriters and agents.",
      },
    },
    {
      id: "Customer portals",
      title: "Customer portals",
      content: {
        description: "Self-service digital platforms that empower customers to manage policies, file claims, and access insurance services 24/7.",
        details: "We build responsive customer portals with policy management, claims filing and tracking, document upload, payment processing, and personalized dashboards with modular design and omnichannel support.",
      },
    },
    {
      id: "Fraud detection",
      title: "Fraud detection",
      content: {
        description: "AI-powered fraud detection systems that identify suspicious patterns and protect against fraudulent claims.",
        details: "Our fraud detection solutions use machine learning algorithms, network analysis, behavioral profiling, and real-time monitoring to detect anomalies and prevent fraudulent activities across the insurance lifecycle.",
      },
    },
    {
      id: "Regulatory compliance",
      title: "Regulatory compliance",
      content: {
        description: "Automated compliance management systems ensuring adherence to insurance regulations and reporting requirements.",
        details: "We implement regulatory reporting automation, compliance monitoring dashboards, audit trail management, and regulatory change management systems that adapt to evolving insurance regulations globally.",
      },
    },
  ];

  const serviceCards: IndustryServiceCard[] = [
    {
      id: "domain-expertise",
      title: "Domain expertise",
      subtitle: "Insurance Industry Knowledge",
      description: "Our deep understanding of insurance processes, regulations, and market dynamics enables us to deliver solutions that address real business challenges and drive operational efficiency.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "cloud-first-architecture",
      title: "Cloud-first architecture",
      subtitle: "Scalable Solutions",
      description: "We build cloud-native InsurTech solutions that scale with your business growth, ensuring high availability, security, and performance while reducing infrastructure costs.",
      pattern: "quads",
      accentColor: "#0099cc",
    },
    {
      id: "data-analytics",
      title: "Data analytics",
      subtitle: "Insights & Intelligence",
      description: "Transform insurance data into actionable insights with advanced analytics, enabling better risk assessment, pricing strategies, and customer experience optimization.",
      pattern: "rings-right-strong",
      accentColor: "#33d6ff",
    },
    {
      id: "compliance-security",
      title: "Compliance & security",
      subtitle: "Regulatory Adherence",
      description: "We ensure your InsurTech solutions meet all regulatory requirements and security standards, protecting customer data and maintaining compliance across jurisdictions.",
      pattern: "diagonals",
      accentColor: "#00bcd4",
    },
    {
      id: "process-automation",
      title: "Process automation",
      subtitle: "Operational Efficiency",
      description: "Automate complex insurance workflows from underwriting to claims processing, reducing manual effort and improving accuracy while enhancing customer experience.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "customer-experience",
      title: "Customer experience",
      subtitle: "Digital Transformation",
      description: "Create seamless digital experiences that meet modern customer expectations, from mobile-first interfaces to personalized insurance products and services.",
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

export default InsuranceTech;