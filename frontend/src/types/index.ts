export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  results: string[];
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  category: string;
}