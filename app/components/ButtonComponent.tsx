import Link from "next/link";
import { montserrat } from "../utils/font";

interface ButtonProps {
  isExternalLink?: boolean;
  url: string;
  title: string;
}

export default function Button({
  isExternalLink,
  url,
  title,
}: ButtonProps): JSX.Element {
  return (
    <Link href={`${url}`} target={isExternalLink ? "_blank" : "_self"}>
      <button className="bg-ecru px-8 py-3 rounded-full hover:scale-105 ease-in-out">
        <span
          className={`${montserrat.className} text-white font-semibold text-sm tracking-widest uppercase`}
        >
          {title}
        </span>
      </button>
    </Link>
  );
}
