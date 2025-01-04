import { EVENT_CATEGORY_VALIDATOR } from "@/lib/validators/event-category-validator"
import { EventCategory } from "@prisma/client"
import { LucideIcon } from "lucide-react"
import { HTMLAttributes, ReactNode } from "react"
import { z } from "zod"

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

export interface NumericFieldSumCardProps {
  activeTab: tabState
  numericFieldSums: Record<
    string,
    {
      total: number
      thisWeek: number
      thisMonth: number
      today: number
    }
  >
}

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

export type tabState = "today" | "week" | "month"

export type BadgeColor = "#43b581" | "#faa61a" | (string & {})

export type EventCategoryForm = z.infer<typeof EVENT_CATEGORY_VALIDATOR>
