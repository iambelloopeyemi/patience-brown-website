import { cn } from "@/app/utils";
import { montserrat } from "@/app/libs/font";
import InfoCard from "@/app/components/ui/InfoCard";
import Button from "@/app/components/ui/Button";
import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";
import { callToActionItems as data } from "@/app/data";

export default function CallToAction() {
  return (
    <SectionContainer>
      <SectionContentWrapper className="text-center">
        <p
          className={cn(
            montserrat.className,
            "text-yinmn-blue font-semibold text-[18px] leading-[25px] tracking-widest mb-2"
          )}
        >
          READY TO GO?
        </p>
        <h3 className="font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] tracking-wider mb-10">
          Getting Started Is Simple
        </h3>
        <p className="font-medium text-[28px] leading-[31px] tracking-wide text-center mb-12">
          Your Message Deserves to be Heard!
        </p>
      </SectionContentWrapper>
      {data && <InfoCard data={data} className="text-center mb-10" />}
      <Button link="schedule-a-call" className="flex justify-center">
        schedule a call
      </Button>
    </SectionContainer>
  );
}
