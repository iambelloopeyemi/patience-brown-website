import type { ReactNode } from "react";
import { cn } from "@/app/utils";

type SectionContentContainerProps = {
  propsClassName?: string;
  children: ReactNode;
};

export default function SectionContentContainer({
  propsClassName = "grid lg:grid-cols-2 gap-10",
  children,
}: SectionContentContainerProps) {
  return <div className={cn(propsClassName)}>{children}</div>;
}
