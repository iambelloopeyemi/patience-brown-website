import Hero from "@/app/components/ui/Hero";
import ProcessOne from "@/app/components/pages/process/Process";
import ProcessTwo from "@/app/components/pages/process/Process";
import ProcessThree from "@/app/components/pages/process/Process";
import Testimonial from "@/app/components/ui/TestimonialContainer";
import CallToAction from "@/app/components/pages/process/CallToAction";
import Empowerment from "@/app/components/ui/Empowerment";
import { StepOne, StepTwo, StepThree } from "../data";
import patienceBrownPic2 from "@/app/assets/patience-brown-2.jpg";
import patienceBrownPic3 from "@/app/assets/patience-brown-3.jpg";
import workStation from "@/app/assets/work-station.webp";

export default function ProcessPage() {
  return (
    <>
      <Hero
        heading="Let's Write Your Book"
        message="I take authors through a highly-collaborative process so we can write your book at a pace that feels comfortable for you."
      />
      <ProcessOne
        src={patienceBrownPic2}
        step="STEP 1"
        heading="Finding Clarity"
        message="This will provide the firm foundation for the book and enable us to move through the rest of the process more efficiently."
        process={StepOne}
      />
      <ProcessTwo
        backgroundColor="bg-seasalt"
        src={patienceBrownPic3}
        step="STEP 2"
        heading="Writing"
        message="We will write, review, and refine each chapter together so you can be sure the final product is authentic to your voice and vision."
        process={StepTwo}
      />
      <ProcessThree
        src={workStation}
        alt="work-station"
        step="STEP 3"
        heading="Editing"
        message="With a trusted editor on the team, we will make sure your book is polished and ready to publish."
        process={StepThree}
      />
      <Testimonial />
      <CallToAction />
      <Empowerment
        heading="Stop Second-Guessing Yourself."
        message="Share your message with the people who need it the most."
      />
    </>
  );
}
