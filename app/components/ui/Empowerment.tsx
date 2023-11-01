import SectionContainer from "./SectionContainer";
import SectionContentContainer from "./SectionContentContainer";
import SectionImage from "./SectionImage";
import SectionContentWrapper from "./SectionContentWrapper";
import booksIcon from "@/app/assets/books-icon.webp";

type EmpowermentProps = {
  heading: string;
  message: string;
};

export default function Empowerment({ heading, message }: EmpowermentProps) {
  return (
    <SectionContainer className="bg-seasalt lg:py-20 flex justify-center items-center">
      <SectionContentContainer className="flex flex-col items-center gap-10">
        <SectionImage src={booksIcon} alt="books icon" width={60} height={60} />
        <SectionContentWrapper className="font-medium text-center flex flex-col items-center gap-2">
          <p className="text-yinmn-blue text-[32px] leading-[42px]">
            {heading}
          </p>
          <p className="text-[22px] leading-[26px]">{message}</p>
        </SectionContentWrapper>
      </SectionContentContainer>
    </SectionContainer>
  );
}
