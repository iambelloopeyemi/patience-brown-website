import { cormorant_garamond } from "@/app/utils/font";

export default function HeroSection(): JSX.Element {
  return (
    <section className="bg-yinmn-blue px-5 sm:px-10 lg:px-20 py-16 lg:py-20 flex justify-center items-center">
      <div
        className={`${cormorant_garamond.className} text-white font-medium flex flex-col items-center`}
      >
        <h1 className="text-[48px] leading-[58px] tracking-wide">
          Patience Brown
        </h1>
        <p className="text-[26px] leading-[31px] tracking-wide">
          A writer with a passion for helping others.
        </p>
      </div>
    </section>
  );
}
