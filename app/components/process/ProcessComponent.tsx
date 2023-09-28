import Image from "next/image";
import { cormorant, montserrat } from "@/app/utils/font";

interface ProcessComponentProps {
  backgroundColor?: string;
  src: string;
  alt: string;
  step: string;
  heading: string;
  message: string;
  process: string[];
}

export default function ProcessComponent({
  backgroundColor,
  src,
  alt,
  step,
  heading,
  message,
  process,
}: ProcessComponentProps): JSX.Element {
  return (
    <section
      className={`${backgroundColor} px-5 sm:px-10 lg:px-20 py-16 lg:py-20`}
    >
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <Image src={src} alt={alt} width={500} height={500} />
        </div>
        <article className="flex flex-col justify-center">
          <p
            className={`${montserrat.className} text-ecru font-semibold text-[18px] leading-[25px] mb-1`}
          >
            {step}
          </p>
          <div className={`${cormorant.className} font-medium`}>
            <h2 className="text-[48px] leading-[58px] mb-10">{heading}</h2>
            <p className="text-[22px] leading-[23px] mb-8">{message}</p>
            <ul className="list-disc text-[22px] leading-[29px]">
              {process.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
