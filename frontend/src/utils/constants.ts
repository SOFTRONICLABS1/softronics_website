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
  "Digital Product Engineering": FiCode,
  "Cloud & DevOps Engineering": FiCloud,
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
            { label: "Digital Product Engineering", href: "/services" },
            { label: "Cloud & DevOps Engineering", href: "/services" },
            { label: "Data Engineering", href: "/services" },
          ],
        },
        {
          title: "Advanced Technologies",
          items: [
            { label: "AI/ML Engineering", href: "/services" },
            {
              label: "Digital & Experience Engineering",
              href: "/services",
            },
            { label: "Blockchain Development", href: "/services" },
          ],
        },
        {
          title: "Consulting",
          items: [
            { label: "Digital Transformation", href: "/services" },
            { label: "Technology Consulting", href: "/services" },
            { label: "Product Strategy", href: "/services" },
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      imageAlt: "Services",
    },
  },
  {
    label: "Industries",
    href: "/industries",
    megaMenu: {
      title: "Industries",
      description: "Industry-specific solutions tailored to your needs",
      columns: [
        {
          title: "Healthcare & Life Sciences",
          items: [
            { label: "Healthcare Solutions", href: "/industries" },
            { label: "Telemedicine Platforms", href: "/industries" },
            { label: "Medical Device Integration", href: "/industries" },
          ],
        },
        {
          title: "Financial Services",
          items: [
            { label: "Banking Solutions", href: "/industries" },
            { label: "Insurance Tech", href: "/industries" },
            { label: "Fintech Innovations", href: "/industries" },
          ],
        },
        {
          title: "Retail & Manufacturing",
          items: [
            { label: "E-commerce Platforms", href: "/industries" },
            { label: "Supply Chain Management", href: "/industries" },
            { label: "Industry 4.0", href: "/industries" },
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=300&fit=crop",
      imageAlt: "Industries",
    },
  },
  { label: "Case Studies", href: "/case-studies" },
  // {
  //   label: "Resources",
  //   href: "#resources",
  //   megaMenu: {
  //     title: "Resources",
  //     description: "Explore our knowledge hub and learning materials",
  //     columns: [
  //       {
  //         title: "Knowledge Hub",
  //         items: [
  //           { label: "Blog", href: "#blog" },
  //           { label: "Whitepapers", href: "#whitepapers" },
  //           { label: "Case Studies", href: "#case-studies" },
  //         ],
  //       },
  //       {
  //         title: "Learning",
  //         items: [
  //           { label: "Webinars", href: "#webinars" },
  //           { label: "Tech Talks", href: "#tech-talks" },
  //           { label: "Documentation", href: "#docs" },
  //         ],
  //       },
  //       {
  //         title: "Community",
  //         items: [
  //           { label: "Developer Forum", href: "#forum" },
  //           { label: "Newsletter", href: "#newsletter" },
  //           { label: "Events", href: "#events" },
  //         ],
  //       },
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
  //     imageAlt: "Resources",
  //   },
  // },
  {
    label: "Why SoftronicLabs",
    href: "/why-softroniclabs",
    megaMenu: {
      title: "Why Softroniclabs",
      description: "Discover what makes us your ideal technology partner",
      columns: [
        {
          title: "Our Approach",
          items: [
            { label: "Agile Methodology", href: "/why-softroniclabs" },
            { label: "Co-Engineering", href: "/why-softroniclabs" },
            { label: "Innovation Lab", href: "/why-softroniclabs" },
            { label: "TalentOps", href: "/why-softroniclabs" },
          ],
        },
        {
          title: "Our Partnerships",
          items: [
            { label: "Microsoft Partner", href: "/why-softroniclabs" },
            { label: "AWS Partner", href: "/why-softroniclabs" },
            { label: "Google Cloud Partner", href: "/why-softroniclabs" },
            { label: "Databricks Partner", href: "/why-softroniclabs" },
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
      imageAlt: "Why Softroniclabs",
    },
  },
  { label: "About Us", href: "/about" },
];

export const services: ServiceCard[] = [
  {
    id: "1",
    title: "Digital Product Engineering",
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
    title: "Cloud & DevOps Engineering",
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
