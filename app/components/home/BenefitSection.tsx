import { cormorant } from "@/app/utils/font";
import { BeneficiaryContent } from "@/app/data/BeneficiariesComponentData";
import BeneficiariesCardComponent from "../BeneficiariesCardComponent";

export default function BenefitSection(): JSX.Element {
  return (
    <section
      className={`bg-seasalt px-5 sm:px-10 lg:px-20 py-16 ${cormorant.className}`}
    >
      <div className="text-center">
        <h2 className="text-black text-[48px] leading-[58px] mb-[23px]">
          Get your message to the people in need of it
        </h2>
        <p className="text-[28px] leading-[39px] mb-2">
          Many visionaries have a message for their world, books they&apos;ve
          been planning to write, but they got stuck, couldn&apos;t find the
          time to continue, and began to wonder if they&apos;d ever share that
          message
        </p>
        <p className="text-[28px] leading-[39px]">
          But with a ghostwriter to help write your book, your vision stays
          alive.
        </p>
      </div>
      <hr className="mt-[59px] mb-[52px]" />
      <div className="text-center">
        <h3 className="text-[34px] leading-[34px] mb-[33px]">
          Who can benefit from a ghostwriter and book editor?
        </h3>
        <ul className="grid lg:grid-cols-3 gap-[72px]">
          {BeneficiaryContent.map(
            ({ src, alt, heading, message }, index: number) => (
              <li key={index} className="flex flex-col items-center">
                <BeneficiariesCardComponent
                  src={src}
                  alt={alt}
                  heading={heading}
                  message={message}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
