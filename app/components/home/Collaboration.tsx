import Image from "next/image";
import { cormorant, montserrat } from "@/app/utils/font";
import { CollaborationListItem as props } from "@/app/data/HomePageData";
import Button from "../Button";

export default function Collaboration(): JSX.Element {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <Image
            src="/patience-brown-2.jpg"
            alt="picture of patience brown"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h4
            className={`${cormorant.className} font-medium text-[48px] leading-[58px] max-lg:text-center mb-10`}
          >
            Let me ensure you share that message
          </h4>
          <ul className="list-disc list-inside mb-12">
            <span
              className={`block ${montserrat.className} text-yinmn-blue font-semibold uppercase text-[18px] leading-[25px] max-lg:text-center  mb-2`}
            >
              together, we will:
            </span>
            {props.map((prop, index: number) => (
              <li
                key={index}
                className={`${cormorant.className} font-medium text-[22px] leading-[29px] max-lg:text-center mb-1`}
              >
                {prop}
              </li>
            ))}
          </ul>
          <div className="flex max-lg:justify-center">
            <Button url="/about" title="meet patience brown" />
          </div>
        </div>
      </div>
    </section>
  );
}
