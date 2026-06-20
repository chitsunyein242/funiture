export interface NavItem {
  title: string
  href?: string
  description?: string
}

export interface NavITemWithChildren extends NavItem {
  card?: NavITemWithChildren[]
  menu?: NavITemWithChildren[]
}

export type MainNavItem = NavITemWithChildren
