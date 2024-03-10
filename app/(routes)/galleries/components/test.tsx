"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { Billboard, Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
  billboards: Billboard;
}

const Test: React.FC<MainNavProps> = ({ data, billboards }) => {
  return (
    <div
      className="h-full w-full"
      style={{ backgroundImage: billboards.imageUrl }}
    >
      {" "}
      <div className="h-full w-full">{}</div>
    </div>
  );
};

export default Test;
