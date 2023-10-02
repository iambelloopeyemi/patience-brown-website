import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { cormorant, montserrat } from "@/app/utils/font";

export default function PreviousWork(): JSX.Element {
  const books: string[] = ["Book 1", "Book 2", "Book 3"];

  return (
    <section
      className={`px-5 sm:px-10 lg:px-20 py-16 lg:py-20 ${cormorant.className}`}
    >
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="font-medium flex flex-col justify-center gap-5">
          <h3 className="text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] tracking-wide">
            Personal Writing
          </h3>
          <div className="text-[22px] leading-[23px] flex flex-col gap-4">
            <p>
              When she&apos;s not ghostwriting or book coaching, Alyson
              publishes faith-based articles under her own name.
            </p>
            <p>Patience can also offer ghostwriting samples on request.</p>
          </div>
        </div>
        <div>
          <h3
            className={`${montserrat.className} font-bold text-[18px] leading-[18px] mb-5`}
          >
            PREVIOUS WORK
          </h3>
          <ul className="font-medium text-[22px] leading-[29px]">
            {books.map((book, index: number) => (
              <li key={index} className="flex items-baseline gap-2 mb-1">
                <span className="block text-[8px]">
                  <FaCircle />
                </span>
                <Link
                  href={`#`}
                  target="_blank"
                  className="block text-celestial-blue"
                >
                  {book}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
