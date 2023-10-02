import Image from "next/image";
import { cormorant } from "@/app/utils/font";

export default function MeetPatience(): JSX.Element {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div className="grid sm:grid-cols-2 gap-10 sm:gap-8">
        <article
          className={`${cormorant.className} font-medium flex flex-col justify-center gap-5`}
        >
          <h2 className="text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] tracking-wide">
            Meet Patience
          </h2>
          <div className="text-[22px] leading-[23px] flex flex-col gap-4">
            <p>
              Patience believes in the power of the written word and loves
              guiding authors through the book-writing process.
            </p>
            <p>
              She formerly served as a humanitarian aid worker in Haiti,
              Tanzania, and Zambia. Now she brings that same level of dedication
              and focus to each book that she works on.
            </p>
            <p>
              Writing and service are close to her heart. She combines these
              passions in her leadership position with the Divine Mercy Centre,
              a ministry that feeds and houses the elderly in Tanzania.
            </p>
            <p>Patience and her husband live in Houston, Texas.</p>
          </div>
        </article>
        <div>
          <Image
            src="/patience-brown-2.jpg"
            alt="picture of patience brown"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
