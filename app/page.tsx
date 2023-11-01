import Hero from "./components/pages/home/Hero";
import MessageToAudience from "./components/pages/home/MessageToAudience";
import Divider from "./components/pages/home/Divider";
import Beneficiaries from "./components/pages/home/Beneficiaries";
import Collaboration from "./components/pages/home/Collaboration";
import Process from "./components/pages/home/Process";
import Testimonial from "./components/ui/TestimonialContainer";
import Consultation from "./components/pages/home/Consultation";
import Empowerment from "./components/ui/Empowerment";

export default function Home() {
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
