import Hero from "./components/home/Hero";
import MessageToAudience from "./components/home/MessageToAudience";
import Divider from "./components/home/Divider";
import Beneficiaries from "./components/home/Beneficiaries";
import Collaboration from "./components/home/Collaboration";
import Process from "./components/home/Process";
import Testimonial from "./components/TestimonialContainer";
import Consultation from "./components/home/Consultation";
import Empowerment from "./components/Empowerment";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <MessageToAudience />
      <Divider />
      <Beneficiaries />
      <Collaboration />
      <Process />
      <Testimonial />
      <Consultation />
      <Empowerment
        heading="Let Nothing Deter You Any Longer"
        message="Share the message you know you should. You'll be saving lives"
      />
    </>
  );
}
