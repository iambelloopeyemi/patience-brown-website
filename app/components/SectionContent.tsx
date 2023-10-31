import type { ReactNode } from "react";
import { cn } from "@/app/utils";

type SectionContentProps = {
  propsClassName?: string;
  children: ReactNode;
};

export default function SectionContent({
  propsClassName,
  children,
}: SectionContentProps) {
  return <div className={cn(propsClassName)}>{children}</div>;
}
