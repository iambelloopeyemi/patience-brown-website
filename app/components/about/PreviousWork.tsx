import { cn } from "@/app/utils";
import { montserrat } from "@/app/utils/font";
import SectionContainer from "@/app/components/SectionContainer";
import SectionContentContainer from "@/app/components/SectionContentContainer";
import SectionContent from "@/app/components/SectionContent";
import List from "@/app/components/List";

const books: string[] = ["Book 1", "Book 2", "Book 3"];

export default function PreviousWork() {
  return (
    <SectionContainer>
      <SectionContentContainer>
        <SectionContent propsClassName="font-medium flex flex-col justify-center gap-5">
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
        </SectionContent>
        <SectionContent>
          <h3
            className={cn(
              montserrat.className,
              "font-bold text-[18px] leading-[18px] mb-5"
            )}
          >
            PREVIOUS WORK
          </h3>
          <List items={books} isPreviousWorks />
        </SectionContent>
      </SectionContentContainer>
    </SectionContainer>
  );
}
