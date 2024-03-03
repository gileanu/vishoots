import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LucideFacebook, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";

export function MobileDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon></MenuIcon>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetClose asChild>
            <Link
              className="text-left text-md rounded-md py-3 mt-5 underline"
              href="/"
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="text-left text-md rounded-md py-3 underline"
              href="/services"
            >
              Services
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="text-left text-md rounded-md py-3 underline"
              href="/gallery"
            >
              Gallery
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="text-left text-md rounded-md py-3 underline"
              href="/contact"
            >
              Contact
            </Link>
          </SheetClose>
          <Separator decorative className="my-4" />
          <p className="text-left text-sm">Social media links</p>
          <div className="inline-flex gap-2">
            <Button asChild variant="outline" size="icon">
              <Link target="_blank" href="https://www.instagram.com/vi.shoots/">
                <InstagramLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link target="_blank" href="https://www.instagram.com/vi.shoots/">
                <LucideFacebook className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link target="_blank" href="https://www.instagram.com/vi.shoots/">
                <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
          </div>
          <Separator decorative className="" />
          <p className="text-left text-sm">Light/Dark mode</p>
          <ModeToggle />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
