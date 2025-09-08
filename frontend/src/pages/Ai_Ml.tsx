import ServicePageTemplate from "../components/templates/ServicePageTemplate";
import ProductStrategyFeatures from "../components/sections/ProductStrategyFeatures";
import AIMLContent from "../components/sections/AIMLContent";
import type { ServicePageConfig, ServiceMenuItem } from "../types/ServicePage";

const Ai_Ml = () => {
  const pageConfig: ServicePageConfig = {
    tag: "AI/ML Engineering",
    title: "Bring intelligence into your business functions with AI-led solutions that scale",
    description:
      "Your organization generates valuable data every day. We help you transform it into actionable insights and automated solutions that optimize operations, improve customer experiences, and drive sustainable growth.",
    analytics: {
      pageTitle: "AI/ML Engineering - SoftronicLabs Portfolio",
      page: "ai-ml-engineering",
      ctaEventName: "ai_ml_hero",
      ctaSection: "hero",
    },
  };

  const menuItems: ServiceMenuItem[] = [
    {
      id: "Generative AI",
      title: "Generative AI",
      content: {
        description:
          "Your business has immense potential for automation and innovation, but implementing AI solutions can be complex and resource-intensive. We help you leverage generative AI from strategic planning to deployment and deliver custom solutions that improve productivity and drive competitive advantage.",
        details:
          "Our approach includes strategic AI roadmap development, custom AI solution development, and autonomous agent implementation. We guide you through the entire process from ideation to production deployment, ensuring your AI solutions are scalable, reliable, and aligned with your business objectives.",
      },
    },
    {
      id: "Data science",
      title: "Data science",
      content: {
        description:
          "Transform your raw data into powerful insights and predictive models that drive informed decision-making across your organization.",
        details:
          "Our data scientists help you extract meaningful patterns from complex datasets, build predictive models, and create data-driven solutions. We specialize in statistical analysis, machine learning model development, and advanced analytics that turn your data into a competitive advantage.",
      },
    },
    {
      id: "Machine learning",
      title: "Machine learning",
      content: {
        description:
          "Build intelligent systems that learn from data and improve over time, automating complex decision-making processes and enhancing operational efficiency.",
        details:
          "We develop custom machine learning solutions including supervised and unsupervised learning models, deep learning systems, and reinforcement learning applications. Our ML solutions are designed for scalability, performance, and seamless integration with your existing infrastructure.",
      },
    },
    {
      id: "MLOps",
      title: "MLOps",
      content: {
        description:
          "Streamline your machine learning lifecycle with robust MLOps practices that ensure reliable model deployment, monitoring, and continuous improvement.",
        details:
          "Our MLOps services include CI/CD pipeline setup for ML models, automated model training and deployment, performance monitoring, model versioning, and governance frameworks. We help you establish best practices for managing ML models at scale in production environments.",
      },
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">Our AI/ML services</span>
    </>
  );

  return (
    <ServicePageTemplate
      pageConfig={pageConfig}
      menuItems={menuItems}
      sectionTitle={sectionTitle}
      additionalSections={[
        <AIMLContent key="aiml-content" />,
        <ProductStrategyFeatures key="product-strategy-features" />,
      ]}
    />
  );
};

export default Ai_Ml;
