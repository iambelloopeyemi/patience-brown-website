import Link from "next/link";
import { montserrat } from "../utils/font";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer
      className={`bg-yinmn-blue px-5 py-16 ${montserrat.className} text-seasalt`}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <div>
          <Logo />
        </div>
        <ul className="flex max-sm:flex-col items-center gap-4">
          <Nav
            activeAnchorTagClass="font-semibold uppercase text-[16px] leading-[14px] tracking-widest hover:underline"
            anchorTagClass="font-semibold uppercase text-[16px] leading-[14px] tracking-widest hover:underline"
          />
        </ul>
        <div>
          <Link
            href={`#`}
            className="font-medium text-[14px] leading-[23px] tracking-wide hover:underline"
          >
            Privacy Policy
          </Link>
          &nbsp;•&nbsp;
          <Link
            href={`#`}
            className="font-medium text-[14px] leading-[23px] tracking-wide hover:underline"
          >
            Terms
          </Link>
        </div>
        <p>
          <strong className="font-light text-[14px] leading-[23px] tracking-tight">
            Patience Brown © {currentYear}
          </strong>
        </p>
      </div>
    </footer>
  );
}
