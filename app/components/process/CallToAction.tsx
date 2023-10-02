import { cormorant, montserrat } from "@/app/utils/font";
import { infoCardContent } from "@/app/data/ProcessPageData";
import InfoCard from "../InfoCard";
import Button from "../Button";

export default function CallToAction(): JSX.Element {
  return (
    <section
      className={`px-5 sm:px-10 lg:px-20 py-16 lg:py-20 ${cormorant.className}`}
    >
      <div className="text-center">
        <div className="mb-10">
          <p
            className={`${montserrat.className} text-yinmn-blue font-semibold text-[18px] leading-[25px] tracking-widest mb-2`}
          >
            READY TO GO?
          </p>
          <h3 className="font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] tracking-wider">
            Getting Started Is Simple
          </h3>
        </div>
        <ul className="grid sm:grid-cols-3 gap-5 mb-16">
          {infoCardContent.map(({ ...props }, index: number) => (
            <li key={index} className="flex flex-col items-center">
              <InfoCard {...props} />
            </li>
          ))}
        </ul>
        <p className="font-medium text-[28px] leading-[31px] tracking-wide text-center mb-12">
          Your Message Deserves to be Heard!
        </p>
        <div>
          <Button url="schedule-a-call" title="schedule a call" />
        </div>
      </div>
    </section>
  );
}
