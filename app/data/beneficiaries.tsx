import { ReactNode } from "react";
import Image from "next/image";
import volunteer from "../assets/volunteer-icon.webp";

export interface BeneficiaryProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export const BeneficiaryContent: BeneficiaryProps[] = [
  {
    icon: (
      <>
        <Image
          src="/preacher-icon.webp"
          alt="preacher icon"
          width={128}
          height={128}
        />
      </>
    ),
    title: "professionals & speakers",
    text: "Make your powerful speeches and wealth of experience into a life changing book that further testifies of your authority in your field, and reaches even more people",
  },
  {
    icon: (
      <>
        <Image
          src="/missionaries-icon.webp"
          alt="missionaries icon"
          width={128}
          height={128}
        />
      </>
    ),
    title: "visionaries",
    text: "Sell your great vision to those whose support you need. Sell it to those who will be willing to run with it",
  },
  {
    icon: (
      <>
        <Image
          src="/volunteer-icon.webp"
          alt="volunteer icon"
          width={128}
          height={128}
        />
      </>
    ),
    title: "change agents",
    text: "Turn your burning message into a compelling call to action. Get support for your cause",
  },
];
