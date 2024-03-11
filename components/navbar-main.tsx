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
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/categories/${route.categorySlug}`,
    label: route.name,
    active: pathname === `/categories/${route.categorySlug}`,
  }));

  return (
    <NavigationMenu className="pl-5 gap-x-1">
      <NavigationMenuItem>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <Link href="/categories">Categories</Link>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <p className="p-4 border-b text-gray-400">
            View galleries by category
          </p>
          <ul className="grid w-[400px] gap-3 p-4 grid-cols-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
                  route.active
                    ? "text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-300"
                )}
              >
                {route.label}
              </Link>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/services" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Services
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/contact" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};

export default MainNav;
