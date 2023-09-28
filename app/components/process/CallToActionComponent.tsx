import { infoCardContent } from "@/app/data/ProcessComponentData";
import InfoCardComponent from "../InfoCardComponent";
import Button from "../ButtonComponent";
import { cormorant, montserrat } from "@/app/utils/font";

export default function CallToActionComponent(): JSX.Element {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div className="flex flex-col items-center">
        <div className="mb-10">
          <p
            className={`${montserrat.className} text-yinmn-blue font-semibold text-[18px] leading-[25px] tracking-widest text-center mb-2`}
          >
            READY TO GO?
          </p>
          <h3
            className={`${cormorant.className} font-medium text-[48px] leading-[58px] tracking-wider text-center`}
          >
            Getting Started Is Simple
          </h3>
        </div>
        <ul className="grid lg:grid-cols-3 gap-5 mb-16">
          {infoCardContent.map(
            ({ src, alt, heading, message }, index: number) => (
              <li key={index} className="flex flex-col items-center">
                <InfoCardComponent
                  src={src}
                  alt={alt}
                  heading={heading}
                  message={message}
                />
              </li>
            )
          )}
        </ul>
        <p
          className={`${cormorant.className} font-medium text-[28px] leading-[31px] tracking-wide text-center mb-12`}
        >
          Your Message Deserves to be Heard!
        </p>
        <div>
          <Button url={`schedule-a-call`} title={`schedule a call`} />
        </div>
      </div>
    </section>
  );
}
