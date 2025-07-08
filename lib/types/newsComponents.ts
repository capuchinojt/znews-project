import { Article } from "../types";

export interface CardDimensions {
  imageWidth: number | string;
  imageHeight: number;
  minHeight: number;
}

export interface CustomDimensions {
  horizontal?: Partial<CardDimensions>;
  vertical?: Partial<CardDimensions>;
}

export interface ResponsiveDimensions {
  xs?: Partial<CardDimensions>;
  sm?: Partial<CardDimensions>;
  md?: Partial<CardDimensions>;
  lg?: Partial<CardDimensions>;
  xl?: Partial<CardDimensions>;
}

export interface BaseNewsComponentProps {
  variant?: "horizontal" | "vertical";
  isDisplayDescription?: boolean;
  customDimensions?: CustomDimensions;
  responsiveDimensions?: ResponsiveDimensions;
  border?: boolean;
}

// Specific props for NewsCard
export interface NewsCardProps extends BaseNewsComponentProps {
  article: Article;
  side?: "left" | "right"; // Position of image relative to content
}

// Specific props for NewsGrid
export interface NewsGridProps extends BaseNewsComponentProps {
  articles: Article[];
  title?: string;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
  side?: "left" | "right"; // Position of image relative to content for all cards
}

// Re-export Article type for convenience
export type { Article } from "../types";
