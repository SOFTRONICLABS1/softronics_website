export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: BlogCategory;
  author: string;
  date: string;
  slug: string;
  image?: string;
  fullContent?: string;
  readingTime?: number;
}

export type BlogCategory = 
  | "Product Engineering"
  | "Cloud and DevOps" 
  | "Data Engineering"
  | "AI and ML"
  | "Digital & Experience Engineering"
  | "News & Insights";

export interface BlogCategoryTab {
  id: BlogCategory;
  label: string;
  href: string;
}