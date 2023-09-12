"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { montserrat } from "../utils/font";
import { Bars, XMark } from "./icons";
import Nav from "./nav";
import websiteLogo from "../assets/website-logo.png";

export default function Header(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setOpen((previousState: boolean) => !previousState);
  };
  return (
    <header
      className={`${isOpen ? null : "border-b"}
      ${montserrat.className}
      bg-white px-4 sm:px-8 lg:px-16 py-4`}
    >
      <nav className="flex items-center justify-between">
        <div className="w-44 sm:w-64 h-auto">
          <Link href={`/`}>
            <Image src={websiteLogo} alt="website logo" />
          </Link>
        </div>
        <ul className="hidden lg:flex items-center gap-8">
          <Nav
            activeAnchorTagClass="uppercase font-bold text-[15px] tracking-widest leading-[14px] hover:scale-105 text-yinmn-blue"
            anchorTagClass="uppercase font-bold text-[15px] tracking-widest leading-[14px] hover:text-yinmn-blue hover:scale-105"
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
          className="absolute left-0 right-0 top-16 border-b py-4"
        >
          <ul className="lg:hidden flex flex-col items-center gap-8">
            <Nav anchorTagClass="uppercase font-bold text-[13px] sm:text-[15px] tracking-widest leading-[14px] hover:text-yinmn-blue" />
          </ul>
        </nav>
      )}
    </header>
  );
}
