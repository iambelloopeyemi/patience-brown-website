"use client";
import Link from "next/link";
import { cn } from "../utils";
import { laila } from "@/app/utils/font";

type LogoProps = {
  isScrolled?: boolean;
};

export default function Logo({ isScrolled }: LogoProps) {
  const defaultClassName =
    "block font-semibold text-[30px] leading-[30px] transition-all duration-300 ease-in";

  return (
    <Link href="/" className={cn(laila.className)}>
      {isScrolled ? (
        <strong className={cn(defaultClassName)}>Brown Patience</strong>
      ) : (
        <>
          <strong className={cn(defaultClassName)}>Brown</strong>
          <strong className={cn(defaultClassName, "indent-8")}>Patience</strong>
        </>
      )}
    </Link>
  );
}
