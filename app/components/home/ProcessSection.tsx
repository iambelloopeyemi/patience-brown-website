import Image from "next/image";
import { cormorant_garamond, montserrat } from "@/app/utils/font";
import { processes } from "@/app/data/Processes";
import Button from "../ButtonComponent";

export default function ProcessSection(): JSX.Element {
  return (
    <section className="bg-seasalt px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div className="flex flex-col items-center">
        <header className="flex flex-col items-center gap-4 text-center mb-12">
          <p
            className={`${montserrat.className} text-yinmn-blue font-semibold text-lg uppercase`}
          >
            the 3-step process to:
          </p>
          <h4
            className={`${cormorant_garamond.className} text-black font-medium text-5xl`}
          >
            Get Your Book, Your Voice, Your message, Out There
          </h4>
        </header>
        <ul className="grid lg:grid-cols-3 gap-5 mb-12">
          {processes.map(({ icon, heading, content }, index: number) => (
            <li key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image src={icon} alt="step icon" width={80} height={80} />
              </div>
              <div
                className={`${montserrat.className} text-yinmn-blue font-semibold text-lg uppercase mb-3`}
              >
                {heading}
              </div>
              <div className="flex flex-col items-center gap-2">{content}</div>
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
