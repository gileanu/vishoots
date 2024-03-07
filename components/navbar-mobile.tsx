"use client";

import { Category } from "@/types";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Home, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./theme-toggle";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface MainNavMobileProps {
  data: Category[];
}

const MainNavMobile: React.FC<MainNavMobileProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/galleries/${route.id}`,
    label: route.name,
    active: pathname === `/galleries/${route.id}`,
  }));
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <ScrollArea>
        <SheetContent className="w-2/3">
          <div className="grid gap-2 py-2">
            <Link
              href="/"
              className="text-md font-medium transition-colors hover:underline py-4"
            >
              Home
            </Link>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <Link
                    href="/galleries"
                    className="text-md font-medium transition-colors"
                  >
                    Gallery
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid w-[200px] gap-3 p-4 grid-cols-1">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "text-sm font-medium transition-colors hover:underline hover:text-black dark:hover:text-white",
                          route.active
                            ? "text-black dark:text-white"
                            : "text-neutral-600 dark:text-neutral-300"
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/services"
              className="text-md font-medium transition-colors hover:underline py-4"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-md font-medium transition-colors hover:underline py-4"
            >
              Contact
            </Link>
          </div>
          <Separator />
          <ModeToggle />
        </SheetContent>
        <ScrollBar />
      </ScrollArea>
    </Sheet>
  );
};

export default MainNavMobile;
