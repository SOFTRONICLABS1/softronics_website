import IndustryPageTemplate from "../components/templates/IndustryPageTemplate";
import type { IndustryPageConfig, IndustryCapability, IndustryServiceCard } from "../types/IndustryPage";

const SupplyChainManagement = () => {
  const pageConfig: IndustryPageConfig = {
    tag: "Supply Chain",
    title: "Digital supply chain solutions that optimize operations and drive efficiency",
    description: "We build intelligent supply chain management systems that provide real-time visibility, optimize logistics, and enable data-driven decision making across your entire supply network.",
    analytics: {
      pageTitle: "Supply Chain Management - SoftronicLabs Portfolio",
      page: "supply-chain-management",
      ctaEventName: "supply_chain_management_hero",
      ctaSection: "hero",
    },
  };

  const capabilities: IndustryCapability[] = [
    {
      id: "Logistics optimization",
      title: "Logistics optimization",
      content: {
        description: "Advanced algorithms and AI-powered systems that optimize routing, scheduling, and resource allocation for maximum efficiency.",
        details: "Our logistics optimization solutions include route planning algorithms, load optimization, warehouse management automation, transportation management systems, and last-mile delivery optimization with real-time adjustments.",
      },
    },
    {
      id: "Inventory tracking",
      title: "Inventory tracking",
      content: {
        description: "Real-time inventory visibility across multiple locations with automated tracking and management capabilities.",
        details: "We implement RFID and IoT-based tracking systems, barcode scanning solutions, automated inventory counting, stock level monitoring, and integration with ERP systems for complete inventory visibility.",
      },
    },
    {
      id: "Predictive analytics",
      title: "Predictive analytics",
      content: {
        description: "Machine learning models that forecast demand, identify risks, and optimize supply chain performance proactively.",
        details: "Our predictive analytics solutions include demand forecasting, supply risk assessment, price optimization, seasonal trend analysis, and predictive maintenance for supply chain equipment and systems.",
      },
    },
    {
      id: "Supplier integration",
      title: "Supplier integration",
      content: {
        description: "Seamless integration platforms that connect suppliers, vendors, and partners in a unified supply chain ecosystem.",
        details: "We build supplier portals, API integrations, electronic data interchange (EDI) systems, collaborative planning platforms, and automated procurement processes with real-time communication and document sharing.",
      },
    },
    {
      id: "Real-time visibility",
      title: "Real-time visibility",
      content: {
        description: "Comprehensive dashboards and monitoring systems that provide end-to-end supply chain visibility and control.",
        details: "Our visibility solutions include real-time tracking dashboards, supply chain mapping, exception management, performance monitoring, and mobile applications for field operations and management oversight.",
      },
    },
    {
      id: "Demand forecasting",
      title: "Demand forecasting",
      content: {
        description: "Advanced forecasting models that predict customer demand patterns and optimize inventory planning accordingly.",
        details: "We develop machine learning-based demand prediction models, seasonal adjustment algorithms, market trend analysis, and collaborative forecasting platforms that improve accuracy and reduce stockouts.",
      },
    },
  ];

  const serviceCards: IndustryServiceCard[] = [
    {
      id: "supply-chain-expertise",
      title: "Supply chain expertise",
      subtitle: "Domain Knowledge",
      description: "Our team's deep understanding of supply chain processes, challenges, and best practices ensures solutions that address real operational needs.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "iot-integration",
      title: "IoT integration",
      subtitle: "Connected Operations",
      description: "Leverage IoT sensors, RFID, and connected devices to create intelligent supply chains with real-time data collection and automated responses.",
      pattern: "quads",
      accentColor: "#0099cc",
    },
    {
      id: "data-analytics",
      title: "Data analytics",
      subtitle: "Intelligent Insights",
      description: "Transform supply chain data into actionable insights with advanced analytics, machine learning, and AI for optimized decision making.",
      pattern: "rings-right-strong",
      accentColor: "#33d6ff",
    },
    {
      id: "process-optimization",
      title: "Process optimization",
      subtitle: "Operational Excellence",
      description: "Streamline supply chain processes through automation, workflow optimization, and continuous improvement methodologies.",
      pattern: "diagonals",
      accentColor: "#00bcd4",
    },
    {
      id: "real-time-monitoring",
      title: "Real-time monitoring",
      subtitle: "Operational Visibility",
      description: "Monitor supply chain performance in real-time with comprehensive dashboards, alerts, and mobile applications for immediate response to issues.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "end-to-end-visibility",
      title: "End-to-end visibility",
      subtitle: "Complete Transparency",
      description: "Gain complete visibility across your entire supply network from suppliers to customers with integrated tracking and reporting systems.",
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

export default SupplyChainManagement;