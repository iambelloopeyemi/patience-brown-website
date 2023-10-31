import { cn } from "@/app/utils";
import { montserrat } from "@/app/utils/font";
import SectionContainer from "../SectionContainer";
import SectionContentContainer from "../SectionContentContainer";
import SectionContent from "../SectionContent";
import Button from "../Button1";
import SectionImage from "../SectionImage";
import patienBrown from "@/app/assets/patience-brown-3.jpg";

export default function Consultation() {
  return (
    <SectionContainer>
      <SectionContentContainer propsClassName="grid sm:grid-cols-2 gap-10">
        <SectionContent propsClassName="flex flex-col justify-center">
          <h5 className="font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] mb-10">
            Get Started Right Now
          </h5>

          <p
            className={cn(
              montserrat.className,
              "text-yinmn-blue font-semibold uppercase text-[18px] leading-[22px] mb-3"
            )}
          >
            let&apos;s talk
          </p>
          <p className="font-medium text-[22px] leading-[28px] mb-2">
            Tell me about the book you&apos;ve been desiring to write, the
            message you&apos;ve been yearning to share. Tell me where you are
            and I&apos;ll walk with you.
          </p>
          <p className="font-medium text-[22px] leading-[28px] mb-10">
            Let me ensure you share that message!
          </p>
          <Button link="/schedule-a-call">sechedule a call</Button>
        </SectionContent>
        <SectionImage src={patienBrown} alt="picture of patience brown" />
      </SectionContentContainer>
    </SectionContainer>
  );
}
