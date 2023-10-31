import SectionImage from "@/app/components/SectionImage";
import SectionContent from "@/app/components/SectionContent";
import brownPatiencePic1 from "@/app/assets/patience-brown-1.jpg";

export default function FeaturedTestimonial() {
  return (
    <SectionContent propsClassName="flex flex-col gap-5">
      <SectionImage src={brownPatiencePic1} />
      <blockquote className="font-medium italic text-[22px] sm:text-[24px] leading-[29px] sm:leading-[32px]">
        “Simply put Alyson is the best of the best… I really enjoyed working
        with her. I will work with her again. She cares about what you are
        doing. She takes ownership in it. And she is willing to listen and make
        adjustments. She is a very kind person that is open for feedback. Hire
        her! You won&apos;t be disappointed.” - Dave P.
      </blockquote>
    </SectionContent>
  );
}
