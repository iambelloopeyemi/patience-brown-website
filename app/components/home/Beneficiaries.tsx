import type { InfoCardProps } from "@/app/libs/types";
import SectionContainer from "@/app/components/SectionContainer";
import InfoCard from "@/app/components/InfoCard";

async function fetchBeneficiaries(): Promise<InfoCardProps[]> {
  const response = await fetch("http://localhost:3000/api/beneficiaries", {
    next: { revalidate: 100 },
  });
  const beneficiaries: Promise<InfoCardProps[]> = response.json();
  return beneficiaries;
}

export default async function Beneficiaries() {
  const data: InfoCardProps[] = await fetchBeneficiaries();

  return (
    <SectionContainer sectionClassName="bg-seasalt text-center">
      <h2 className="text-[34px] leading-[34px] mb-[33px]">
        Who can benefit from a ghostwriter and book editor?
      </h2>
      {data && <InfoCard data={data} />}
    </SectionContainer>
  );
}
