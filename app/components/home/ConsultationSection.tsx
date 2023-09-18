import Image from "next/image";
import { cormorant_garamond, montserrat } from "@/app/utils/font";
import Button from "../ButtonComponent";

export default function ConsultationSection(): JSX.Element {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h5
            className={`${cormorant_garamond.className} font-medium text-5xl max-lg:text-center mb-10`}
          >
            Get Started Right Now
          </h5>
          <div className="mb-12">
            <h5
              className={`${montserrat.className} text-yinmn-blue font-semibold text-lg max-lg:text-center uppercase mb-2`}
            >
              let&apos;s talk
            </h5>
            <p
              className={`${cormorant_garamond.className} font-medium text-2xl max-lg:text-center mb-2`}
            >
              Tell me about the book you&apos;ve been desiring to write, the
              message you&apos;ve been yearning to share. Tell me where you are
              and I&apos;ll walk with you.
            </p>
            <p
              className={`${cormorant_garamond.className} font-medium text-2xl max-lg:text-center`}
            >
              Let me ensure you share that message!
            </p>
          </div>
          <div className="flex max-lg:justify-center">
            <Button url="/schedule-a-call" title="sechedule a call" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/patience-brown-3.jpg"
            alt="picture of patience brown"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
