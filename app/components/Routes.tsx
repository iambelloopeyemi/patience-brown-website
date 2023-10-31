"use client";
import Link from "next/link";
import { useRoutes } from "@/app/hooks/useRoutes";
import { cn } from "@/app/utils";
import { montserrat } from "@/app/libs/font";

type RoutesProps = {
  ulClassName: string;
  liClassName: string;
  checkIsActive?: boolean;
};

export default function Routes({
  ulClassName,
  liClassName,
  checkIsActive,
}: RoutesProps) {
  const routes = useRoutes();

  return (
    <ul className={ulClassName}>
      {routes.map((route) => {
        const { link, linkIsActive, linkText } = route;
        return (
          <li key={link}>
            <Link
              href={`/${link}`}
              className={cn(
                montserrat.className,
                liClassName,
                checkIsActive && linkIsActive && "text-yinmn-blue"
              )}
            >
              {linkText}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
