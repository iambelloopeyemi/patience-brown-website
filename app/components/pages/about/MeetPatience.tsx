import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionContentContainer from "@/app/components/ui/SectionContentContainer";
import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";
import SectionImage from "@/app/components/ui/SectionImage";
import patiencBrown from "@/app/assets/patience-brown-2.jpg";

export default function MeetPatience() {
  return (
    <SectionContainer>
      <SectionContentContainer>
        <SectionContentWrapper className="font-medium flex flex-col gap-5">
          <h2 className="text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] tracking-wide">
            Meet Patience
          </h2>
          <article className="text-[22px] leading-[23px] flex flex-col gap-4">
            <p>
              Patience believes in the power of the written word and loves
              guiding authors through the book-writing process.
            </p>
            <p>
              She formerly served as a humanitarian aid worker in Haiti,
              Tanzania, and Zambia. Now she brings that same level of dedication
              and focus to each book that she works on.
            </p>
            <p>
              Writing and service are close to her heart. She combines these
              passions in her leadership position with the Divine Mercy Centre,
              a ministry that feeds and houses the elderly in Tanzania.
            </p>
            <p>Patience and her husband live in Houston, Texas.</p>
          </article>
        </SectionContentWrapper>
        <SectionImage
          src={patiencBrown}
          className="flex items-center sm:items-start justify-center sm:justify-start"
        />
      </SectionContentContainer>
    </SectionContainer>
  );
}
