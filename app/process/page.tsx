import {
  processOne,
  processTwo,
  processThree,
} from "../data/ProcessComponentData";
import HeroComponent from "../components/HeroComponent";
import ProcessComponentOne from "../components/process/ProcessComponent";
import ProcessComponentTwo from "../components/process/ProcessComponent";
import ProcessComponentThree from "../components/process/ProcessComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import EmpowermentComponent from "../components/EmpowermentComponent";
import CallToActionComponent from "../components/process/CallToActionComponent";

export default function ProcessPage(): JSX.Element {
  return (
    <>
      <HeroComponent
        heading={`Let's Write Your Book`}
        message={`I take authors through a highly-collaborative process so we can write your book at a pace that feels comfortable for you.`}
      />
      <ProcessComponentOne
        src={`/patience-brown-2.jpg`}
        alt={`picture of patience brown`}
        step={`STEP 1`}
        heading={`Finding Clarity`}
        message={`This will provide the firm foundation for the book and enable us to move through the rest of the process more efficiently.`}
        process={processOne}
      />
      <ProcessComponentTwo
        backgroundColor={`bg-seasalt`}
        src={`/patience-brown-3.jpg`}
        alt={`picture of patience brown`}
        step={`STEP 2`}
        heading={`Writing`}
        message={`We will write, review, and refine each chapter together so you can be sure the final product is authentic to your voice and vision.`}
        process={processTwo}
      />
      <ProcessComponentThree
        step={`STEP 3`}
        src={`/work-station.webp`}
        alt={`work-station`}
        heading={`Editing`}
        message={`With a trusted editor on the team, we will make sure your book is polished and ready to publish.`}
        process={processThree}
      />
      <TestimonialComponent />
      <CallToActionComponent />
      <EmpowermentComponent
        heading="Stop Second-Guessing Yourself."
        message="Share your message with the people who need it the most."
      />
    </>
  );
}
