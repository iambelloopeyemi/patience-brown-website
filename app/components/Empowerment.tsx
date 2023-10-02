import Image from "next/image";
import { cormorant } from "@/app/utils/font";

interface EmpowermentProps {
  heading: string;
  message: string;
}

export default function Empowerment({
  heading,
  message,
}: EmpowermentProps): JSX.Element {
  return (
    <section className="bg-seasalt px-5 sm:px-10 lg:px-20 py-16 lg:py-20 flex justify-center items-center">
      <div className="flex flex-col items-center gap-10">
        <div className="flex justify-center items-center">
          <Image
            src="/books-icon.webp"
            alt="books icon"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div
          className={`${cormorant.className} font-medium text-center flex flex-col items-center gap-2`}
        >
          <p className="text-yinmn-blue text-[32px] leading-[42px]">
            {heading}
          </p>
          <p className="text-[22px] leading-[26px]">{message}</p>
        </div>
      </div>
    </section>
  );
}
