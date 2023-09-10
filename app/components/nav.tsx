"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  activeAnchorTagClass: string;
  anchorTagClass: string;
}

export default function Nav({
  activeAnchorTagClass,
  anchorTagClass,
}: NavProps): JSX.Element {
  const pathname = usePathname();
  const links: string[] = ["about", "process", "schedule-a-call"];
  return (
    <>
      {links.map((link) => {
        const isActive: boolean = pathname === `/${link}`;
        const linkText: string = link.replace(/-/g, " ");

        return (
          <li key={link}>
            <Link
              href={`/${link}`}
              className={`${isActive ? activeAnchorTagClass : anchorTagClass}`}
            >
              {linkText}
            </Link>
          </li>
        );
      })}
    </>
  );
}
