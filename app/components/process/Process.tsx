import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { cormorant, montserrat } from "@/app/utils/font";

interface ProcessProps {
  backgroundColor?: string;
  src: string;
  alt: string;
  step: string;
  heading: string;
  message: string;
  process: string[];
}

export default function Process({
  backgroundColor,
  src,
  alt,
  step,
  heading,
  message,
  process,
}: ProcessProps): JSX.Element {
  return (
    <section
      className={`${backgroundColor} px-5 sm:px-10 lg:px-20 py-16 lg:py-20`}
    >
      <div className="grid sm:grid-cols-2 gap-5 sm:gap-10">
        <div>
          <Image src={src} alt={alt} width={500} height={500} />
        </div>
        <div className="flex flex-col justify-center">
          <p
            className={`${montserrat.className} text-ecru font-semibold text-[18px] leading-[25px] mb-1`}
          >
            {step}
          </p>
          <div className={`${cormorant.className} font-medium`}>
            <h2 className="text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] mb-10">
              {heading}
            </h2>
            <p className="text-[22px] leading-[23px] mb-8">{message}</p>
            <ul>
              {process.map((item: string, index: number) => (
                <li key={index} className="flex items-baseline gap-2 mb-1">
                  <span className="block text-[8px]">
                    <FaCircle />
                  </span>
                  <span className="block text-[22px] leading-[29px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
