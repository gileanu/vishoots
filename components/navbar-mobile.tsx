"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./theme-toggle";

const routes = [
  {
    href: `/`,
    label: "Home",
  },
  {
    href: `/portfolio`,
    label: "Portfolio",
  },
  {
    href: `/services`,
    label: "Services",
  },
  {
    href: `/contact`,
    label: "Contact",
  },
];

const MainNavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:underline">Menu</SheetTrigger>
      <SheetContent className="w-2/3 border-l-0 px-4 sm:px-6">
        <div className="relative flex h-16 items-center">
          <SheetClose className="ml-auto underline">Close</SheetClose>
        </div>
        <Separator className="mb-4" />
        <nav className="flex flex-col gap-6 mb-4 text-right">
          {routes.map((route) => (
            <SheetClose asChild key={route.href}>
              <Link
                href={route.href}
                key={route.href}
                className="hover:underline"
              >
                {route.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <Separator />
        <div className="relative flex flex-col mt-4">
          <span className="ml-auto">
            <ModeToggle />
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MainNavMobile;
