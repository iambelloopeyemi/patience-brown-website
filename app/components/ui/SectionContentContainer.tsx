import type { ReactNode } from "react";
import { cn } from "@/app/utils";

type SectionContentContainerProps = {
  className?: string;
  children: ReactNode;
};

export default function SectionContentContainer({
  className = "grid sm:grid-cols-2 gap-10",
  children,
}: SectionContentContainerProps) {
  return <div className={cn(className)}>{children}</div>;
}
