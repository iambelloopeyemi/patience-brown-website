"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { montserrat } from "../utils/font";
import { Bars, XMark } from "./icons";
import websiteLogo from "../assets/website-logo.png";
import Nav from "./nav";

export default function Header(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [headerStyle, setHeaderStyle] = useState<string>("");
  const [logoStyle, setLogoStyle] = useState<string>("");
  const [navFontStyle, setNavFontStyle] = useState<string>("");

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
          ? "bg-white px-4 sm:px-8 lg:px-16 z-50 lg:py-1 lg:fixed left-0 right-0 ease-in-out"
          : "bg-white px-4 sm:px-8 lg:px-16 py-2 z-50";

      const logoStyle =
        scrolled > heroSectionHeight ? "w-40 h-auto" : "w-40 sm:w-60 h-auto";

      const navFontStyle =
        scrolled > heroSectionHeight
          ? "uppercase font-semibold text-xs tracking-widest hover:text-yinmn-blue"
          : "uppercase font-bold text-sm tracking-widest hover:text-yinmn-blue";

      setHeaderStyle(headerStyle);
      setLogoStyle(logoStyle);
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
      className={`${isOpen ? null : "border-b"}
      ${montserrat.className}
      ${headerStyle}`}
    >
      <nav className="flex items-center justify-between">
        <div className={`${logoStyle}`}>
          <Link href={`/`}>
            <Image src={websiteLogo} alt="website logo" />
          </Link>
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
          className="absolute left-0 right-0 top-12 bg-white border-b py-5"
        >
          <ul className="lg:hidden flex flex-col items-center gap-5">
            <Nav
              activeAnchorTagClass="uppercase font-bold text-xs sm:text-sm tracking-widest text-yinmn-blue"
              anchorTagClass="uppercase font-bold text-xs sm:text-sm tracking-widest"
            />
          </ul>
        </nav>
      )}
    </header>
  );
}
