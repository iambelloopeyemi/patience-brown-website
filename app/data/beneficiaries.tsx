import { StaticImageData } from "next/image";
import professionalSpeaker from "../assets/preacher-icon.webp";
import missionaries from "../assets/missionaries-icon.webp";
import volunteer from "../assets/volunteer-icon.webp";

export interface BeneficiaryProps {
  src: StaticImageData;
  alt: string;
  title: string;
  text: string;
}

export const BeneficiaryContent: BeneficiaryProps[] = [
  {
    src: professionalSpeaker,
    alt: "preacher icon",
    title: "professionals & speakers",
    text: "Make your powerful speeches and wealth of experience into a life changing book that further testifies of your authority in your field, and reaches even more people",
  },
  {
    src: missionaries,
    alt: "missionaries icon",
    title: "visionaries",
    text: "Sell your great vision to those whose support you need. Sell it to those who will be willing to run with it",
  },
  {
    src: volunteer,
    alt: "volunteer icon",
    title: "change agents",
    text: "Turn your burning message into a compelling call to action. Get support for your cause",
  },
];
