import { FaCircle } from "react-icons/fa";
import { cn } from "@/app/utils";
import { montserrat } from "@/app/utils/font";
import SectionContainer from "@/app/components/SectionContainer";
import SectionContentContainer from "@/app/components/SectionContentContainer";
import SectionImage from "@/app/components/SectionImage";
import SectionContent from "@/app/components/SectionContent";
import Button from "@/app/components/Button1";
import patienceBrown from "@/app/assets/patience-brown-2.jpg";
import List from "../List";

const steps: string[] = [
  "Define your audience and clarify your message",
  "Organize your thoughts into a detailed outline",
  "Communicate your message so compellingly that it'll bear the fruits you envisioned",
];

export default function Collaboration() {
  return (
    <SectionContainer>
      <SectionContentContainer propsClassName="grid sm:grid-cols-2 gap-10">
        <SectionImage src={patienceBrown} alt="picture of patience brown" />
        <SectionContent propsClassName="flex flex-col justify-center">
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
          <List items={steps} />
          <Button link="/about">meet patience brown</Button>
        </SectionContent>
      </SectionContentContainer>
    </SectionContainer>
  );
}
