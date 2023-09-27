import { cormorant } from "@/app/utils/font";

interface HeroComponentProps {
  heading: string;
  message: string;
}

export default function HeroComponent({
  heading,
  message,
}: HeroComponentProps): JSX.Element {
  return (
    <section className="bg-yinmn-blue px-5 sm:px-10 lg:px-20 py-16 lg:py-20 flex justify-center items-center">
      <article
        className={`${cormorant.className} text-white font-medium flex flex-col items-center`}
      >
        <h1 className="text-[48px] leading-[58px] tracking-wide">{heading}</h1>
        <p className="text-[26px] leading-[31px] tracking-wide">{message}</p>
      </article>
    </section>
  );
}
