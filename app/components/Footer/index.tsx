import FooterContainer from "./FooterContainer";
import Logo from "@/app/components/Logo";
import Routes from "@/app/components/Routes";
import Legal from "./Legal";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <FooterContainer>
      <Logo />
      <Routes
        ulClassName="flex max-sm:flex-col items-center gap-4"
        liClassName="font-semibold uppercase text-[16px] leading-[14px] tracking-widest hover:underline"
      />
      <Legal />
      <Copyright />
    </FooterContainer>
  );
}
