import Image from "next/image";
import { cormorant } from "@/app/utils/font";

interface EmpowermentComponentProps {
  heading: string;
  message: string;
}

export default function EmpowermentComponent({
  heading,
  message,
}: EmpowermentComponentProps): JSX.Element {
  return (
    <section className="bg-seasalt px-5 sm:px-10 lg:px-20 py-16 lg:py-20 flex justify-center items-center">
      <div className="flex flex-col items-center gap-10">
        <div>
          <Image
            src="/books-icon.webp"
            alt="books icon"
            width={60}
            height={60}
          />
        </div>
        <article
          className={`${cormorant.className} font-medium text-center flex flex-col items-center gap-2`}
        >
          <p className="text-yinmn-blue text-[44px] leading-[57px]">
            {heading}
          </p>
          <p className="text-[22px] leading-[26px]">{message}</p>
        </article>
      </div>
    </section>
  );
}
