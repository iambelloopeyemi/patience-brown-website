import Image from "next/image";
import patienceBrown from "@/app/assets/patience-brown-1.jpg";

export default function HeroImage() {
  return (
    <div className="w-auto max-h-[500px] relative sm:order-2 max-sm:order-1">
      <Image
        src={patienceBrown}
        alt="patience brown picture"
        priority={true}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
