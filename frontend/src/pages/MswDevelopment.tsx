import ServicePageTemplate from "../components/templates/ServicePageTemplate";
import type { ServicePageConfig, ServiceMenuItem } from "../types/ServicePage";

const MswDevelopment = () => {
  const pageConfig: ServicePageConfig = {
    tag: "MSW Development",
    title: "Modern Service Worker solutions for seamless API mocking and development workflows",
    description: "We build comprehensive Mock Service Worker (MSW) solutions that enable seamless API mocking, testing, and development workflows for modern web applications.",
    analytics: {
      pageTitle: "MSW Development - SoftronicLabs Portfolio",
      page: "msw-development",
      ctaEventName: "msw_development_hero",
      ctaSection: "hero",
    },
  };

  const menuItems: ServiceMenuItem[] = [
    {
      id: "api-mocking",
      title: "API mocking",
      content: {
        description: "Comprehensive API mocking solutions that enable development and testing without backend dependencies.",
        details: "Our MSW solutions include REST API mocking, GraphQL mocking, dynamic response generation, request/response validation, and realistic data simulation for comprehensive development workflows.",
      },
    },
    {
      id: "development-workflows",
      title: "Development workflows", 
      content: {
        description: "Streamlined development workflows that integrate seamlessly with modern development tools and processes.",
        details: "We implement MSW in development environments, CI/CD pipelines, local development setups, and testing frameworks with hot reloading, configuration management, and team collaboration features.",
      },
    },
    {
      id: "testing-automation",
      title: "Testing automation",
      content: {
        description: "Advanced testing automation using MSW for unit tests, integration tests, and end-to-end testing scenarios.",
        details: "Our testing solutions include automated test data generation, scenario-based testing, error simulation, performance testing, and integration with popular testing frameworks like Jest, Cypress, and Playwright.",
      },
    },
    {
      id: "service-virtualization",
      title: "Service virtualization",
      content: {
        description: "Virtual service environments that simulate complex microservice architectures and third-party integrations.",
        details: "We create virtual service environments with microservice simulation, third-party API virtualization, network condition simulation, and distributed system testing capabilities for comprehensive application validation.",
      },
    },
    {
      id: "browser-integration",
      title: "Browser integration",
      content: {
        description: "Seamless browser integration for client-side API mocking and development testing in real browser environments.",
        details: "Our browser solutions include Service Worker registration, network interception, client-side mocking, browser extension development, and real-time debugging tools for enhanced development experience.",
      },
    },
    {
      id: "nodejs-integration", 
      title: "Node.js integration",
      content: {
        description: "Server-side MSW integration for Node.js applications, testing environments, and development servers.",
        details: "We implement Node.js MSW solutions with server-side mocking, Express integration, API middleware development, request/response transformation, and seamless integration with existing backend infrastructure.",
      },
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">SoftronicLabs capabilities</span>
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

export default MswDevelopment;