import Link from "next/link";
import Container from "./page-container";
import { NavBarItems } from "./navbar-menu-items";
import { ModeToggle } from "./theme-toggle";
import { MobileDrawer } from "./mobile-menu";

const NavBar = async () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative hidden sm:flex h-16 items-center">
          <Link href="/" className="flex-none">
            <p className="font-bold text-xl">viShoots</p>
          </Link>
          <div className="pl-5 pt-1 flex-auto">
            <NavBarItems />
          </div>
          <div className="pt-1 justify-end">
            <ModeToggle />
          </div>
        </div>
        <div className="flex px-4 h-16 items-center sm:hidden">
          <Link href="/" className="flex-auto">
            <p className="font-bold text-xl">viShoots</p>
          </Link>
          <div className="pt-2 justify-end">
            <MobileDrawer />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
