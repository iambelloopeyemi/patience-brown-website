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
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <article className="flex flex-col justify-center">
          <h4
            className={`${cormorant.className} font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] mb-10`}
          >
            Let me ensure you share that message
          </h4>
          <ul className="list-disc list-inside mb-12">
            <span
              className={`block ${montserrat.className} text-yinmn-blue font-semibold uppercase text-[18px] leading-[25px] mb-2`}
            >
              together, we will:
            </span>
            {props.map((prop, index: number) => (
              <li
                key={index}
                className={`${cormorant.className} font-medium text-[22px] leading-[29px] mb-1`}
              >
                {prop}
              </li>
            ))}
          </ul>
          <div>
            <Button url="/about" title="meet patience brown" />
          </div>
        </article>
      </div>
    </section>
  );
}
