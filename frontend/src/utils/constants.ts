import { type NavItem, type ServiceCard, type TestimonialItem, type CaseStudyItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    label: 'Services',
    href: '#services',
    subItems: [
      { label: 'Digital Product Engineering', href: '#digital-product' },
      { label: 'Cloud & DevOps Engineering', href: '#cloud-devops' },
      { label: 'Data Engineering', href: '#data-engineering' },
      { label: 'AI/ML Engineering', href: '#ai-ml' },
      { label: 'Digital & Experience Engineering', href: '#digital-experience' },
    ]
  },
  { label: 'Industries', href: '#industries' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Resources', href: '#resources' },
  { label: 'Why softrnoics', href: '#why-softrnoics' },
  { label: 'About Us', href: '#about' },
];

export const services: ServiceCard[] = [
  {
    id: '1',
    title: 'Digital Product Engineering',
    description: 'End-to-end product development from ideation to deployment with modern technologies and best practices.',
    icon: 'FiCode',
    features: ['Custom Software Development', 'Product Strategy', 'UI/UX Design', 'Quality Assurance']
  },
  {
    id: '2',
    title: 'Cloud & DevOps Engineering',
    description: 'Scalable cloud infrastructure and automated deployment pipelines for faster time-to-market.',
    icon: 'FiCloud',
    features: ['Cloud Migration', 'Infrastructure Automation', 'CI/CD Pipelines', 'Monitoring & Security']
  },
  {
    id: '3',
    title: 'Data Engineering',
    description: 'Transform raw data into actionable insights with robust data pipelines and analytics solutions.',
    icon: 'FiDatabase',
    features: ['Data Architecture', 'ETL Pipelines', 'Real-time Analytics', 'Data Governance']
  },
  {
    id: '4',
    title: 'AI/ML Engineering',
    description: 'Intelligent solutions powered by machine learning and artificial intelligence technologies.',
    icon: 'FiBrain',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    id: '5',
    title: 'Digital & Experience Engineering',
    description: 'Create exceptional digital experiences with user-centric design and cutting-edge technologies.',
    icon: 'FiSmartphone',
    features: ['Mobile App Development', 'Web Applications', 'Progressive Web Apps', 'Cross-platform Solutions']
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'John Smith',
    company: 'TechCorp Inc.',
    position: 'CTO',
    content: 'softrnoics delivered exceptional results on our digital transformation project. Their expertise in cloud technologies and attention to detail exceeded our expectations.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    company: 'DataFlow Solutions',
    position: 'Product Manager',
    content: 'The team\'s deep understanding of data engineering helped us build a robust analytics platform that scales with our business needs.',
    rating: 5
  },
  {
    id: '3',
    name: 'Michael Chen',
    company: 'InnovateAI',
    position: 'Founder & CEO',
    content: 'Working with softrnoics on our AI/ML initiatives was a game-changer. They brought cutting-edge expertise and delivered beyond our expectations.',
    rating: 5
  }
];

export const caseStudies: CaseStudyItem[] = [
  {
    id: '1',
    title: 'E-commerce Platform Transformation',
    description: 'Complete digital transformation of a legacy e-commerce platform with modern cloud architecture.',
    image: '/images/case-study-1.jpg',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
    results: ['300% increase in performance', '50% reduction in infrastructure costs', '99.9% uptime achieved']
  },
  {
    id: '2',
    title: 'Real-time Analytics Dashboard',
    description: 'Built a comprehensive analytics dashboard for real-time business intelligence and reporting.',
    image: '/images/case-study-2.jpg',
    technologies: ['Python', 'Apache Kafka', 'Elasticsearch', 'React'],
    results: ['Real-time data processing', 'Interactive visualizations', 'Automated reporting']
  },
  {
    id: '3',
    title: 'AI-Powered Customer Service',
    description: 'Implemented an intelligent customer service system using natural language processing and machine learning.',
    image: '/images/case-study-3.jpg',
    technologies: ['Python', 'TensorFlow', 'NLP', 'AWS Lambda'],
    results: ['80% reduction in response time', '90% customer satisfaction', 'Automated ticket routing']
  }
];