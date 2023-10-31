import type { ReactNode } from "react";
import { cn } from "@/app/utils";

type NavBarContainerProps = {
  toggleOpen?: () => void;
  className?: string;
  children: ReactNode;
};

export default function NavBarContainer({
  toggleOpen,
  className,
  children,
}: NavBarContainerProps) {
  return (
    <nav
      onClick={toggleOpen}
      className={cn("flex items-center justify-between", className)}
    >
      {children}
    </nav>
  );
}
