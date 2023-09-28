import Link from "next/link";
import { laila } from "../utils/font";

interface LogoProps {
  isScrolled?: boolean;
}

export default function Logo({ isScrolled }: LogoProps): JSX.Element {
  return (
    <Link href="/" className={`${laila.className}`}>
      {isScrolled ? (
        <strong className="block font-semibold text-3xl transition-all duration-300 ease-in">
          Patience Brown
        </strong>
      ) : (
        <>
          <strong className="block font-semibold text-3xl transition-all duration-300 ease-in">
            Patience
          </strong>
          <strong className="block font-semibold text-3xl indent-8 transition-all duration-300 ease-in">
            Brown
          </strong>
        </>
      )}
    </Link>
  );
}
