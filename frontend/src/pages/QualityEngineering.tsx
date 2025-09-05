import ServicePageTemplate from '../components/templates/ServicePageTemplate';
import type { ServicePageConfig, ServiceMenuItem } from '../types/ServicePage';

const QualityEngineering = () => {
  const pageConfig: ServicePageConfig = {
    tag: 'QA engineering',
    title: 'Strategic QA engineering to enhance business outcomes',
    description: 'We develop and execute QA strategies that stem from the mapping of quality goals to your business objectives.',
    analytics: {
      pageTitle: 'Quality Engineering - SoftronicLabs Portfolio',
      page: 'quality-engineering',
      ctaEventName: 'quality_engineering_hero',
      ctaSection: 'hero'
    }
  };

  const menuItems: ServiceMenuItem[] = [
    {
      id: "test-automation",
      title: "Test automation",
      content: {
        description:
          "Our test automation services leverage low-code advanced scripting for various interfaces, from web to mobile. We identify ideal automation interfaces, unify frameworks and tools, and create reusable components and libraries.",
        details:
          "This approach significantly reduces manual testing efforts, improves test coverage, and enables faster, more reliable releases across diverse product ecosystems.",
      },
    },
    {
      id: "non-functional-testing",
      title: "Non-functional testing",
      content: {
        description:
          "Comprehensive performance, security, and usability testing to ensure your applications meet quality standards under various conditions.",
        details:
          "We conduct load testing, stress testing, security audits, and accessibility testing to identify bottlenecks and vulnerabilities before they impact your users.",
      },
    },
    {
      id: "shift-left-testing",
      title: "Shift-left testing",
      content: {
        description:
          "Early integration of testing practices in the development lifecycle to catch defects sooner and reduce overall project costs.",
        details:
          "By implementing testing strategies from the beginning of development, we help teams identify issues early, improve code quality, and accelerate delivery timelines.",
      },
    },
    {
      id: "qa-governance",
      title: "QA governance",
      content: {
        description:
          "Establish robust quality assurance processes, standards, and frameworks to ensure consistent quality across your organization.",
        details:
          "We help define QA strategies, implement testing standards, establish metrics and KPIs, and create governance frameworks that scale with your business growth.",
      },
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">SoftronicLabs'</span>{' '}
      <span className="text-brand-gray-dark">QA engineering capabilities</span>
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

export default QualityEngineering;
