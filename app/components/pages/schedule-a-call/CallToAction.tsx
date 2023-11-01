import CallToActionForm from "./CallToActionForm";
import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";

export default function CallToAction() {
  return (
    <SectionContentWrapper>
      <header className="mb-[34px]">
        <h2 className="font-medium text-[32px] sm:text-[36px] leading-[32px] sm:leading-[36px] mb-[10px]">
          Schedule a Call
        </h2>
        <p className="font-medium text-[22px] leading-[23px]">
          We&apos;ll use this free, 20-minute Zoom call to discuss your book and
          see whether a ghostwriter or book coach is right for you.
        </p>
      </header>
      <CallToActionForm />
    </SectionContentWrapper>
  );
}
