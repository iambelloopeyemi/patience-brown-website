import { cormorant } from "@/app/utils/font";
import Image from "next/image";

export default function FeaturedTestimonial(): JSX.Element {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Image
          src="/patience-brown-1.jpg"
          alt="picture of patience brown"
          width={500}
          height={500}
        />
      </div>
      <blockquote
        className={`${cormorant.className} font-medium italic text-[22px] sm:text-[24px] leading-[29px] sm:leading-[32px]`}
      >
        “Simply put Alyson is the best of the best… I really enjoyed working
        with her. I will work with her again. She cares about what you are
        doing. She takes ownership in it. And she is willing to listen and make
        adjustments. She is a very kind person that is open for feedback. Hire
        her! You won&apos;t be disappointed.” - Dave P.
      </blockquote>
    </div>
  );
}
