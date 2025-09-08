import type { ReactNode } from 'react';

export interface IndustryCapability {
  id: string;
  title: string;
  content: {
    description: string;
    details: string;
  };
}

export interface IndustryServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
  from?: string;
  to?: string;
  pattern?: "rings-right" | "rings-right-strong" | "quads" | "diagonals";
  accentColor?: string;
}

export interface IndustryPageConfig {
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

export interface IndustryPageProps {
  pageConfig: IndustryPageConfig;
  capabilities: IndustryCapability[];
  serviceCards: IndustryServiceCard[];
  sectionTitle: ReactNode;
  additionalSections?: ReactNode[];
}