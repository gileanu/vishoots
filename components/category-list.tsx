"use client";

import { Billboard as BillboardType, Category } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryListProps {
  data: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/categories/${route.id}`,
    label: route.name,
    active: pathname === `/categories/${route.id}`,
  }));

  return (
    <div>
      <ul className="grid gap-3 p-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-md font-bold transition-colors hover:text-black dark:hover:text-white",
              route.active
                ? "text-black dark:text-white"
                : "text-neutral-600 dark:text-neutral-300"
            )}
          >
            {route.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
