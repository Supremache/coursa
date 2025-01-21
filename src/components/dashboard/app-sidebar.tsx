"use client"

import * as React from "react"
import { BookOpen, Users, BarChart, MessageSquare, Settings} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { AdminSwitcher } from "./admin-switcher"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"

// Update the data object
const data = {
  user: {
    name: "Abdulrahman",
    email: "admin@example.com",
    avatar: "/images/avatar.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: BarChart,
      isActive: true,
    },
    {
      title: "Courses",
      url: "/admin/dashboard/courses",
      icon: BookOpen,
      items: [
        { title: "All Courses", url: "/admin/dashboard/courses" },
        { title: "Add New Course", url: "/admin/dashboard/courses/new" },
        { title: "Categories", url: "/admin/dashboard/courses/categories" },
      ],
    },
    {
      title: "Members",
      url: "/admin/dashboard/members",
      icon: Users,
    },
    {
      title: "Analytics",
      url: "/admin/dashboard/analytics",
      icon: BarChart,
    },
    {
      title: "Support",
      url: "/admin/dashboard/support",
      icon: MessageSquare,
    },
    {
      title: "Settings",
      url: "/admin/dashboard/settings",
      icon: Settings,
    },
  ],
}

// Update the AppSidebar component
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AdminSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

