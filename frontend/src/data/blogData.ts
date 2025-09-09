import type { BlogPost } from '../types/blog';
import type { BlogCategoryTab } from '../types/blog';

export const blogCategories: BlogCategoryTab[] = [
  { id: "Product Engineering", label: "Product Engineering", href: "product-engineering" },
  { id: "Cloud and DevOps", label: "Cloud and DevOps", href: "cloud-devops" },
  { id: "Data Engineering", label: "Data Engineering", href: "data-engineering" },
  { id: "AI and ML", label: "AI and ML", href: "ai-ml" },
  { id: "Digital & Experience Engineering", label: "Digital & Experience Engineering", href: "digital-experience" },
  { id: "News & Insights", label: "News & Insights", href: "news-insights" }
];

export const blogPosts: BlogPost[] = [
  // Product Engineering Posts
  {
    id: 1,
    title: "CTO's Guide to the Total Cost of Ownership (TCO) of a Digital Product",
    description: "When it comes to evaluating technological investments, ROI is a standard practice. Yet, to derive an accurate ROI, you need to factor in the total cost of ownership.",
    category: "Product Engineering",
    author: "Hiren Dhaduk",
    date: "10 Feb, 2025",
    slug: "cto-guide-tco-digital-product"
  },
  {
    id: 2,
    title: "A Guide to Modernizing Legacy Systems in Healthcare",
    description: "Imagine a world where your medical records are stored on floppy disks, and your doctor has to manually search through paper files to find your treatment history.",
    category: "Product Engineering",
    author: "Hiren Dhaduk",
    date: "26 Feb, 2025",
    slug: "modernizing-legacy-systems-healthcare"
  },
  {
    id: 3,
    title: "8 Reasons Why Software Product Engineering Projects Fail and How to Avoid Them",
    description: "Knight Capital Group, a financial services firm, lost $440 million in 45 minutes due to a software glitch that caused their trading algorithm to go haywire.",
    category: "Product Engineering",
    author: "Hiren Dhaduk",
    date: "20 Feb, 2025",
    slug: "why-software-projects-fail"
  },
  {
    id: 4,
    title: "How to Scale Your Engineering Team to Accommodate Growth",
    description: "On the surface, it may seem that scaling an engineering team is the best way to accommodate business growth and meet increasing demand.",
    category: "Product Engineering",
    author: "Hiren Dhaduk",
    date: "11 Jan, 2025",
    slug: "scale-engineering-team-growth"
  },
  {
    id: 5,
    title: "Scalable Products: Why, When, and How to Scale Your Digital Product?",
    description: "FIFA World Cup 2022 was a massive spectacle for football fans worldwide. But when England faced Croatia in the semi-finals, the surge in viewers crashed many streaming platforms.",
    category: "Product Engineering",
    author: "Hiren Dhaduk",
    date: "18 Dec, 2024",
    slug: "scalable-digital-products-guide"
  },
  {
    id: 6,
    title: "The Roadmap to Digital Product Development: 6 Stages You Need to Master",
    description: "The digital product development process involves market research to validate the product idea and prototyping, building, testing, and deploying the final product.",
    category: "Product Engineering",
    author: "Hiren Dhaduk",
    date: "3 Jan, 2025",
    slug: "digital-product-development-roadmap"
  },

  // Cloud and DevOps Posts
  {
    id: 7,
    title: "Why and How to Transition from Microsoft Enterprise Agreements to CSP Billing",
    description: "Microsoft recently announced that starting January 2025, many cloud Enterprise Agreement (EA) customers will no longer be able to make new purchases or renewals through EA.",
    category: "Cloud and DevOps",
    author: "Hiren Dhaduk",
    date: "4 Mar, 2025",
    slug: "microsoft-ea-to-csp-transition"
  },
  {
    id: 8,
    title: "Kubernetes vs Docker: Understanding Container Orchestration",
    description: "Container orchestration has become essential for modern application deployment. Learn the key differences between Kubernetes and Docker and when to use each.",
    category: "Cloud and DevOps",
    author: "Rohit Akiwatkar",
    date: "15 Feb, 2025",
    slug: "kubernetes-vs-docker-orchestration"
  },
  {
    id: 9,
    title: "AWS Cost Optimization: 10 Proven Strategies to Reduce Your Cloud Bill",
    description: "Cloud costs can spiral out of control without proper management. Discover actionable strategies to optimize your AWS spending while maintaining performance.",
    category: "Cloud and DevOps",
    author: "Priya Sharma",
    date: "28 Jan, 2025",
    slug: "aws-cost-optimization-strategies"
  },

  // Data Engineering Posts
  {
    id: 10,
    title: "Building Real-Time Data Pipelines with Apache Kafka and Spark",
    description: "Real-time data processing is crucial for modern businesses. Learn how to build scalable data pipelines using Apache Kafka and Spark for instant insights.",
    category: "Data Engineering",
    author: "Amit Patel",
    date: "22 Feb, 2025",
    slug: "real-time-data-pipelines-kafka-spark"
  },
  {
    id: 11,
    title: "Data Lake vs Data Warehouse: Choosing the Right Architecture",
    description: "Understanding the differences between data lakes and data warehouses is crucial for your data strategy. Learn which approach fits your business needs.",
    category: "Data Engineering",
    author: "Sarah Johnson",
    date: "8 Feb, 2025",
    slug: "data-lake-vs-data-warehouse"
  },

  // AI and ML Posts
  {
    id: 12,
    title: "Implementing MLOps: From Model Development to Production",
    description: "MLOps bridges the gap between machine learning development and operations. Learn best practices for deploying and maintaining ML models at scale.",
    category: "AI and ML",
    author: "Dr. Rajesh Kumar",
    date: "12 Mar, 2025",
    slug: "implementing-mlops-production"
  },
  {
    id: 13,
    title: "Large Language Models in Enterprise: Opportunities and Challenges",
    description: "LLMs are transforming businesses across industries. Explore the potential applications, implementation challenges, and best practices for enterprise adoption.",
    category: "AI and ML",
    author: "Lisa Chen",
    date: "5 Mar, 2025",
    slug: "llm-enterprise-opportunities-challenges"
  },

  // Digital & Experience Engineering Posts
  {
    id: 14,
    title: "Creating Accessible Web Applications: A Complete Guide",
    description: "Web accessibility ensures everyone can use your applications. Learn the principles, tools, and techniques for building inclusive digital experiences.",
    category: "Digital & Experience Engineering",
    author: "Emma Rodriguez",
    date: "18 Feb, 2025",
    slug: "accessible-web-applications-guide"
  },
  {
    id: 15,
    title: "Performance Optimization for React Applications",
    description: "Slow React apps hurt user experience and business metrics. Discover proven techniques to optimize your React application's performance.",
    category: "Digital & Experience Engineering",
    author: "Michael Thompson",
    date: "1 Feb, 2025",
    slug: "react-performance-optimization"
  },

  // News & Insights Posts
  {
    id: 16,
    title: "Softroniclabs Recognized as Top Rated IT Services & Development Partner by TrustRadius",
    description: "Softroniclabs has achieved exceptional recognition in the latest TrustRadius Top Rated Awards, standing out as the highest-rated vendor in multiple categories.",
    category: "News & Insights",
    author: "Rohit Akiwatkar",
    date: "11 Jun, 2025",
    slug: "softroniclabs-trustradius-top-rated"
  },
  {
    id: 17,
    title: "Tech Industry Trends to Watch in 2025",
    description: "As we move into 2025, several technology trends are shaping the future of software development and digital transformation.",
    category: "News & Insights",
    author: "Tech Insights Team",
    date: "2 Jan, 2025",
    slug: "tech-trends-2025"
  }
];