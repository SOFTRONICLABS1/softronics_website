import IndustryPageTemplate from "../components/templates/IndustryPageTemplate";
import type { IndustryPageConfig, IndustryCapability, IndustryServiceCard } from "../types/IndustryPage";

const Industry40 = () => {
  const pageConfig: IndustryPageConfig = {
    tag: "Industry 4.0",
    title: "Smart manufacturing solutions powered by IoT, AI, and digital transformation",
    description: "We build Industry 4.0 solutions that revolutionize manufacturing through intelligent automation, predictive maintenance, and data-driven optimization for competitive advantage.",
    analytics: {
      pageTitle: "Industry 4.0 - SoftronicLabs Portfolio",
      page: "industry-4-0",
      ctaEventName: "industry_4_0_hero",
      ctaSection: "hero",
    },
  };

  const capabilities: IndustryCapability[] = [
    {
      id: "Smart manufacturing",
      title: "Smart manufacturing",
      content: {
        description: "Intelligent manufacturing systems that optimize production processes through automation, real-time monitoring, and adaptive control.",
        details: "Our smart manufacturing solutions include automated production lines, real-time quality control, adaptive manufacturing systems, and integrated MES/ERP platforms that enhance productivity and reduce waste.",
      },
    },
    {
      id: "Industrial IoT",
      title: "Industrial IoT",
      content: {
        description: "Connected industrial systems that collect, analyze, and act on real-time data from machines, sensors, and production equipment.",
        details: "We implement IoT sensor networks, edge computing systems, industrial connectivity solutions, and data collection platforms that enable real-time monitoring and control of manufacturing operations.",
      },
    },
    {
      id: "Predictive maintenance",
      title: "Predictive maintenance",
      content: {
        description: "AI-powered maintenance systems that predict equipment failures and optimize maintenance schedules to minimize downtime.",
        details: "Our predictive maintenance solutions use machine learning algorithms, vibration analysis, thermal monitoring, and historical data to predict failures, schedule maintenance, and optimize equipment lifecycle.",
      },
    },
    {
      id: "Quality control automation",
      title: "Quality control automation",
      content: {
        description: "Automated quality inspection systems using computer vision and AI to ensure consistent product quality and reduce defects.",
        details: "We build computer vision-based inspection systems, automated testing platforms, statistical process control, and quality management systems that maintain high standards while reducing manual inspection.",
      },
    },
    {
      id: "Digital twins",
      title: "Digital twins",
      content: {
        description: "Virtual representations of physical manufacturing systems that enable simulation, optimization, and predictive analysis.",
        details: "Our digital twin solutions create virtual models of production lines, equipment, and processes for simulation, optimization, scenario planning, and predictive analysis to improve performance.",
      },
    },
    {
      id: "Production optimization",
      title: "Production optimization",
      content: {
        description: "Data-driven optimization systems that maximize efficiency, reduce waste, and improve overall equipment effectiveness (OEE).",
        details: "We implement production planning algorithms, resource optimization systems, energy management platforms, and performance analytics that continuously improve manufacturing efficiency and reduce costs.",
      },
    },
  ];

  const serviceCards: IndustryServiceCard[] = [
    {
      id: "manufacturing-expertise",
      title: "Manufacturing expertise",
      subtitle: "Industry Knowledge",
      description: "Our deep understanding of manufacturing processes, equipment, and challenges enables us to deliver solutions that truly transform industrial operations.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "iot-solutions",
      title: "IoT solutions",
      subtitle: "Connected Manufacturing",
      description: "Deploy comprehensive IoT ecosystems that connect machines, sensors, and systems for real-time monitoring and intelligent automation.",
      pattern: "quads",
      accentColor: "#0099cc",
    },
    {
      id: "ai-ml-integration",
      title: "AI/ML integration",
      subtitle: "Intelligent Systems",
      description: "Integrate artificial intelligence and machine learning into manufacturing processes for predictive insights, automation, and optimization.",
      pattern: "rings-right-strong",
      accentColor: "#33d6ff",
    },
    {
      id: "industrial-security",
      title: "Industrial security",
      subtitle: "Cyber-Physical Security",
      description: "Implement robust cybersecurity measures for industrial systems, protecting against cyber threats while ensuring operational continuity.",
      pattern: "diagonals",
      accentColor: "#00bcd4",
    },
    {
      id: "digital-transformation",
      title: "Digital transformation",
      subtitle: "Industry Evolution",
      description: "Guide your manufacturing organization through complete digital transformation with strategic planning and phased implementation.",
      pattern: "rings-right",
      accentColor: "#00bcd4",
    },
    {
      id: "operational-excellence",
      title: "Operational excellence",
      subtitle: "Continuous Improvement",
      description: "Achieve operational excellence through continuous monitoring, optimization, and improvement of manufacturing processes and systems.",
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

export default Industry40;