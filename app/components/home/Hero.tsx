import Image from "next/image";
import { cormorant } from "@/app/utils/font";
import Button from "../Button";

export default function Hero(): JSX.Element {
  return (
    <section className="bg-yinmn-blue grid lg:grid-cols-2">
      <article
        className={`col-span-1 px-5 sm:px-10 py-16 lg:py-28 ${cormorant.className} text-white flex flex-col justify-center gap-10`}
      >
        <h1 className="font-medium text-[38px] leading-[46px]">
          It&apos;s time you finally authored that book
        </h1>
        <p className="font-medium text-[28px] leading-[38px]">
          Work with Brown Patience to write your book, and get your message into
          the world
        </p>
        <div>
          <Button url="schedule-a-call" title="schedule a call" />
        </div>
      </article>
      <div className="max-lg:hidden col-span-1 w-auto h-auto relative">
        <Image
          src="/patience-brown-1.jpg"
          alt="patience brown picture"
          sizes="(min-width: 1024px) 50vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}
