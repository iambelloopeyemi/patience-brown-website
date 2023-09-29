"use client";
import { useState, useEffect } from "react";
import { montserrat } from "../utils/font";
import { Bars, XMark } from "./Icons";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isScrolled, setScrolled] = useState<boolean>(false);

  const handleToggle = (): void => {
    setOpen((previousState: boolean) => !previousState);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const heroSectionHeight: number =
        document.getElementById("header")!.offsetHeight;
      const scrolled: number = window.scrollY;

      if (scrolled > heroSectionHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
      ${
        isScrolled
          ? "bg-white px-5 sm:px-10 lg:px-20 lg:py-1 z-50 lg:fixed left-0 right-0 transition-all duration-300 ease-in"
          : "bg-white px-5 sm:px-10 lg:px-20 z-50 transition-all duration-300 ease-in"
      }
      `}
    >
      <nav className="flex items-center justify-between">
        <div>
          <Logo isScrolled={isScrolled} />
        </div>
        <ul className="hidden lg:flex items-center gap-8">
          <Nav
            activeAnchorTagClass="text-yinmn-blue font-bold uppercase text-[14px] leading-[14px] tracking-widest hover:text-yinmn-blue"
            anchorTagClass="font-bold uppercase text-[14px] leading-[14px] tracking-widest hover:text-yinmn-blue"
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
          className="bg-white border-b py-5 absolute left-0 right-0 top-14"
        >
          <ul className="lg:hidden flex flex-col items-center gap-5">
            <Nav
              activeAnchorTagClass="text-yinmn-blue font-bold uppercase text-[14px] leading-[14px] tracking-widest hover:text-yinmn-blue"
              anchorTagClass="font-bold uppercase text-[14px] leading-[14px] tracking-widest hover:text-yinmn-blue"
            />
          </ul>
        </nav>
      )}
    </header>
  );
}
