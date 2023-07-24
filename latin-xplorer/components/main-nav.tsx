"use client";

import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Destinations",
      href: "/destinations",
      active: pathname === "/destinations",
    },
    {
      label: "Stories",
      href: "/stories",
      active: pathname === "/stories",
    },
    {
      label: "Reviews",
      href: "/reviews",
      active: pathname === "/reviews",
    },
    {
      label: "Contact",
      href: "/contact",
      active: pathname === "/contact",
    },
    {
      label: "About",
      href: "/about",
      active: pathname === "/about",
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium tansition-colors hover:text-primary",
            route.active
              ? "text-gray-900 dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
