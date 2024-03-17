"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NoResults from "./ui/s-no-results";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/categories/${route.id}`,
    label: route.name,
    active: pathname === `/categories/${route.id}`,
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
          <p className="px-6 py-4 border-b shadow-sm text-gray-400">
            View galleries by category
          </p>
          <div className="grid w-[300px] gap-2 p-2 grid-cols-1">
            {routes.length === 0 && <NoResults />}
            {routes.map((route) => (
              <NavigationMenuItem key={route.href}>
                <Link href={route.href}>
                  <NavigationMenuLink className="group inline-flex h-10 w-full items-center  rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {route.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </div>
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
