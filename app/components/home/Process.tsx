import { cormorant, montserrat } from "@/app/utils/font";
import { ProcessInfoCard as props } from "@/app/data/HomePageData";
import InfoCard from "../InfoCard";
import Button from "../Button";

export default function Process(): JSX.Element {
  return (
    <section className="bg-seasalt px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <p
            className={`${montserrat.className} text-yinmn-blue font-semibold text-lg uppercase`}
          >
            the 3-step process to:
          </p>
          <h4
            className={`${cormorant.className} text-black font-medium text-5xl`}
          >
            Get Your Book, Your Voice, Your message, Out There
          </h4>
        </div>
        <ul className="grid lg:grid-cols-3 gap-[72px] mb-12">
          {props.map(({ ...props }, index: number) => (
            <li key={index} className="flex flex-col items-center">
              <InfoCard {...props} />
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
