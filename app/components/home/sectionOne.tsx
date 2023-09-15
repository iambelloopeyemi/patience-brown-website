import { cormorant_garamond } from "../../utils/font";
import Beneficiaries from "./beneficiaries";

export default function SectionOne(): JSX.Element {
  return (
    <section
      className={`${cormorant_garamond.className} bg-seasalt px-4 sm:px-8 py-16`}
    >
      <article className="flex flex-col items-center gap-6 text-center font-medium">
        <div className="text-5xl text-black">
          Get your message to the people in need of it
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-2xl">
            Many visionaries have a message for their world, books they&apos;ve
            been planning to write, but they got stuck, couldn&apos;t find the
            time to continue, and began to wonder if they&apos;d ever share that
            message
          </p>
          <p className="text-2xl">
            But with a ghostwriter to help write your book, your vision stays
            alive.
          </p>
        </div>
      </article>
      <hr className="my-14" />
      <article className="flex flex-col items-center gap-12 text-center font-medium">
        <div className="text-4xl">
          Who can benefit from a ghostwriter and book editor?
        </div>
        <ul className="grid sm:grid-cols-3 gap-3">
          <Beneficiaries />
        </ul>
      </article>
    </section>
  );
}
