import { cn } from "@/app/utils";
import { montserrat } from "@/app/libs/font";
import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionContentContainer from "@/app/components/ui/SectionContentContainer";
import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";
import Button from "@/app/components/ui/Button";
import SectionImage from "@/app/components/ui/SectionImage";
import patienBrown from "@/app/assets/patience-brown-3.jpg";

export default function Consultation() {
  const paragraphClassName = "font-medium text-[22px] leading-[28px]";

  return (
    <SectionContainer>
      <SectionContentContainer className="grid sm:grid-cols-2 gap-10">
        <SectionContentWrapper className="flex flex-col justify-center">
          <h3 className="font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] mb-10">
            Get Started Right Now
          </h3>
          <p
            className={cn(
              montserrat.className,
              "text-yinmn-blue font-semibold uppercase text-[18px] leading-[22px] mb-3"
            )}
          >
            let&apos;s talk
          </p>
          <p className={cn(paragraphClassName, "mb-2")}>
            Tell me about the book you&apos;ve been desiring to write, the
            message you&apos;ve been yearning to share. Tell me where you are
            and I&apos;ll walk with you.
          </p>
          <p className={cn(paragraphClassName, "mb-10")}>
            Let me ensure you share that message!
          </p>
          <Button link="/schedule-a-call">sechedule a call</Button>
        </SectionContentWrapper>
        <SectionImage
          src={patienBrown}
          className="flex sm:items-start sm:justify-start"
        />
      </SectionContentContainer>
    </SectionContainer>
  );
}
