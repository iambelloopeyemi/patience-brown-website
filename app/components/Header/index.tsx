"use client";
import { useOpen } from "@/app/hooks/useOpen";
import { useScroll } from "@/app/hooks/useScroll";
import HeaderContainer from "./HeaderContainer";
import NavBarContainer from "./NavBarContainer";
import Logo from "@/app/components/ui/Logo";
import Routes from "@/app/components/Routes";
import HamburgerMenu from "./HamburgerMenu";
import { Bars, XMark } from "@/app/components/ui/Icons";

export default function Header() {
  const { isOpen, toggleOpen } = useOpen();
  const isScrolled = useScroll();
  const isSmallScreen = true;

  return (
    <>
      <HeaderContainer isOpen={isOpen}>
        <NavBarContainer>
          <Logo isScrolled={isScrolled && isScrolled} />
          <Routes
            ulClassName="hidden sm:flex items-center gap-8"
            liClassName="font-bold uppercase text-[14px] leading-[14px] tracking-widest hover:text-yinmn-blue"
          />
          <HamburgerMenu toggleOpen={toggleOpen}>
            {isOpen ? <XMark /> : <Bars />}
          </HamburgerMenu>
        </NavBarContainer>
        {isOpen && (
          <NavBarContainer
            toggleOpen={isSmallScreen && toggleOpen}
            className="bg-white border-b py-5 flex items-center justify-center absolute left-0 right-0 top-16"
          >
            <Routes
              ulClassName="sm:hidden flex flex-col items-center gap-5"
              liClassName="font-bold uppercase text-[14px] leading-[14px] tracking-widest hover:text-yinmn-blue"
            />
          </NavBarContainer>
        )}
      </HeaderContainer>
    </>
  );
}
