import Image from "next/image";
import { cormorant_garamond } from "../../utils/font";
import profilePic from "../../assets/patience-brown-1.jpg";
import Button from "../button";

export default function HeroSection(): JSX.Element {
  return (
    <section className="bg-yinmn-blue grid lg:grid-cols-2">
      <div className="col-span-1 max-lg:order-2 px-5 sm:px-10 py-16 lg:py-24">
        <article
          className={`${cormorant_garamond.className} text-white flex flex-col justify-center gap-10`}
        >
          <h1 className="font-medium text-5xl max-lg:text-center">
            It&apos;s time you finally authored that book
          </h1>
          <h2 className="font-medium text-3xl max-lg:text-center">
            Work with Brown Patience to write your book, and get your message
            into the world
          </h2>
          <div className="flex max-lg:justify-center">
            <Button url="schedule-a-call" title="schedule a call" />
          </div>
        </article>
      </div>
      <div className="col-span-1 max-lg:order-1 relative">
        <div className="aspect-video">
          <Image
            src={profilePic}
            alt="patience brown picture"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
