"use client";
import type { ReactNode } from "react";
import { useScroll } from "@/app/hooks/useScroll";
import { cn } from "@/app/utils";

type HeaderContainerProps = {
  isOpen: boolean;
  children: ReactNode;
};

export default function HeaderContainer({
  isOpen,
  children,
}: HeaderContainerProps) {
  const isScrolled = useScroll();

  return (
    <header
      id="header"
      className={cn(
        "bg-white px-5 sm:px-10 lg:px-20 py-1 z-50 transition-all duration-300 ease-in",
        {
          "border-b": isOpen,
          "lg:fixed left-0 right-0": isScrolled,
        }
      )}
    >
      {children}
    </header>
  );
}
