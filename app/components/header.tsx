"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { montserrat } from "../utils/font";
import Nav from "./nav";

export default function Header(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setOpen((previousState: boolean) => !previousState);
  };
  return (
    <header
      className={`${isOpen ? null : "border-b"}
      ${montserrat.className}
      bg-white px-3 sm:px-6 lg:px-[74px] py-5 lg:py-[13px]`}
    >
      <nav className="flex items-center justify-between">
        <div className="w-[178.13px] sm:w-[263px] h-[42.59px] sm:h-[63px]">
          <Link href={`/`}>
            <Image
              src={`/website-logo.png`}
              alt="website logo"
              width={263}
              height={63}
              className="block w-full h-full"
            />
          </Link>
        </div>
        <ul className="hidden lg:flex items-center gap-[26px]">
          <Nav
            activeAnchorTagClass="uppercase font-bold text-[14px] tracking-widest leading-[14px] hover:text-yinmn-blue text-yinmn-blue"
            anchorTagClass="uppercase font-bold text-[14px] tracking-widest leading-[14px] hover:text-yinmn-blue"
          />
        </ul>
        <button
          onClick={handleToggle}
          className="lg:hidden bg-transparent border-none outline-none"
        >
          {isOpen ? (
            <FaTimes className="w-5 sm:w-7 h-5 sm:h-7" />
          ) : (
            <FaBars className="w-5 sm-7 h-5 sm:h-7" />
          )}
        </button>
      </nav>
      {isOpen && (
        <nav
          onClick={handleToggle}
          className="absolute left-0 right-0 top-16 border-b py-5"
        >
          <ul className="lg:hidden flex flex-col items-center gap-[26px]">
            <Nav
              activeAnchorTagClass=""
              anchorTagClass="uppercase font-bold text-[14px] leading-[14px] tracking-widest hover:text-yinmn-blue"
            />
          </ul>
        </nav>
      )}
    </header>
  );
}
