import type { ReactNode } from "react";

export default function HeroContainer({ children }: { children: ReactNode }) {
  return (
    <section className="bg-yinmn-blue grid sm:grid-cols-2 gap-5">
      {children}
    </section>
  );
}
