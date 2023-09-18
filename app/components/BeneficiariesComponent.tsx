import Image from "next/image";
import { montserrat } from "../utils/font";
import { BeneficiaryProps } from "../data/Beneficiaries";

interface BeneficiariesComponentProps {
  content: BeneficiaryProps[];
}

export default function Beneficiaries({
  content,
}: BeneficiariesComponentProps): JSX.Element {
  return (
    <>
      {content.map(({ src, alt, title, text }, index: number) => (
        <li key={index} className="flex flex-col items-center">
          <div className="mb-3">
            <Image src={src} alt={alt} />
          </div>
          <div
            className={`${montserrat.className} text-yinmn-blue font-semibold text-lg uppercase mb-2`}
          >
            {title}
          </div>
          <div className="text-lg">{text}</div>
        </li>
      ))}
    </>
  );
}
