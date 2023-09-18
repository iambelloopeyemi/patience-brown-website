"use client";
import { useState, useEffect } from "react";
import { montserrat } from "../utils/font";
import { Bars, XMark } from "./IconsComponent";
import Logo from "./LogoComponent";
import Nav from "./NavComponent";

export default function Header(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [headerStyle, setHeaderStyle] = useState<string>("");
  const [navFontStyle, setNavFontStyle] = useState<string>("");
  const [isScrolled, setScrolled] = useState<boolean>(false);

  const handleToggle = (): void => {
    setOpen((previousState: boolean) => !previousState);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const heroSectionHeight: number =
        document.getElementById("header")!.offsetHeight;
      const scrolled: number = window.scrollY;

      const headerStyle =
        scrolled > heroSectionHeight
          ? "bg-white px-5 sm:px-10 lg:px-20 lg:py-1 z-50 lg:fixed left-0 right-0 ease-in-out"
          : "bg-white px-5 sm:px-10 lg:px-20 z-50 ease-in-out";

      const navFontStyle =
        scrolled > heroSectionHeight
          ? "uppercase font-semibold text-sm tracking-widest hover:text-yinmn-blue"
          : "uppercase font-bold tracking-widest hover:text-yinmn-blue";

      if (scrolled > heroSectionHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setHeaderStyle(headerStyle);
      setNavFontStyle(navFontStyle);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`
      ${isOpen ? null : "border-b"} 
      ${montserrat.className} 
      ${headerStyle}
      `}
    >
      <nav className="flex items-center justify-between">
        <div>
          <Logo isScrolled={isScrolled} />
        </div>
        <ul className="hidden lg:flex items-center gap-8">
          <Nav
            activeAnchorTagClass={`${navFontStyle} text-yinmn-blue`}
            anchorTagClass={`${navFontStyle}`}
          />
        </ul>
        <button
          onClick={handleToggle}
          className="lg:hidden bg-transparent border-none outline-none"
        >
          {isOpen ? <XMark /> : <Bars />}
        </button>
      </nav>
      {isOpen && (
        <nav
          onClick={handleToggle}
          className="absolute left-0 right-0 top-16 bg-white border-b py-5"
        >
          <ul className="lg:hidden flex flex-col items-center gap-5">
            <Nav
              activeAnchorTagClass="text-yinmn-blue font-bold text-sm tracking-widest uppercase"
              anchorTagClass="font-bold text-sm tracking-widest uppercase"
            />
          </ul>
        </nav>
      )}
    </header>
  );
}
