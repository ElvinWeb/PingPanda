import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"
import { EventCategory } from "@prisma/client"

export interface SidebarItem {
  href: string
  icon: LucideIcon
  text: string
}

export interface CategoryPageContentProps {
  hasEvents: boolean
  category: EventCategory
}

export interface SidebarCategory {
  category: string
  items: SidebarItem[]
}

export interface DashboardPageProps {
  title: string
  children?: ReactNode
  hideBackButton?: boolean
  cta?: ReactNode
}

export interface DiscordMessageProps {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: string
  badgeText?: string
  badgeColor?: string
  title: string
  content: {
    [key: string]: string
  }
}

export type tabState = "today" | "week" | "month"

export type BadgeColor = "#43b581" | "#faa61a" | (string & {})
