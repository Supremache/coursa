import { AppSidebar } from "@/components/dashboard/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Search } from "@/components/dashboard/search";
import DynamicBreadcrumb from "@/components/dashboard/dynamic-breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: '/images/favicon.png', 
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png', 
  },
  title: "Coursa | Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <DynamicBreadcrumb />
          <Search />
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
