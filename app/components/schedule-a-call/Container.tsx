import SectionContainer from "../SectionContainer";
import SectionContentContainer from "../SectionContentContainer";
import CallToAction from "./CallToAction";
import FeaturedTestimonial from "./FeaturedTestimonial";

export default function Container() {
  return (
    <SectionContainer>
      <SectionContentContainer>
        <CallToAction />
        <FeaturedTestimonial />
      </SectionContentContainer>
    </SectionContainer>
  );
}
