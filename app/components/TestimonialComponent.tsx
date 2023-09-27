import { cormorant } from "@/app/utils/font";
import TestimonialFunction from "./TestimonialFunction";

export default function Testimonial(): JSX.Element {
  return (
    <section
      className={`bg-yinmn-blue px-5 sm:px-10 lg:px-20 py-16 lg:py-20 ${cormorant.className}`}
    >
      <TestimonialFunction />
    </section>
  );
}
