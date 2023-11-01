import type { ReactNode } from "react";
import { cn } from "@/app/utils";

type SectionContainerProps = {
  className?: string;
  children: ReactNode;
};

export default function SectionContainer({
  className,
  children,
}: SectionContainerProps) {
  return (
    <section className={cn("px-5 sm:px-10 lg:px-20 py-16", className)}>
      {children}
    </section>
  );
}
