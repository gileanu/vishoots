"use client";

import * as React from "react";
import Link from "next/link";
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

const MainNav = () => {
  return (
    <>
      <nav className="flex flex-row items-center gap-6 lg:gap-10">
        {routes.map((route) => (
          <Link href={route.href} key={route.href} className="hover:underline">
            {route.label}
          </Link>
        ))}
        <ModeToggle />
      </nav>
    </>
  );
};

export default MainNav;
