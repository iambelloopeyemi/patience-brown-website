import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";
import SectionImage from "@/app/components/ui/SectionImage";
import brownPatiencePic1 from "@/app/assets/patience-brown-1.jpg";

export default function FeaturedTestimonial() {
  return (
    <SectionContentWrapper className="flex flex-col gap-5">
      <SectionImage
        src={brownPatiencePic1}
        priority={true}
        className="flex justify-start items-start"
      />
      <blockquote className="font-medium italic text-[22px] sm:text-[24px] leading-[29px] sm:leading-[32px]">
        “Simply put Alyson is the best of the best… I really enjoyed working
        with her. I will work with her again. She cares about what you are
        doing. She takes ownership in it. And she is willing to listen and make
        adjustments. She is a very kind person that is open for feedback. Hire
        her! You won&apos;t be disappointed.” -&nbsp;
        <span className="text-ecru">Dave P.</span>
      </blockquote>
    </SectionContentWrapper>
  );
}
