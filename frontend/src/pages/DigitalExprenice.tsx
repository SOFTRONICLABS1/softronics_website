import ServicePageTemplate from "../components/templates/ServicePageTemplate";
import ProductStrategyFeatures from "../components/sections/ProductStrategyFeatures";
import type { ServicePageConfig, ServiceMenuItem } from "../types/ServicePage";

const DigitalExpericnce = () => {
  const pageConfig: ServicePageConfig = {
    tag: "Digital Experience Engineering",
    title: "Craft exceptional digital experiences that drive user engagement and business growth",
    description:
      "We combine UX design expertise with modern engineering practices to build intuitive, performant, and accessible digital experiences that delight users and achieve business objectives.",
    analytics: {
      pageTitle: "Digital Experience Engineering - SoftronicLabs Portfolio",
      page: "digital-experience-engineering",
      ctaEventName: "digital_experience_hero",
      ctaSection: "hero",
    },
  };

  const menuItems: ServiceMenuItem[] = [
    {
      id: "ux-engineering",
      title: "UX-Led Engineering",
      content: {
        description:
          "Bridge the gap between design and development with engineering solutions that prioritize user experience without compromising performance.",
        details:
          "Our UX-led engineering approach ensures seamless translation of design concepts into functional, performant applications. We implement design systems, component libraries, and engineering practices that maintain design fidelity while optimizing for speed, accessibility, and scalability.",
      },
    },
    {
      id: "frontend-architecture",
      title: "Modern Frontend Architecture",
      content: {
        description:
          "Build scalable, maintainable frontend architectures using modern frameworks and best practices for optimal user experiences.",
        details:
          "We architect frontend solutions with React, Vue, Angular, and Next.js, implementing micro-frontends, state management patterns, and performance optimization strategies. Our architectures support component reusability, testing, and seamless integration with backend services.",
      },
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      content: {
        description:
          "Optimize application performance with advanced techniques that ensure fast load times, smooth interactions, and exceptional user experiences.",
        details:
          "Our performance optimization includes code splitting, lazy loading, image optimization, caching strategies, and Core Web Vitals improvements. We implement monitoring tools and performance budgets to maintain optimal user experience across all devices and network conditions.",
      },
    },
    {
      id: "accessibility-compliance",
      title: "Accessibility & Compliance",
      content: {
        description:
          "Ensure your digital experiences are accessible to all users while meeting compliance requirements and industry standards.",
        details:
          "We implement WCAG 2.1 AA compliance, semantic HTML, keyboard navigation, screen reader support, and inclusive design patterns. Our accessibility audits and testing ensure your applications are usable by everyone, reducing legal risks and expanding market reach.",
      },
    },
    {
      id: "design-systems",
      title: "Design Systems & Component Libraries",
      content: {
        description:
          "Create consistent, reusable design systems and component libraries that accelerate development and maintain brand consistency.",
        details:
          "We build comprehensive design systems with component libraries, style guides, and documentation. Our systems include tokens, themes, responsive patterns, and development tools that ensure consistency across teams and projects while enabling rapid prototyping and iteration.",
      },
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">SoftronicLabs</span>{' '}
      <span className="text-brand-gray-dark">digital experience capabilities</span>
    </>
  );

  return (
    <ServicePageTemplate
      pageConfig={pageConfig}
      menuItems={menuItems}
      sectionTitle={sectionTitle}
      additionalSections={[
        <ProductStrategyFeatures key="product-strategy-features" />,
      ]}
    />
  );
};

export default DigitalExpericnce;
