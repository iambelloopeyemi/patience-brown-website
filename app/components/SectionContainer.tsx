import type { ReactNode } from "react";
import { cn } from "@/app/utils";
import { cormorant } from "@/app/utils/font";

type SectionContainerProps = {
  sectionClassName?: string;
  children: ReactNode;
};

export default function SectionContainer({
  sectionClassName,
  children,
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        cormorant.className,
        "px-5 sm:px-10 lg:px-20 py-16",
        sectionClassName
      )}
    >
      {children}
    </section>
  );
}
