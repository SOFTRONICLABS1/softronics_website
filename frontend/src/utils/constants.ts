import {
  type NavItem,
  type ServiceCard,
  type TestimonialItem,
  type CaseStudyItem,
} from "../types";
import {
  FiCode,
  FiCloud,
  FiDatabase,
  FiCpu,
  FiSmartphone,
  FiActivity,
  FiDollarSign,
  FiShoppingCart,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiZap,
} from "react-icons/fi";

// Icon mapping for menu items
export const iconMap: Record<string, React.ComponentType<any>> = {
  "Product Strategy": FiCode,
  "Quality Engineering": FiCloud,
  "Data Engineering": FiDatabase,
  "AI/ML Engineering": FiCpu,
  "Digital & Experience Engineering": FiSmartphone,
  "Healthcare Solutions": FiActivity,
  "Banking Solutions": FiDollarSign,
  "E-commerce Platforms": FiShoppingCart,
  Blog: FiBookOpen,
  "Developer Forum": FiUsers,
  "Agile Methodology": FiZap,
  "Microsoft Partner": FiAward,
};

// Navigation items with mega menu content
export const navigationItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    megaMenu: {
      title: "Services",
      description:
        "Transform your business with our comprehensive service offerings",
      columns: [
        {
          title: "Development Services",
          items: [
            { label: "Product Strategy", href: "/product-strategy" },
            { label: "Quality Engineering", href: "/quality-engineering" },
            { label: "Data Engineering", href: "/data-engg" },
          ],
        },
        {
          title: "Advanced Technologies",
          items: [
            { label: "AI/ML Engineering", href: "/ai-ml" },
            {
              label: "Digital & Experience Engineering",
              href: "/digi-exp",
            },
            { label: "MSW Development", href: "/msw-dev" },
          ],
        },
        // {
        //   title: "Consulting",
        //   items: [
        //     { label: "Digital Transformation", href: "/services" },
        //     { label: "Technology Consulting", href: "/services" },
        //     { label: "Product Strategy", href: "/product-strategy" },
        //   ],
        // },
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      imageAlt: "Services",
    },
  },
  // {
  //   label: "Industries",
  //   href: "/industries",
  //   megaMenu: {
  //     title: "Industries",
  //     description: "Industry-specific solutions tailored to your needs",
  //     columns: [
  //       {
  //         title: "Financial Services",
  //         items: [
  //           { label: "Banking Solutions", href: "/financial-services" },
  //           { label: "Insurance Tech", href: "/insurance-tech" },
  //           { label: "Fintech Innovations", href: "/fintech-innovations" },
  //         ],
  //       },
  //       {
  //         title: "Retail & Manufacturing",
  //         items: [
  //           { label: "E-commerce Platforms", href: "/e-commerce-platforms" },
  //           {
  //             label: "Supply Chain Management",
  //             href: "/supply-chain-management",
  //           },
  //           { label: "Industry 4.0", href: "/industry-4-0" },
  //         ],
  //       },
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=300&fit=crop",
  //     imageAlt: "Industries",
  //   },
  // },

  {
    label: "Products",
    href: "/products",
    megaMenu: {
      title: "Products",
      description: "Explore our innovative product offerings",
      columns: [
        {
          title: "Our Products",
          items: [
            { label: "DDP Dissection Platform", href: "/ddp-platform" },
            { label: "Analytics Solutions", href: "/analytics-solutions" },
            { label: "Low Energy Computing", href: "/low-energy-computing" },
          ],
        },
        {
          title: "Gamification",
          items: [
            {
              label: "Gamification in Pedagogy",
              href: "/gamification-in-pedagogy",
            },
            {
              label: "Internet of Things & farming",
              href: "/iot-solutions",
            },
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=300&fit=crop",
      imageAlt: "Products",
    },
  },
  { label: "Case Studies", href: "/case-studies" },

  { label: "Blog", href: "/blog" },

  {
    label: "Why SoftronicLabs",
    href: "/why-softroniclabs",
  },
  // { label: "Why SoftronicLabs", href: "/why-softroniclabs" },
  { label: "About Us", href: "/about" },
];

export const services: ServiceCard[] = [
  {
    id: "1",
    title: "Product Strategy",
    description:
      "End-to-end product development from ideation to deployment with modern technologies and best practices.",
    icon: "FiCode",
    features: [
      "Custom Software Development",
      "Product Strategy",
      "UI/UX Design",
      "Quality Assurance",
    ],
  },
  {
    id: "2",
    title: "Quality Engineering",
    description:
      "Scalable cloud infrastructure and automated deployment pipelines for faster time-to-market.",
    icon: "FiCloud",
    features: [
      "Cloud Migration",
      "Infrastructure Automation",
      "CI/CD Pipelines",
      "Monitoring & Security",
    ],
  },
  {
    id: "3",
    title: "Data Engineering",
    description:
      "Transform raw data into actionable insights with robust data pipelines and analytics solutions.",
    icon: "FiDatabase",
    features: [
      "Data Architecture",
      "ETL Pipelines",
      "Real-time Analytics",
      "Data Governance",
    ],
  },
  {
    id: "4",
    title: "AI/ML Engineering",
    description:
      "Intelligent solutions powered by machine learning and artificial intelligence technologies.",
    icon: "FiBrain",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
  },
  {
    id: "5",
    title: "Digital & Experience Engineering",
    description:
      "Create exceptional digital experiences with user-centric design and cutting-edge technologies.",
    icon: "FiSmartphone",
    features: [
      "Mobile App Development",
      "Web Applications",
      "Progressive Web Apps",
      "Cross-platform Solutions",
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "John Smith",
    company: "TechCorp Inc.",
    position: "CTO",
    content:
      "softrnoics delivered exceptional results on our digital transformation project. Their expertise in cloud technologies and attention to detail exceeded our expectations.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    company: "DataFlow Solutions",
    position: "Product Manager",
    content:
      "The team's deep understanding of data engineering helped us build a robust analytics platform that scales with our business needs.",
    rating: 5,
  },
  {
    id: "3",
    name: "Michael Chen",
    company: "InnovateAI",
    position: "Founder & CEO",
    content:
      "Working with softrnoics on our AI/ML initiatives was a game-changer. They brought cutting-edge expertise and delivered beyond our expectations.",
    rating: 5,
  },
];

export const caseStudies: CaseStudyItem[] = [
  {
    id: "1",
    title: "E-commerce Platform Transformation",
    description:
      "Complete digital transformation of a legacy e-commerce platform with modern cloud architecture.",
    image: "/images/case-study-1.jpg",
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
    results: [
      "300% increase in performance",
      "50% reduction in infrastructure costs",
      "99.9% uptime achieved",
    ],
  },
  {
    id: "2",
    title: "Real-time Analytics Dashboard",
    description:
      "Built a comprehensive analytics dashboard for real-time business intelligence and reporting.",
    image: "/images/case-study-2.jpg",
    technologies: ["Python", "Apache Kafka", "Elasticsearch", "React"],
    results: [
      "Real-time data processing",
      "Interactive visualizations",
      "Automated reporting",
    ],
  },
  {
    id: "3",
    title: "AI-Powered Customer Service",
    description:
      "Implemented an intelligent customer service system using natural language processing and machine learning.",
    image: "/images/case-study-3.jpg",
    technologies: ["Python", "TensorFlow", "NLP", "AWS Lambda"],
    results: [
      "80% reduction in response time",
      "90% customer satisfaction",
      "Automated ticket routing",
    ],
  },
];
