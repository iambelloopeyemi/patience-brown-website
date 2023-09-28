import HeroComponent from "../components/HeroComponent";

export default function scheduleACallPage() {
  return (
    <>
      <HeroComponent
        heading={`Finally Finish Your Book`}
        message={`Fill out the form below to start the conversation. You can expect a response within 1-2 business days.`}
      />
    </>
  );
}
