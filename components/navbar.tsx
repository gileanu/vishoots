import MainNav from "@/components/navbar-main";
import MainNavMobile from "./navbar-mobile";
import Link from "next/link";

const Navbar = async () => {
  return (
    <div className="left-0 right-0 top-0 fixed flex h-16 items-center justify-center bg-background z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Link href="/" className="flex lg-ml-0 gap-x-2">
        <p className="font-sans font-bold text-2xl">viShoots</p>
      </Link>
      <div className="sm:ml-auto hidden md:block">
        <MainNav />
      </div>
      <div className="ml-auto md:hidden">
        <MainNavMobile />
      </div>
    </div>
  );
};

export default Navbar;
