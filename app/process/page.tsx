import { StepOne, StepTwo, StepThree } from "../data/ProcessPageData";
import Hero from "../components/Hero";
import ProcessOne from "../components/process/Process";
import ProcessTwo from "../components/process/Process";
import ProcessThree from "../components/process/Process";
import Testimonial from "../components/Testimonial";
import CallToAction from "../components/process/CallToAction";
import Empowerment from "../components/Empowerment";

export default function ProcessPage(): JSX.Element {
  return (
    <>
      <Hero
        heading="Let's Write Your Book"
        message="I take authors through a highly-collaborative process so we can write your book at a pace that feels comfortable for you."
      />
      <ProcessOne
        src="/patience-brown-2.jpg"
        alt="picture of patience brown"
        step="STEP 1"
        heading="Finding Clarity"
        message="This will provide the firm foundation for the book and enable us to move through the rest of the process more efficiently."
        process={StepOne}
      />
      <ProcessTwo
        backgroundColor="bg-seasalt"
        src="/patience-brown-3.jpg"
        alt="picture of patience brown"
        step="STEP 2"
        heading="Writing"
        message="We will write, review, and refine each chapter together so you can be sure the final product is authentic to your voice and vision."
        process={StepTwo}
      />
      <ProcessThree
        step="STEP 3"
        src="/work-station.webp"
        alt="work-station"
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
