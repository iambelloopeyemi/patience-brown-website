import type { StaticImageData } from "next/image";
import { cn } from "@/app/utils";
import { montserrat } from "@/app/utils/font";
import SectionContainer from "../SectionContainer";
import SectionContentContainer from "../SectionContentContainer";
import SectionImage from "../SectionImage";
import SectionContent from "../SectionContent";
import List from "../List";

interface ProcessProps {
  backgroundColor?: string;
  src: StaticImageData;
  alt?: string;
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
    <SectionContainer sectionClassName={cn(backgroundColor)}>
      <SectionContentContainer propsClassName="grid sm:grid-cols-2 gap-5 sm:gap-10">
        <SectionImage src={src} alt={alt} />
        <SectionContent propsClassName="flex flex-col justify-center">
          <p
            className={cn(
              montserrat.className,
              "text-ecru font-semibold text-[18px] leading-[25px] mb-1"
            )}
          >
            {step}
          </p>
          <h2 className="font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] mb-10">
            {heading}
          </h2>
          <p className="font-medium text-[22px] leading-[23px] mb-8">
            {message}
          </p>
          <List items={process} />
        </SectionContent>
      </SectionContentContainer>
    </SectionContainer>
  );
}
