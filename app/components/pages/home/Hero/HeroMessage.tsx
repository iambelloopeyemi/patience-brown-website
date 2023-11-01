import { cn } from "@/app/utils";
import { cormorant } from "@/app/libs/font";
import Button from "@/app/components/ui/Button";

export default function HeroMessage() {
  return (
    <div
      className={cn(
        cormorant.className,
        "text-white p-5 sm:p-10 flex flex-col justify-center gap-10 sm:order-1 max-sm:order-2"
      )}
    >
      <h1 className="font-medium text-[38px] leading-[46px]">
        It&apos;s time you finally authored that book
      </h1>
      <p className="font-medium text-[28px] leading-[38px]">
        Work with Brown Patience to write your book, and get your message into
        the world
      </p>
      <Button link="schedule-a-call">schedule a call</Button>
    </div>
  );
}
