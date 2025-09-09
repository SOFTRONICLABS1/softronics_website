import ServicePageTemplate from "../components/templates/ServicePageTemplate";
import type { ServicePageConfig, ServiceMenuItem } from "../types/ServicePage";

const InnovationLab = () => {
  const pageConfig: ServicePageConfig = {
    tag: "Innovation Lab Solutions",
    title: "Transform ideas into validated solutions through structured experimentation",
    description:
      "Our Innovation Lab turns concepts into reality through rapid prototyping, structured experimentation, and measurable pilots. From architecture spikes to sandboxed AI experiments, we help you ship what matters—faster.",
    analytics: {
      pageTitle: "Innovation Lab - SoftronicLabs Portfolio",
      page: "innovation-lab",
      ctaEventName: "innovation_lab_hero",
      ctaSection: "hero",
    },
  };

  const menuItems: ServiceMenuItem[] = [
    {
      id: "rapid-prototyping",
      title: "Rapid Prototyping",
      content: {
        description:
          "Quickly validate ideas and concepts through functional prototypes that demonstrate feasibility and user value.",
        details:
          "We build working prototypes in days or weeks, not months. Using modern low-code and no-code tools combined with custom development, we create interactive demonstrations that stakeholders can experience and provide feedback on before full development begins.",
      },
    },
    {
      id: "experimental-frameworks",
      title: "Experimental Frameworks",
      content: {
        description:
          "Structured approach to testing hypotheses, measuring outcomes, and making data-driven decisions about product direction.",
        details:
          "Our experimental frameworks include A/B testing, feature flags, analytics integration, and success metrics definition. We help you set up controlled experiments that provide clear insights for product decisions and minimize risk in new feature development.",
      },
    },
    {
      id: "technology-spikes",
      title: "Technology Architecture Spikes",
      content: {
        description:
          "Explore emerging technologies and architectural patterns through focused research and proof-of-concept implementations.",
        details:
          "We conduct time-boxed investigations into new technologies, frameworks, or architectural approaches. Our spikes provide clear recommendations, implementation guides, and risk assessments to inform your technology strategy and roadmap decisions.",
      },
    },
    {
      id: "ai-experimentation",
      title: "AI/ML Experimentation",
      content: {
        description:
          "Sandbox environment for exploring AI and machine learning applications within your business context.",
        details:
          "We create isolated environments for testing AI/ML models, exploring generative AI applications, and evaluating emerging AI technologies. Our experiments include data preparation, model training, performance evaluation, and integration feasibility assessment.",
      },
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">SoftronicLabs</span>{' '}
      <span className="text-brand-gray-dark">innovation lab capabilities</span>
    </>
  );

  return (
    <ServicePageTemplate
      pageConfig={pageConfig}
      menuItems={menuItems}
      sectionTitle={sectionTitle}
    />
  );
};

export default InnovationLab;