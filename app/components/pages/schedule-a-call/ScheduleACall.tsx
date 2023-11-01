import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionContentContainer from "@/app/components/ui/SectionContentContainer";
import CallToAction from "./CallToAction";
import FeaturedTestimonial from "./FeaturedTestimonial";

export default function ScheduleACall() {
  return (
    <SectionContainer>
      <SectionContentContainer>
        <CallToAction />
        <FeaturedTestimonial />
      </SectionContentContainer>
    </SectionContainer>
  );
}
