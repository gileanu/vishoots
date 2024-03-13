import Link from "next/link";
import MainNav from "./navbar-main";
import getCategories from "@/actions/get-categories";
import { ModeToggle } from "./theme-toggle";
import MainNavMobile from "./navbar-mobile";
import getBillboards from "@/actions/get-billboards";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div
      className="border shadow-md max-w-5xl px-5 rounded-md mt-2 mx-2 lg:mx-auto left-0 right-0
      fixed z-50 backdrop-blur-md bg-white/85 dark:bg-background/85"
    >
      <div className="relative flex h-16 items-center justify-center">
        <Link href="/" className="flex lg-ml-0 gap-x-2">
          <p className="font-bold text-2xl">viShoots</p>
        </Link>
        <div className="sm:ml-auto hidden md:block">
          <MainNav data={categories} />
        </div>
        <div className="pl-2 hidden md:block">
          <ModeToggle />
        </div>
        <div className="ml-auto md:hidden">
          <MainNavMobile data={categories} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
