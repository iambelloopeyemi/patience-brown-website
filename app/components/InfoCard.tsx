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
}: InfoCardProps): JSX.Element {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mb-6"
        style={{ width: "auto", height: "auto" }}
      />
      <p
        className={`${montserrat.className} text-yinmn-blue font-semibold text-[18px] leading-[25px] tracking-widest mb-3`}
      >
        {heading}
      </p>

      <p
        className={`${cormorant.className} font-medium text-[20px] lg:text-[22px] leading-[28px] lg:leading-[23px] tracking-wide`}
      >
        {message}
      </p>
    </>
  );
}
