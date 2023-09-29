import Image from "next/image";
import { montserrat } from "../utils/font";
import { BeneficiaryContentProps } from "../data/BeneficiariesComponentData";

export default function BeneficiariesCardComponent({
  src,
  alt,
  heading,
  message,
}: BeneficiaryContentProps) {
  return (
    <>
      <div className="mb-[10px]">
        <Image src={src} alt={alt} width={128} height={128} />
      </div>
      <p
        className={`${montserrat.className} text-yinmn-blue font-semibold uppercase text-[18px] leading-[25px] mb-2`}
      >
        {heading}
      </p>

      <p className="font-medium text-[22px] leading-[23px]">{message}</p>
    </>
  );
}
