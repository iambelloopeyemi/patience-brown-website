import SectionContainer from "@/app/components/SectionContainer";
import SectionContentContainer from "@/app/components/SectionContentContainer";
import SectionContent from "@/app/components/SectionContent";
import patiencBrown from "@/app/assets/patience-brown-2.jpg";
import SectionImage from "@/app/components/SectionImage";

export default function MeetPatience() {
  return (
    <SectionContainer>
      <SectionContentContainer propsClassName="grid sm:grid-cols-2 gap-10">
        <SectionContent propsClassName="font-medium flex flex-col justify-center gap-5">
          <h2 className="text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] tracking-wide">
            Meet Patience
          </h2>
          <div className="text-[22px] leading-[23px] flex flex-col gap-4">
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
          </div>
        </SectionContent>
        <SectionImage src={patiencBrown} />
      </SectionContentContainer>
    </SectionContainer>
  );
}
