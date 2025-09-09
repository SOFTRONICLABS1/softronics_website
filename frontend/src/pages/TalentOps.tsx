import ServicePageTemplate from "../components/templates/ServicePageTemplate";
import type { ServicePageConfig, ServiceMenuItem } from "../types/ServicePage";

const TalentOps = () => {
  const pageConfig: ServicePageConfig = {
    tag: "TalentOps Expertise",
    title: "Optimize delivery with the right talent mix and proven practices",
    description:
      "TalentOps aligns seniority mix, domain knowledge, and delivery discipline with your roadmap using proven practices and quality gates. Get predictable delivery and flexibility to scale without compromising outcomes.",
    analytics: {
      pageTitle: "TalentOps - SoftronicLabs Portfolio",
      page: "talent-ops",
      ctaEventName: "talent_ops_hero",
      ctaSection: "hero",
    },
  };

  const menuItems: ServiceMenuItem[] = [
    {
      id: "talent-alignment",
      title: "Strategic Talent Alignment",
      content: {
        description:
          "Match the right expertise and seniority levels to your specific project requirements and business objectives.",
        details:
          "We analyze your project complexity, timeline, and technical requirements to assemble teams with optimal skill combinations. Our approach ensures junior developers learn from seniors while experienced engineers focus on architecture and critical path items.",
      },
    },
    {
      id: "domain-expertise",
      title: "Domain Knowledge Integration",
      content: {
        description:
          "Leverage deep industry expertise and technical specialization to accelerate project delivery and reduce learning curves.",
        details:
          "Our talent pool includes experts across various domains including fintech, healthcare, e-commerce, and emerging technologies. We ensure team members understand your industry context, compliance requirements, and technical constraints from day one.",
      },
    },
    {
      id: "delivery-discipline",
      title: "Delivery Discipline Framework",
      content: {
        description:
          "Implement proven methodologies, quality gates, and delivery practices that ensure consistent, predictable outcomes.",
        details:
          "Our framework includes code review standards, testing protocols, documentation requirements, and delivery milestones. We establish clear quality gates and definition-of-done criteria that maintain high standards while enabling rapid iteration.",
      },
    },
    {
      id: "scalability-planning",
      title: "Scalable Team Operations",
      content: {
        description:
          "Build teams that can scale efficiently without losing quality, cohesion, or delivery velocity.",
        details:
          "We design team structures, communication patterns, and knowledge sharing practices that support growth. Our approach includes mentoring programs, documentation standards, and onboarding processes that maintain team effectiveness as you scale.",
      },
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">SoftronicLabs</span>{' '}
      <span className="text-brand-gray-dark">TalentOps capabilities</span>
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

export default TalentOps;