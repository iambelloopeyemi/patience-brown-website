import { cn } from "@/app/utils";
import { montserrat } from "@/app/libs/font";
import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionContentContainer from "@/app/components/ui/SectionContentContainer";
import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";
import List from "@/app/components/ui/List";

const books: string[] = ["Book 1", "Book 2", "Book 3"];

export default function PreviousWork() {
  return (
    <SectionContainer>
      <SectionContentContainer>
        <SectionContentWrapper className="font-medium flex flex-col justify-center gap-5">
          <h3 className="text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] tracking-wide">
            Personal Writing
          </h3>
          <div className="text-[22px] leading-[23px] flex flex-col gap-4">
            <p>
              When she&apos;s not ghostwriting or book coaching, Alyson
              publishes faith-based articles under her own name.
            </p>
            <p>Patience can also offer ghostwriting samples on request.</p>
          </div>
        </SectionContentWrapper>
        <SectionContentWrapper>
          <h3
            className={cn(
              montserrat.className,
              "font-bold text-[18px] leading-[18px] uppercase mb-5"
            )}
          >
            previous work
          </h3>
          <List items={books} isPreviousWorks />
        </SectionContentWrapper>
      </SectionContentContainer>
    </SectionContainer>
  );
}
