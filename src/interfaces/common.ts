import React from 'react';

export interface INavItem {
  title: string;
  href: string;
  subtitle?: string;
  icon?: React.ReactNode | React.ReactElement | React.FC<any>;
}

export interface INavItemGroup {
  title: string;
  items: INavItem[];
}
