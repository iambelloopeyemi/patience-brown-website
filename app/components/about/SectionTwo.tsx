import { cormorant, montserrat } from "@/app/utils/font";
import Link from "next/link";

export default function SectionTwo() {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div
          className={`${cormorant.className} font-medium flex flex-col justify-center gap-5`}
        >
          <h3 className="text-[48px] leading-[58px] tracking-wide">
            Personal Writing
          </h3>
          <p className="text-[22px] leading-[23px]">
            When she&apos;s not ghostwriting or book coaching, Alyson publishes
            faith-based articles under her own name.
          </p>
          <p className="text-[22px] leading-[23px]">
            Patience can also offer ghostwriting samples on request.
          </p>
        </div>
        <div>
          <h3
            className={`${montserrat.className} font-bold text-[18px] leading-[18px] mb-5`}
          >
            PREVIOUS WORK
          </h3>
          <ul
            className={`${cormorant.className} font-medium text-[22px] leading-[29px] list-disc list-inside`}
          >
            <li>
              <Link href={`#`} target="_blank" className="text-celestial-blue">
                Book 1
              </Link>
            </li>
            <li>
              <Link href={`#`} target="_blank" className="text-celestial-blue">
                Book 2
              </Link>
            </li>
            <li>
              <Link href={`#`} target="_blank" className="text-celestial-blue">
                Book 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
