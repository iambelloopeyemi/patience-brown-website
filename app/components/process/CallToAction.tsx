import { cn } from "@/app/utils";
import { montserrat } from "@/app/utils/font";
import InfoCard from "@/app/components/InfoCard";
import Button from "@/app/components/Button1";
import SectionContainer from "@/app/components/SectionContainer";
import { callToActionItems } from "@/app/data/ProcessPageData";

export default function CallToAction() {
  return (
    <SectionContainer sectionClassName="text-center">
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
      <InfoCard data={callToActionItems} className="mb-10" />
      <Button link="schedule-a-call">schedule a call</Button>
    </SectionContainer>
  );
}
