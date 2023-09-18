import Button from "../button";
import { Process as process } from "../../data/process";
import Image from "next/image";
import { cormorant_garamond, montserrat } from "@/app/utils/font";

export default function SectionThree() {
  return (
    <section className="bg-seasalt px-4 sm:px-10 lg:px-20 py-16">
      <div className="flex flex-col items-center">
        <header className="text-center flex flex-col items-center gap-4 mb-10">
          <p
            className={`${montserrat.className} font-semibold text-lg text-yinmn-blue uppercase`}
          >
            the 3-step process to:
          </p>
          <h4
            className={`${cormorant_garamond.className} font-medium text-black text-5xl`}
          >
            Get Your Book, Your Voice, Your message, Out There
          </h4>
        </header>
        <ul className="grid lg:grid-cols-3 gap-3 mb-10">
          {process.map(({ icon, heading, content }, index: number) => (
            <li key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image src={icon} alt="step 1 icon" width={82} height={83} />
              </div>
              <div
                className={`${montserrat.className} font-semibold text-lg text-yinmn-blue uppercase mb-4`}
              >
                {heading}
              </div>
              <div className="flex flex-col items-center gap-4">{content}</div>
            </li>
          ))}
        </ul>
        <div>
          <Button url="/process" title="learn more" />
        </div>
      </div>
    </section>
  );
}
