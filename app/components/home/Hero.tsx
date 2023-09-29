import Image from "next/image";
import { cormorant } from "../../utils/font";
import Button from "../Button";

export default function Hero(): JSX.Element {
  return (
    <section className="bg-yinmn-blue grid lg:grid-cols-2">
      <article
        className={`col-span-1 max-lg:order-2 px-5 sm:px-10 py-16 ${cormorant.className} text-white flex flex-col justify-center gap-10`}
      >
        <h1 className="font-medium text-[38px] leading-[46px] max-lg:text-center">
          It&apos;s time you finally authored that book
        </h1>
        <p className="font-medium text-[28px] leading-[38px] max-lg:text-center">
          Work with Brown Patience to write your book, and get your message into
          the world
        </p>
        <div className="flex max-lg:justify-center">
          <Button url="schedule-a-call" title="schedule a call" />
        </div>
      </article>
      <div className="col-span-1 max-lg:order-1 relative">
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
