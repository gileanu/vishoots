import Link from "next/link";
import Container from "./page-container";
import MainNav from "./navbar-main";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div
      className="border shadow-md max-w-5xl px-5 rounded-xl mt-2 m-auto left-0 right-0
      fixed z-50 backdrop-blur-md bg-white/85 dark:bg-background/60"
    >
      <div className="relative flex h-16 items-center justify-center">
        <Link href="/" className="flex lg-ml-0 gap-x-2">
          <p className="font-bold text-2xl">viShoots</p>
        </Link>
        <div className="ml-auto">
          <MainNav data={categories} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
