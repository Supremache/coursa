"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
export function AdminSwitcher() {
  const { isMobile } = useSidebar();
  const [activeView, setActiveView] = React.useState("Dashboard");

  const views = [
    { name: "Dashboard", url: "/admin/dashboard" },
    { name: "Website", url: "/" },
  ];

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Image
                src="/images/logo.png"
                alt="Coursa Dashboard logo"
                width={18}
                height={18}
                className="object-cover"
              />

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Admin Panel</span>
                <span className="truncate text-xs">{activeView}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Switch View
            </DropdownMenuLabel>
            {views.map((view) => (
              <DropdownMenuItem
                key={view.name}
                onClick={() => setActiveView(view.name)}
                className="gap-2 p-2"
                asChild
              >
                <Link href={view.url}>{view.name}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="font-medium text-muted-foreground">Logout</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
