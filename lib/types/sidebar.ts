// Centralized types for all sidebar components
export interface SidebarBaseProps {
  title?: string;
  isDisplayDescription?: boolean;
}

export interface PodcastItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  description?: string;
}

export interface PodcastSidebarProps extends SidebarBaseProps {
  podcasts: PodcastItem[];
}

export interface MagazineItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  description?: string;
  subtitle?: string;
}

export interface MagazineSidebarProps extends SidebarBaseProps {
  magazines: MagazineItem[];
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface CategoryNavigationItem {
  label: string;
  href: string;
}

export interface CategorySectionProps {
  title: string;
  articles: import('./newsComponents').Article[];
  categorySlug?: string;
  navItems?: CategoryNavigationItem[];
  showNavigation?: boolean;
  showDescription?: boolean;
  maxSidebarArticles?: number;
}

// Re-export for convenience
export type { Article } from './newsComponents';
