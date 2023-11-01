"use client";
import Link from "next/link";
import { cn } from "@/app/utils";
import { laila } from "@/app/libs/font";

type LogoProps = {
  isScrolled?: boolean;
};

export default function Logo({ isScrolled }: LogoProps) {
  const className =
    "block font-semibold text-[30px] leading-[30px] transition-all duration-300 ease-in";

  return (
    <Link href="/" className={cn(laila.className)}>
      {isScrolled ? (
        <strong className={cn(className)}>Brown Patience</strong>
      ) : (
        <div>
          <strong className={cn(className)}>Brown</strong>
          <strong className={cn(className)}>Patience</strong>
        </div>
      )}
    </Link>
  );
}
