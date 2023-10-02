import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { cormorant, montserrat } from "@/app/utils/font";
import { CollaborationListItem as props } from "@/app/data/HomePageData";
import Button from "../Button";

export default function Collaboration(): JSX.Element {
  return (
    <section className={`px-5 sm:px-10 lg:px-20 py-16 ${cormorant.className}`}>
      <div className="grid sm:grid-cols-2 gap-10 sm:gap-8">
        <div className="flex justify-center items-center">
          <Image
            src="/patience-brown-2.jpg"
            alt="picture of patience brown"
            width={500}
            height={500}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[58px] mb-10">
            Let me ensure you share that message
          </h4>
          <p className="text-yinmn-blue font-semibold uppercase text-[18px] leading-[25px] mb-2">
            together, we will:
          </p>
          <ul className="mb-12">
            {props.map((prop, index: number) => (
              <li key={index} className="flex items-baseline gap-2 mb-1">
                <span className="block text-[8px]">
                  <FaCircle />
                </span>
                <span className="block font-medium text-[22px] leading-[29px]">
                  {prop}
                </span>
              </li>
            ))}
          </ul>
          <div>
            <Button url="/about" title="meet patience brown" />
          </div>
        </div>
      </div>
    </section>
  );
}
