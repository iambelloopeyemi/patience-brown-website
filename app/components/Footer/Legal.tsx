import Link from "next/link";
import { cn } from "@/app/utils";

export default function Legal() {
  const defaultClassName =
    "font-medium text-[14px] leading-[23px] tracking-wide hover:underline";

  return (
    <div>
      <Link href={`#`} className={cn(defaultClassName)}>
        Privacy Policy
      </Link>
      &nbsp;•&nbsp;
      <Link href={`#`} className={cn(defaultClassName)}>
        Terms
      </Link>
    </div>
  );
}
