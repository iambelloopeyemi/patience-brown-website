import Image from "next/image";
import type { CardProps } from "@/app/libs/types";
import { cn } from "@/app/utils";
import { montserrat } from "@/app/utils/font";

interface InfoCardProps {
  className?: string;
  data: CardProps[];
}

export default function InfoCard({ className, data }: InfoCardProps) {
  const headingClassName =
    "text-yinmn-blue font-semibold text-[18px] leading-[25px] tracking-widest mb-3";
  const messageClassName =
    "font-medium text-[20px] lg:text-[22px] leading-[28px] lg:leading-[23px] tracking-wide";

  return (
    <ul
      className={cn(
        "grid lg:grid-cols-3 gap-[52px] lg:gap-[72px] mb-4",
        className
      )}
    >
      {data &&
        data.map(
          ({ src, alt, width, height, heading, message }, index: number) => (
            <li key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="w-auto h-auto mb-6"
                />
              </div>
              <p className={cn(montserrat.className, headingClassName)}>
                {heading}
              </p>
              <p className={cn(messageClassName)}>{message}</p>
            </li>
          )
        )}
    </ul>
  );
}
