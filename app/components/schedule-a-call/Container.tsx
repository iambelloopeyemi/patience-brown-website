import CallToAction from "./CallToAction";
import FeaturedTestimonial from "./FeaturedTestimonial";

export default function Container(): JSX.Element {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <CallToAction />
        <FeaturedTestimonial />
      </div>
    </section>
  );
}
