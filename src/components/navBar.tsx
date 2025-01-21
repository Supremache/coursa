"use client";

import * as React from "react";
import { LayoutDashboard, LogOut, Menu, Search, ShoppingCart, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MobileNav } from "@/components/mobile-nav";
import { navItems } from "@/constants";
import { type NavItem } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import NavLink from "next/link";
import Image from "next/image";

export function Navbar() {
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background ">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild className="flex items-center lg:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle>Coursa</SheetTitle>
              <SheetDescription>
                An all-in-one courses eCommerce platform designed to help
                educators and learners connect seamlessly.
              </SheetDescription>
            </SheetHeader>
            <MobileNav items={navItems} />
          </SheetContent>
        </Sheet>
        <NavLink href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Coursa Logo" 
          height={20}
          width={20}
          className="object-cover"/>
          <span className="font-bold">Coursa</span>
        </NavLink>
        <div className="hidden lg:flex lg:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavItem key={item.title} item={item} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <form
            className="w-full lg:w-auto lg:flex-none"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-8 w-full md:w-[300px] lg:w-[200px] xl:w-[300px]"
              />
            </div>
          </form>
          <NavLink href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              3
            </span>
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/images/avatar.jpg" alt="Abdulrahman" />
                  <AvatarFallback>Abdulrahman</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Abdulrahman
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    abdulrahman@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <NavLink href="/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink href="/admin">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Admin Dashboard</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
                Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

function NavItem({ item }: { item: NavItem }) {
  if (!item.subItems) {
    return (
      <NavigationMenuItem>
        <NavLink href={item.path || "#"} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {item.title}
          </NavigationMenuLink>
        </NavLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        {item.path ? (
          <NavLink href={item.path} legacyBehavior passHref>
            {item.title}
          </NavLink>
        ) : (
          item.title
        )}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {item.subItems.map((subItem) => (
            <ListItem
              key={subItem.title}
              title={subItem.title}
              href={subItem.path}
            >
              {subItem.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
