import Image from "next/image";
import { cormorant, montserrat } from "../utils/font";
import { InfoCardProps } from "../utils/interface";

export default function InfoCard({
  src,
  alt,
  width,
  height,
  heading,
  message,
}: InfoCardProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mb-6"
      />
      <p
        className={`${montserrat.className} text-yinmn-blue font-semibold text-[18px] leading-[25px] tracking-widest text-center mb-3`}
      >
        {heading}
      </p>

      <p
        className={`${cormorant.className} font-medium text-[22px] leading-[23px] tracking-wide text-center`}
      >
        {message}
      </p>
    </>
  );
}
