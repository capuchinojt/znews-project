// Enhanced layout-specific types
import type { SxProps, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

// Base props for all layout components
export interface LayoutBaseProps {
  children?: ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
  testId?: string;
}

// Grid layout configuration
export interface GridLayoutConfig {
  columns: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  spacing?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  direction?: 'row' | 'column';
}

// Sidebar layout props
export interface SidebarLayoutProps extends LayoutBaseProps {
  sidebarContent: ReactNode;
  mainContent: ReactNode;
  sidebarWidth?: number | string;
  sidebarPosition?: 'left' | 'right';
  collapsible?: boolean;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

// Main layout props  
export interface MainLayoutProps extends LayoutBaseProps {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  disablePadding?: boolean;
}

// Content grid props
export interface ContentGridProps extends LayoutBaseProps {
  gridConfig?: GridLayoutConfig;
  items: Array<{
    id: string;
    content: ReactNode;
    gridSize?: GridLayoutConfig['columns'];
  }>;
}

// Responsive behavior
export interface ResponsiveConfig {
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;
  stackOnMobile?: boolean;
  centerOnMobile?: boolean;
}

// Enhanced layout props with responsive config
export interface ResponsiveLayoutProps extends LayoutBaseProps {
  responsive?: ResponsiveConfig;
}

// Navigation layout
export interface NavigationProps {
  items: Array<{
    label: string;
    href: string;
    icon?: ReactNode;
    active?: boolean;
    disabled?: boolean;
  }>;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'tabs' | 'pills' | 'underline';
}
