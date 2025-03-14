import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navBar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/profile/settings",
  },
  {
    title: "My Courses",
    href: "/profile/courses",
  },
  {
    title: "Instructor",
    href: "/profile/instructor",
  },
  {
    title: "Massage",
    href: "/profile/massage",
  },
  {
    title: "My Reviews",
    href: "/profile/reviews",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
    <Navbar />
      <div className="container space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:px-16">{children}</div>
        </div>
      </div>
      <Footer showLetterForm={false}/>
    </>
  )
}