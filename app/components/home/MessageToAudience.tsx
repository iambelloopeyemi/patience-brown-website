import { cormorant } from "@/app/utils/font";

export default function MessageToAudience(): JSX.Element {
  return (
    <section
      className={`bg-seasalt px-5 sm:px-10 lg:px-20 py-16 ${cormorant.className} text-center`}
    >
      <h2 className="text-black text-[48px] leading-[58px] mb-6">
        Get your message to the people in need of it
      </h2>
      <p className="text-[28px] leading-[39px] mb-2">
        Many visionaries have a message for their world, books they&apos;ve been
        planning to write, but they got stuck, couldn&apos;t find the time to
        continue, and began to wonder if they&apos;d ever share that message
      </p>
      <p className="text-[28px] leading-[39px]">
        But with a ghostwriter to help write your book, your vision stays alive.
      </p>
    </section>
  );
}
