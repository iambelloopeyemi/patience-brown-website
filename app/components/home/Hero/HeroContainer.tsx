import type { ReactNode } from "react";

export default function HeroContainer({ children }: { children: ReactNode }) {
  return (
    <section className="bg-yinmn-blue">
      <div className="px-5 sm:px-10 lg:px-20 py-5 sm:py-10 grid sm:grid-cols-2 gap-5">
        {children}
      </div>
    </section>
  );
}
