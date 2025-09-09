import ServicePageTemplate from "../components/templates/ServicePageTemplate";
import ProductStrategyFeatures from "../components/sections/ProductStrategyFeatures";
import type { ServicePageConfig, ServiceMenuItem } from "../types/ServicePage";

const DataEngenieering = () => {
  const pageConfig: ServicePageConfig = {
    tag: "Data Engineering",
    title: "Build robust data infrastructure that scales with your business",
    description:
      "We design and implement scalable data pipelines, warehouses, and analytics platforms that transform raw data into valuable business assets through modern data engineering practices.",
    analytics: {
      pageTitle: "Data Engineering - SoftronicLabs Portfolio",
      page: "data-engineering",
      ctaEventName: "data_engineering_hero",
      ctaSection: "hero",
    },
  };

  const menuItems: ServiceMenuItem[] = [
    {
      id: "data-pipelines",
      title: "Data Pipeline Architecture",
      content: {
        description:
          "Design and build robust, scalable data pipelines that efficiently process and transform data from multiple sources into actionable insights.",
        details:
          "We implement real-time and batch processing pipelines using modern tools like Apache Airflow, Kafka, and cloud-native services. Our pipelines handle data ingestion, transformation, validation, and distribution with built-in monitoring, error handling, and automatic recovery mechanisms.",
      },
    },
    {
      id: "data-warehousing",
      title: "Data Warehousing & Analytics",
      content: {
        description:
          "Build modern data warehouses and analytics platforms that support complex queries, reporting, and business intelligence at scale.",
        details:
          "Our data warehousing solutions leverage cloud platforms like Snowflake, BigQuery, and Redshift. We design optimized schemas, implement data modeling best practices, and create performant analytics layers that enable fast, reliable business reporting and decision-making.",
      },
    },
    {
      id: "data-quality",
      title: "Data Quality & Governance",
      content: {
        description:
          "Ensure data accuracy, consistency, and compliance through comprehensive data quality frameworks and governance policies.",
        details:
          "We implement automated data quality checks, lineage tracking, and governance frameworks that maintain data integrity across your organization. Our solutions include data cataloging, privacy compliance, access controls, and quality monitoring dashboards.",
      },
    },
    {
      id: "cloud-migration",
      title: "Cloud Data Migration",
      content: {
        description:
          "Seamlessly migrate your data infrastructure to the cloud with minimal downtime and maximum performance optimization.",
        details:
          "We provide end-to-end cloud migration services including infrastructure assessment, migration strategy, data transfer optimization, and performance tuning. Our expertise spans AWS, Azure, and GCP with focus on cost optimization and security best practices.",
      },
    },
  ];

  const sectionTitle = (
    <>
      <span className="text-brand-cyan">SoftronicLabs</span>{' '}
      <span className="text-brand-gray-dark">data engineering capabilities</span>
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

export default DataEngenieering;
