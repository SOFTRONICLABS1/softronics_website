import IndustryPageTemplate from "../components/templates/IndustryPageTemplate";
import type { IndustryPageConfig, IndustryCapability, IndustryServiceCard } from "../types/IndustryPage";

const FintechInnovations = () => {
  const pageConfig: IndustryPageConfig = {
    tag: "FinTech",
    title: "Next-generation financial technology solutions for modern businesses",
    description: "We build cutting-edge FinTech solutions that drive financial innovation, enhance user experiences, and create new revenue streams through advanced technology and regulatory compliance.",
    analytics: {
      pageTitle: "Fintech Innovations - SoftronicLabs Portfolio",
      page: "fintech-innovations",
      ctaEventName: "fintech_innovations_hero",
      ctaSection: "hero",
    },
  };

  const capabilities: IndustryCapability[] = [
    {
      id: "Digital banking",
      title: "Digital banking",
      content: {
        description: "Build comprehensive digital banking platforms with modern user experiences and advanced financial management capabilities.",
        details: "Our digital banking solutions include core banking systems, mobile banking apps, web platforms, account management, transaction processing, and integrated financial tools with real-time insights and personalized banking experiences.",
      },
    },
    {
      id: "Payment solutions",
      title: "Payment solutions",
      content: {
        description: "Develop secure and scalable payment processing systems supporting multiple payment methods and currencies.",
        details: "We create payment gateways, digital wallets, peer-to-peer payment systems, contactless payments, cryptocurrency integration, and cross-border payment solutions with PCI compliance and fraud protection.",
      },
    },
    {
      id: "Blockchain integration",
      title: "Blockchain integration",
      content: {
        description: "Leverage blockchain technology for transparent, secure, and decentralized financial services and applications.",
        details: "Our blockchain solutions include smart contracts, DeFi platforms, cryptocurrency exchanges, tokenization systems, and distributed ledger applications with enhanced security and transparency for financial transactions.",
      },
    },
    {
      id: "Robo-advisors",
      title: "Robo-advisors",
      content: {
        description: "AI-powered investment platforms that provide automated financial advisory and portfolio management services.",
        details: "We build intelligent robo-advisory platforms with risk assessment algorithms, automated portfolio rebalancing, goal-based investing, and personalized financial recommendations using machine learning and data analytics.",
      },
    },
    {
      id: "RegTech",
      title: "RegTech",
      content: {
        description: "Regulatory technology solutions that automate compliance processes and ensure adherence to financial regulations.",
        details: "Our RegTech solutions include automated regulatory reporting, compliance monitoring, risk management systems, KYC/AML automation, and regulatory change management with real-time updates and audit trails.",
      },
    },
    {
      id: "Open banking APIs",
      title: "Open banking APIs",
      content: {
        description: "Secure API ecosystems enabling third-party integrations and innovative financial service offerings.",
        details: "We develop open banking API platforms with secure authentication, data sharing protocols, partner integrations, and developer portals that enable financial institutions to expand their service ecosystem safely.",
      },
    },
  ];

  const serviceCards: IndustryServiceCard[] = [
    {
      id: "innovation-lab",
      title: "Innovation lab",
      subtitle: "Technology Leadership",
      description: "Our dedicated innovation lab explores emerging FinTech trends and technologies, ensuring your solutions leverage the latest advancements in financial technology.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "regulatory-expertise",
      title: "Regulatory expertise",
      subtitle: "Compliance Excellence",
      description: "Deep understanding of financial regulations across global markets ensures your FinTech solutions meet all compliance requirements and regulatory standards.",
      pattern: "quads",
      accentColor: "#0099cc",
    },
    {
      id: "security-first-approach",
      title: "Security-first approach",
      subtitle: "Financial Security",
      description: "We implement bank-grade security measures, encryption, and fraud prevention systems to protect sensitive financial data and transactions.",
      pattern: "rings-right-strong",
      accentColor: "#33d6ff",
    },
    {
      id: "scalable-architecture",
      title: "Scalable architecture",
      subtitle: "Growth Ready",
      description: "Build FinTech platforms that scale seamlessly with user growth and transaction volumes while maintaining performance and reliability.",
      pattern: "diagonals",
      accentColor: "#00bcd4",
    },
    {
      id: "market-expertise",
      title: "Market expertise",
      subtitle: "Financial Markets",
      description: "Our team's deep understanding of financial markets, instruments, and user behaviors enables us to create solutions that truly address market needs.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "end-to-end-delivery",
      title: "End-to-end delivery",
      subtitle: "Complete Solutions",
      description: "From concept to deployment and maintenance, we provide comprehensive FinTech development services with ongoing support and optimization.",
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

export default FintechInnovations;