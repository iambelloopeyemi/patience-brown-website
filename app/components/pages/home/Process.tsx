import { cn } from "@/app/utils";
import { montserrat } from "@/app/libs/font";
import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";
import InfoCard from "@/app/components/ui/InfoCard";
import Button from "@/app/components/ui/Button";
import { process as data } from "@/app/data";

export default async function Process() {
  return (
    <SectionContainer className="bg-seasalt">
      <SectionContentWrapper className="text-center flex flex-col items-center gap-4 mb-12">
        <p
          className={cn(
            montserrat.className,
            "text-yinmn-blue font-semibold uppercase text-[18px] leading-[25px]"
          )}
        >
          the 3-step process to:
        </p>
        <h3 className="text-black font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px]">
          Get Your Book, Your Voice, Your message, Out There
        </h3>
      </SectionContentWrapper>
      {data && <InfoCard data={data} className="text-center" />}
      <Button link="/process" className="flex justify-center">
        learn more
      </Button>
    </SectionContainer>
  );
}
