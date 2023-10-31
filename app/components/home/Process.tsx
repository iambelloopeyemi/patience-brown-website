import type { InfoCardProps } from "@/app/libs/types";
import { cn } from "@/app/utils";
import { montserrat } from "@/app/utils/font";
import SectionContainer from "@/app/components/SectionContainer";
import SectionContentContainer from "../SectionContentContainer";
import InfoCard from "../InfoCard";
import Button from "../Button1";

async function fetchProcesses(): Promise<InfoCardProps[]> {
  const response = await fetch("http://localhost:3000/api/processes", {
    next: { revalidate: 100 },
  });
  const processes: Promise<InfoCardProps[]> = response.json();
  return processes;
}

export default async function Process() {
  const data: InfoCardProps[] = await fetchProcesses();

  return (
    <SectionContainer sectionClassName="bg-seasalt text-center">
      <SectionContentContainer propsClassName="flex flex-col items-center gap-4 mb-12">
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
      </SectionContentContainer>
      {data && <InfoCard data={data} />}
      <Button link="/process">learn more</Button>
    </SectionContainer>
  );
}
