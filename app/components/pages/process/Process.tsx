import type { StaticImageData } from "next/image";
import { cn } from "@/app/utils";
import { montserrat } from "@/app/libs/font";
import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionContentContainer from "@/app/components/ui/SectionContentContainer";
import SectionImage from "@/app/components/ui/SectionImage";
import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";
import List from "@/app/components/ui/List";

type ProcessProps = {
  backgroundColor?: string;
  src: StaticImageData;
  alt?: string;
  step: string;
  heading: string;
  message: string;
  process: string[];
};

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
    <SectionContainer className={cn(backgroundColor)}>
      <SectionContentContainer className="grid sm:grid-cols-2 gap-5 sm:gap-10">
        <SectionImage
          src={src}
          alt={alt}
          className="flex sm:items-start sm:justify-start"
        />
        <SectionContentWrapper className="flex flex-col justify-center">
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
        </SectionContentWrapper>
      </SectionContentContainer>
    </SectionContainer>
  );
}
