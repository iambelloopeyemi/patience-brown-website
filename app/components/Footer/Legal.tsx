import Link from "next/link";
import { cn } from "@/app/utils";

export default function Legal() {
  const className =
    "font-medium text-[14px] leading-[23px] tracking-wide hover:underline";

  return (
    <div>
      <Link href={`#`} className={cn(className)}>
        Privacy Policy
      </Link>
      &nbsp;•&nbsp;
      <Link href={`#`} className={cn(className)}>
        Terms
      </Link>
    </div>
  );
}
