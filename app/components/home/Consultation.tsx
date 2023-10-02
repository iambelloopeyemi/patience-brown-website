import Image from "next/image";
import { cormorant, montserrat } from "@/app/utils/font";
import Button from "../Button";

export default function Consultation(): JSX.Element {
  return (
    <section
      className={`px-5 sm:px-10 lg:px-20 py-16 lg:py-20 ${cormorant.className}`}
    >
      <div className="grid sm:grid-cols-2 gap-10 sm:gap-8">
        <div className="flex flex-col justify-center">
          <h5 className="font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] mb-10">
            Get Started Right Now
          </h5>
          <div className="mb-12">
            <h5
              className={`${montserrat.className} text-yinmn-blue font-semibold uppercase text-[18px] leading-[22px] mb-2`}
            >
              let&apos;s talk
            </h5>
            <p className="font-medium text-[22px] leading-[28px] mb-2">
              Tell me about the book you&apos;ve been desiring to write, the
              message you&apos;ve been yearning to share. Tell me where you are
              and I&apos;ll walk with you.
            </p>
            <p className="font-medium text-[22px] leading-[28px]">
              Let me ensure you share that message!
            </p>
          </div>
          <div>
            <Button url="/schedule-a-call" title="sechedule a call" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/patience-brown-3.jpg"
            alt="picture of patience brown"
            width={500}
            height={500}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
