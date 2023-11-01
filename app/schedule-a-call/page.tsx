import Hero from "@/app/components/ui/Hero";
import ScheduleACall from "@/app/components/pages/schedule-a-call/ScheduleACall";

export default function scheduleACallPage() {
  return (
    <>
      <Hero
        heading="Finally Finish Your Book"
        message="Fill out the form below to start the conversation. You can expect a response within 1-2 business days."
      />
      <ScheduleACall />
    </>
  );
}
