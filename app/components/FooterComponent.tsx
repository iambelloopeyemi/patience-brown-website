import Link from "next/link";
import Nav from "./NavComponent";
import Logo from "./LogoComponent";

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-yinmn-blue px-4 py-16 text-seasalt">
      <div className="flex flex-col items-center gap-8 text-center">
        <Logo />
        <ul className="flex max-sm:flex-col items-center gap-4">
          <Nav
            activeAnchorTagClass="font-semibold tracking-widest uppercase hover:underline"
            anchorTagClass="font-semibold tracking-widest uppercase hover:underline"
          />
        </ul>
        <div>
          <Link
            href={`#`}
            className="font-medium tracking-wide hover:underline"
          >
            Privacy Policy
          </Link>
          &nbsp;•&nbsp;
          <Link
            href={`#`}
            className="font-medium tracking-wide hover:underline"
          >
            Terms
          </Link>
        </div>
        <p>
          <strong className="font-light tracking-tight">
            Patience Brown © {currentYear}
          </strong>
        </p>
      </div>
    </footer>
  );
}
