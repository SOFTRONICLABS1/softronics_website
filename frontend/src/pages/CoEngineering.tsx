import ServicePageTemplate from "../components/templates/ServicePageTemplate";
import type { ServicePageConfig, ServiceMenuItem } from "../types/ServicePage";

const CoEngineering = () => {
  const pageConfig: ServicePageConfig = {
    tag: "Co-Engineering Delivery Model",
    title: "Accelerate product roadmaps with seamless co-engineering collaboration",
    description:
      "Our co-engineering model integrates expert teams with yours for smooth collaboration, rapid execution, and scalable delivery. With Core-Flexi resourcing, we match engineering capabilities to your needs for speed, flexibility, and ROI.",
    analytics: {
      pageTitle: "Co-Engineering - SoftronicLabs Portfolio",
      page: "co-engineering",
      ctaEventName: "co_engineering_hero",
      ctaSection: "hero",
    },
  };

  const menuItems: ServiceMenuItem[] = [
    {
      id: "integrated-teams",
      title: "Integrated Team Model",
      content: {
        description:
          "Seamlessly integrate our expert engineers with your existing teams for collaborative development and knowledge transfer.",
        details:
          "Our engineers work as an extension of your team, adopting your processes, tools, and culture. We ensure smooth communication, shared accountability, and aligned objectives while maintaining your team's autonomy and decision-making authority.",
      },
    },
    {
      id: "core-flexi-resourcing",
      title: "Core-Flexi Resourcing",
      content: {
        description:
          "Scale your engineering capabilities dynamically with our flexible resource allocation model that adapts to your project needs.",
        details:
          "Maintain a stable core team for consistency while flexibly scaling additional resources during peak development phases. This approach optimizes costs while ensuring delivery quality and timeline adherence across varying project demands.",
      },
    },
    {
      id: "rapid-execution",
      title: "Rapid Execution Framework",
      content: {
        description:
          "Accelerate time-to-market with our proven methodologies for fast, efficient product development and deployment.",
        details:
          "Our framework combines agile development practices, continuous integration, automated testing, and iterative feedback loops. We focus on delivering working software quickly while maintaining high quality standards and reducing technical debt.",
      },
    },
    {
      id: "knowledge-transfer",
      title: "Knowledge Transfer & Upskilling",
      content: {
        description:
          "Ensure long-term success with comprehensive knowledge transfer and team upskilling throughout the engagement.",
        details:
          "We document processes, share best practices, and conduct training sessions to ensure your team can maintain and evolve the solution independently. Our goal is to leave your team more capable and self-sufficient than before.",
      },
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">SoftronicLabs</span>{' '}
      <span className="text-brand-gray-dark">co-engineering capabilities</span>
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

export default CoEngineering;