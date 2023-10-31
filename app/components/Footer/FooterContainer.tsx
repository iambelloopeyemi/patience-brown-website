import type { ReactNode } from "react";
import { cn } from "@/app/utils";
import { montserrat } from "@/app/utils/font";

export default function FooterContainer({ children }: { children: ReactNode }) {
  return (
    <footer
      className={cn(
        montserrat.className,
        "bg-yinmn-blue px-5 py-16 text-seasalt"
      )}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        {children}
      </div>
    </footer>
  );
}
