import { cn } from "@/app/utils";
import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";

export default function MessageToAudience() {
  const headerClassName =
    "text-black text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] ";
  const paragraphClassName =
    "text-[22px] lg:text-[28px] leading-[28px] lg:leading-[39px]";

  return (
    <SectionContainer className="bg-seasalt">
      <SectionContentWrapper className="text-center">
        <h2 className={cn(headerClassName, "mb-6")}>
          Get your message to the people in need of it
        </h2>
        <p className={cn(paragraphClassName, "mb-2")}>
          Many visionaries have a message for their world, books they&apos;ve
          been planning to write, but they got stuck, couldn&apos;t find the
          time to continue, and began to wonder if they&apos;d ever share that
          message
        </p>
        <p className={cn(paragraphClassName)}>
          But with a ghostwriter to help write your book, your vision stays
          alive.
        </p>
      </SectionContentWrapper>
    </SectionContainer>
  );
}
