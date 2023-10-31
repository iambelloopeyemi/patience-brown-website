"use client";
import { usePathname } from "next/navigation";

type useRoutesProps = {
  link: string;
  linkIsActive?: boolean;
  linkText: string;
};

const links: string[] = ["about", "process", "schedule-a-call"];

export function useRoutes(): useRoutesProps[] {
  const pathname = usePathname();

  return links.map((link) => ({
    link,
    linkIsActive: pathname === `/${link}`,
    linkText: link.replace(/-/g, " "),
  }));
}
