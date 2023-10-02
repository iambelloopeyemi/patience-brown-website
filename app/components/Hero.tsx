import { cormorant } from "@/app/utils/font";

interface HeroProps {
  heading: string;
  message: string;
}

export default function Hero({ heading, message }: HeroProps): JSX.Element {
  return (
    <section className="bg-yinmn-blue px-16 sm:px-32 lg:px-60 py-16 lg:py-20 flex justify-center items-center">
      <div
        className={`${cormorant.className} text-white font-medium text-center flex flex-col items-center gap-4`}
      >
        <h1 className="text-[32px] lg:text-[48px] leading-[38px] lg:leading-[58px] tracking-wide">
          {heading}
        </h1>
        <p className="text-[26px] leading-[31px] lg:leading-[35px] tracking-wide">
          {message}
        </p>
      </div>
    </section>
  );
}
