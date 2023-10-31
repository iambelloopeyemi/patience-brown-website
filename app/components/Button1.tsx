import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/app/utils";
import { montserrat } from "../utils/font";

type ButtonProps = {
  link?: string;
  target?: "_blank" | "_self";
  type?: "button" | "submit";
  children: ReactNode;
};

export default function Button1({
  link,
  target = "_self",
  type = "button",
  children,
}: ButtonProps) {
  const buttonClassName =
    "bg-ecru px-8 py-3 rounded-full hover:scale-105 ease-in-out";
  const spanClassName =
    "text-white font-bold uppercase text-[16px] leading-[27px] tracking-widest";

  return (
    <>
      <Link href={`${link}`} target={target} className="block">
        <button type={type} className={cn(buttonClassName)}>
          <span className={cn(montserrat.className, spanClassName)}>
            {children}
          </span>
        </button>
      </Link>
    </>
  );
}
