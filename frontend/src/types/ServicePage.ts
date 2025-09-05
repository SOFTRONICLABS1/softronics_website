import type { ReactNode } from 'react';

export interface ServiceMenuItem {
  id: string;
  title: string;
  content: {
    description: string;
    details: string;
  };
}

export interface ServicePageConfig {
  tag: string;
  title: string;
  description: string;
  analytics: {
    pageTitle: string;
    page: string;
    ctaEventName: string;
    ctaSection: string;
  };
}

export interface ServicePageProps {
  pageConfig: ServicePageConfig;
  menuItems: ServiceMenuItem[];
  sectionTitle: ReactNode;
  additionalSections?: ReactNode[];
}