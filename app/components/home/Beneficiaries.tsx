import { cormorant } from "@/app/utils/font";
import { BeneficiaryInfoCard as props } from "@/app/data/HomePageData";
import InfoCard from "../InfoCard";

export default function Beneficiaries(): JSX.Element {
  return (
    <section
      className={`bg-seasalt px-5 sm:px-10 lg:px-20 py-16 ${cormorant.className} text-center`}
    >
      <h3 className="text-[34px] leading-[34px] mb-[33px]">
        Who can benefit from a ghostwriter and book editor?
      </h3>
      <ul className="grid lg:grid-cols-3 gap-[72px]">
        {props.map(({ ...props }, index: number) => (
          <li key={index} className="flex flex-col items-center">
            <InfoCard {...props} />
          </li>
        ))}
      </ul>
    </section>
  );
}
