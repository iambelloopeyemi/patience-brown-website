import Image from "next/image";
import { montserrat } from "../../utils/font";
import { BeneficiariesContent as contents } from "../../data/beneficiaries";

export default function Beneficiaries(): JSX.Element {
  return (
    <>
      {contents.map(({ src, alt, title, text }, index: number) => (
        <li key={index} className="flex flex-col items-center gap-4">
          <div>
            <Image src={src} alt={alt} />
          </div>
          <div
            className={`${montserrat.className} text-yinmn-blue uppercase text-lg font-semibold`}
          >
            {title}
          </div>
          <div className="text-lg">{text}</div>
        </li>
      ))}
    </>
  );
}
