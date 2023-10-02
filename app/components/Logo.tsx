import Link from "next/link";
import { laila } from "../utils/font";

interface LogoProps {
  isScrolled?: boolean;
}

export default function Logo({ isScrolled }: LogoProps): JSX.Element {
  return (
    <Link href="/" className={`${laila.className}`}>
      {isScrolled ? (
        <strong className="block font-semibold text-[30px] leading-[30px] transition-all duration-300 ease-in">
          Brown Patience
        </strong>
      ) : (
        <>
          <strong className="block font-semibold text-[30px] leading-[30px] transition-all duration-300 ease-in">
            Brown
          </strong>
          <strong className="block font-semibold text-[30px] leading-[30px] indent-8 transition-all duration-300 ease-in">
            Patience
          </strong>
        </>
      )}
    </Link>
  );
}
