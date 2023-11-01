import { cn } from "@/app/utils";
import { montserrat } from "@/app/libs/font";
import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionContentContainer from "@/app/components/ui/SectionContentContainer";
import SectionImage from "@/app/components/ui/SectionImage";
import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";
import Button from "@/app/components/ui/Button";
import List from "@/app/components/ui/List";
import patienceBrown from "@/app/assets/patience-brown-2.jpg";

const steps: string[] = [
  "Define your audience and clarify your message",
  "Organize your thoughts into a detailed outline",
  "Communicate your message so compellingly that it'll bear the fruits you envisioned",
];

export default function Collaboration() {
  return (
    <SectionContainer>
      <SectionContentContainer className="grid sm:grid-cols-2 gap-10">
        <SectionImage
          src={patienceBrown}
          className="flex sm:items-start sm:justify-start"
        />
        <SectionContentWrapper className="flex flex-col justify-center">
          <h3 className="font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] mb-10">
            Let me ensure you share that message
          </h3>
          <p
            className={cn(
              montserrat.className,
              "text-yinmn-blue font-semibold uppercase text-[18px] leading-[25px] mb-2.5"
            )}
          >
            together, we will:
          </p>
          {steps && <List items={steps} />}
          <Button link="/about">meet patience brown</Button>
        </SectionContentWrapper>
      </SectionContentContainer>
    </SectionContainer>
  );
}
