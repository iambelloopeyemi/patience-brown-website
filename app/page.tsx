import Image from "next/image";
import { cormorant_garamond } from "./utils/font";
import profilePic from "./assets/profile-picture-1.jpg";
import Button from "./components/button";

export default function Home(): JSX.Element {
  return (
    <section className="grid lg:grid-cols-2 bg-yinmn-blue">
      <div className="col-span-1 max-lg:order-2 flex justify-center items-center px-4 sm:px-8 lg:px-10 py-16 lg:py-20">
        <article
          className={`${cormorant_garamond.className} text-white flex flex-col gap-10`}
        >
          <h1 className="text-4xl sm:text-5xl font-medium">
            It&apos;s time you finally authored that book
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium">
            Work with Brown Patience to write your book, and get your message
            into the world
          </h2>
          <Button url="schedule-a-call" title="schedule a call" />
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
