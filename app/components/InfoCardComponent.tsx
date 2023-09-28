import Image from "next/image";
import { cormorant, montserrat } from "../utils/font";

interface InfoCardComponentProps {
  src: string;
  alt: string;
  heading: string;
  message: string;
}

export default function InfoCardComponent({
  src,
  alt,
  heading,
  message,
}: InfoCardComponentProps) {
  return (
    <>
      <div className="mb-6">
        <Image src={src} alt={alt} width={63} height={63} />
      </div>
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
