import type { ReactNode } from "react";
import { cn } from "@/app/utils";

type SectionContentProps = {
  className?: string;
  children: ReactNode;
};

export default function SectionContentWrapper({
  className,
  children,
}: SectionContentProps) {
  return <div className={cn(className)}>{children}</div>;
}
