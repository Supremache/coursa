"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Book,
  GraduationCapIcon as Graduation,
  Home,
  LayoutGrid,
  Mail,
  Users,
} from "lucide-react";

import { TreeDataItem as BaseTreeDataItem, TreeView } from "@/components/ui/tree-view";
import { NavItem } from "@/types";

interface TreeDataItem extends BaseTreeDataItem {
  href?: string;
}

const transformNavItemsToTreeData = (items: NavItem[]) => {
  return items.map((item, index) => ({
    id: `${index}`,
    name: item.title,
    href: item.path,
    icon: getIconForItem(item.title),
    expanded: false,
    children: item.subItems
      ? item.subItems.map((subItem, subIndex) => ({
          id: `${index}-${subIndex}`,
          name: subItem.title,
          href: subItem.path,
          expanded: false,
        }))
      : undefined,
  }));
};

function getIconForItem(title: string) {
  switch (title.toLowerCase()) {
    case "home":
      return Home;
    case "courses":
      return Book;
    case "about":
      return Users;
    case "resources":
      return LayoutGrid;
    case "contact":
      return Mail;
    default:
      return Graduation;
  }
}

export function MobileNav({ items }: { items: NavItem[] }) {
  const router = useRouter();
  const treeData = transformNavItemsToTreeData(items);

  const handleSelectItem = (item: TreeDataItem | undefined) => {
    if (item?.href) {
      router.push(item.href);
    }
  };

  return (
    <div className="flex flex-col space-y-4 py-4">
      <TreeView data={treeData} onSelectChange={handleSelectItem} />
    </div>
  );
}
