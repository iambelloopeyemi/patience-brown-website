import { cormorant } from "@/app/utils/font";
import { BeneficiaryContent } from "@/app/data/Beneficiaries";
import Beneficiaries from "../BeneficiariesComponent";

export default function BenefitSection(): JSX.Element {
  return (
    <section className="bg-seasalt px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div className={`${cormorant.className}`}>
        <article className="flex flex-col items-center font-medium text-center">
          <h3 className="text-black text-5xl mb-3">
            Get your message to the people in need of it
          </h3>
          <p className="text-2xl mb-2">
            Many visionaries have a message for their world, books they&apos;ve
            been planning to write, but they got stuck, couldn&apos;t find the
            time to continue, and began to wonder if they&apos;d ever share that
            message
          </p>
          <p className="text-2xl">
            But with a ghostwriter to help write your book, your vision stays
            alive.
          </p>
        </article>
        <hr className="my-12" />
        <article className="flex flex-col items-center font-medium text-center">
          <div className="text-4xl mb-10">
            Who can benefit from a ghostwriter and book editor?
          </div>
          <ul className="grid lg:grid-cols-3 gap-3">
            <Beneficiaries content={BeneficiaryContent} />
          </ul>
        </article>
      </div>
    </section>
  );
}
