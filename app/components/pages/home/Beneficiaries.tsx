import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionContentWrapper from "@/app/components/ui/SectionContentWrapper";
import InfoCard from "@/app/components/ui/InfoCard";
import { beneficiaries as data } from "@/app/data";

export default async function Beneficiaries() {
  return (
    <SectionContainer className="bg-seasalt">
      <SectionContentWrapper className="text-center">
        <h2 className="text-[34px] leading-[34px] mb-[33px]">
          Who can benefit from a ghostwriter and book editor?
        </h2>
      </SectionContentWrapper>
      {data && <InfoCard data={data} className="text-center" />}
    </SectionContainer>
  );
}
