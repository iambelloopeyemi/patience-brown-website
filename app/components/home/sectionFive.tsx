import Image from "next/image";
import { cormorant_garamond } from "@/app/utils/font";

export default function SectionFive() {
  return (
    <section className="bg-seasalt px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="mb-10">
            <Image
              src="/books-icon.webp"
              alt="books icon"
              width={60}
              height={59}
            />
          </div>
          <div
            className={`${cormorant_garamond.className} text-center font-medium`}
          >
            <p className="text-yinmn-blue text-4xl mb-2">
              Let Nothing Deter You Any Longer
            </p>
            <p className="text-2xl">
              Share the message you know you should. You&apos;ll be saving lives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
