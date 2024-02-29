import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { NavBarItems } from "./navbar-menu-items";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

export function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="">
            <div className="pl-5 pt-1 flex-auto">
              <NavBarItems />
            </div>
            <div className="pt-1 justify-end">
              <ModeToggle />
            </div>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Back</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
