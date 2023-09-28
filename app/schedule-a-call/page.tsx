import HeroComponent from "../components/HeroComponent";
import CallToActionSection from "../components/schedule-a-call/CallToActionSection";

export default function scheduleACallPage() {
  return (
    <>
      <HeroComponent
        heading={`Finally Finish Your Book`}
        message={`Fill out the form below to start the conversation. You can expect a response within 1-2 business days.`}
      />
      <CallToActionSection />
    </>
  );
}
