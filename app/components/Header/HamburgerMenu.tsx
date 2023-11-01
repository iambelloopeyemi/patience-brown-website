import type { ReactNode } from "react";

type HamburgerMenuProps = {
  toggleOpen: () => void;
  children: ReactNode;
};

export default function HamburgerMenu({
  toggleOpen,
  children,
}: HamburgerMenuProps) {
  return (
    <button
      type="button"
      onClick={toggleOpen}
      className="sm:hidden bg-transparent border-none outline-none"
    >
      {children}
    </button>
  );
}
