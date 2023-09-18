import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="bg-yinmn-blue py-[60px] text-seasalt">
      <div className="flex flex-col items-center gap-8">
        <div>
          <Image
            src="/website-logo.webp"
            width={200}
            height={112}
            alt="website-logo"
          />
        </div>
        <ul className="flex flex-col items-center gap-4">
          <li>
            <Link
              href={`#`}
              className="uppercase tracking-widest font-semibold hover:underline"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href={`#`}
              className="uppercase tracking-widest font-semibold hover:underline"
            >
              process
            </Link>
          </li>
          <li>
            <Link
              href={`#`}
              className="uppercase tracking-widest font-semibold hover:underline"
            >
              schedule a call
            </Link>
          </li>
        </ul>
        <div className="text-center">
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
        <p className="text-center">
          <span className="text-sm tracking-tight">
            Patience Brown © {currentYear}
          </span>
        </p>
      </div>
    </footer>
  );
}
