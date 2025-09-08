import IndustryPageTemplate from "../components/templates/IndustryPageTemplate";
import type { IndustryPageConfig, IndustryCapability, IndustryServiceCard } from "../types/IndustryPage";

const FinancialServices = () => {
  const pageConfig: IndustryPageConfig = {
    tag: "Finance",
    title: "Custom BFSI solutions built for performance, security, and compliance",
    description: "We develop bespoke solutions that ease operations and empower your customers with fast, reliable, and safe access to financial services.",
    analytics: {
      pageTitle: "Financial Services - SoftronicLabs Portfolio",
      page: "financial-services",
      ctaEventName: "financial_services_hero",
      ctaSection: "hero",
    },
  };

  const capabilities: IndustryCapability[] = [
    {
      id: "Banking solutions",
      title: "Banking solutions",
      content: {
        description: "Optimize core banking operations, from account opening to reconciliations and fraud prevention.",
        details: "We implement advanced ML algorithms for fraud detection, digital customer onboarding solutions with e-KYC capabilities, NLP-powered intelligent virtual assistants, and Open Banking API integrations for secure exchanges.",
      },
    },
    {
      id: "InsurTech solutions",
      title: "InsurTech solutions",
      content: {
        description: "Transform Healthcare operations with digital-first solutions that improve customer experience and operational efficiency.",
        details: "Our InsurTech solutions include policy management systems, claims processing automation, risk assessment tools, and customer portals that streamline operations and enhance service delivery.",
      },
    },
    {
      id: "Payments systems",
      title: "Payments systems",
      content: {
        description: "Build secure, scalable payment processing systems that handle high transaction volumes with real-time processing capabilities.",
        details: "We develop payment gateways, mobile payment solutions, digital wallets, and multi-currency processing systems with PCI DSS compliance and fraud detection mechanisms.",
      },
    },
    {
      id: "P2P lending and mortgage tech",
      title: "P2P lending and mortgage tech",
      content: {
        description: "Innovative lending platforms that connect borrowers and lenders with automated risk assessment and loan processing.",
        details: "Our solutions include credit scoring algorithms, automated loan origination systems, borrower-lender matching platforms, and mortgage processing automation with regulatory compliance.",
      },
    },
    {
      id: "Wealth management solutions",
      title: "Wealth management solutions",
      content: {
        description: "Comprehensive wealth management platforms that provide investment advisory, portfolio management, and client relationship tools.",
        details: "We build robo-advisors, portfolio analytics dashboards, client onboarding systems, and regulatory reporting tools that help wealth managers serve their clients more effectively.",
      },
    },
    {
      id: "Next-gen fintech solutions",
      title: "Next-gen fintech solutions",
      content: {
        description: "Cutting-edge fintech applications leveraging blockchain, AI, and cloud technologies for innovative financial services.",
        details: "Our next-generation solutions include cryptocurrency exchanges, DeFi platforms, AI-powered financial advisors, and cloud-native banking architectures that drive financial innovation.",
      },
    },
  ];

  const serviceCards: IndustryServiceCard[] = [
    {
      id: "domain-experience",
      title: "Domain experience",
      subtitle: "Financial Services Expertise",
      description: "Our extensive experience working with financial services customers helps us understand the sector's specific challenges and complexities, enabling us to develop tailored solutions.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "microsoft-gold-partner",
      title: "Microsoft Gold partner",
      subtitle: "Technology Excellence",
      description: "As an Microsoft Gold partner and Solution Partner for \"Digital and App Innovation\" and \"Data & AI.\", Simform excels in cloud engineering, leveraging it to offer unmatched scalability, flexibility, and security for the financial services industry.",
      pattern: "quads",
      accentColor: "#0099cc",
    },
    {
      id: "secure-compliant",
      title: "Secure and compliant",
      subtitle: "Security & Compliance",
      description: "At Simform, we prioritize the security of your financial data, implementing stringent measures and ensuring compliance with GDPR, KYC/AML, PCI DSS, and other relevant regulations.",
      pattern: "rings-right-strong",
      accentColor: "#33d6ff",
    },
    {
      id: "scalable-teams",
      title: "Scalable teams",
      subtitle: "Team Flexibility",
      description: "We are big enough to scale and small enough to care. Our flexible teams grow with you to enable rapid adjustments to project needs, ensuring timely delivery without compromising quality.",
      pattern: "diagonals",
      accentColor: "#00bcd4",
    },
    {
      id: "omnichannel-experience",
      title: "Omnichannel experience",
      subtitle: "Customer Experience",
      description: "We develop solutions that integrate seamlessly across different channels (mobile, web, in-branch) and allow customers to easily switch between channels without disruption.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "end-to-end-services",
      title: "End-to-end services",
      subtitle: "Complete Solutions",
      description: "We offer full-cycle development services, from initial design to maintenance, leveraging CI/CD, containerization, and DevOps for seamless feedback integration and faster deployments.",
      pattern: "quads",
      accentColor: "#33d6ff",
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">SoftronicLab's capabilities</span>
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

export default FinancialServices;