import Image from "next/image";
import { cormorant_garamond, montserrat } from "@/app/utils/font";
import Button from "../button";

export default function SectionTwo(): JSX.Element {
  return (
    <section className="px-5 sm:px-10 py-20 border">
      <div className="grid lg:grid-cols-2 gap-10 ">
        <div className="flex justify-center items-center">
          <div className="">
            <Image
              src={`/patience-brown-2.jpg`}
              width={450}
              height={450}
              alt="picture of patience brown"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            <h4
              className={`${cormorant_garamond.className} text-4xl font-medium mb-14`}
            >
              Let me ensure you share that message
            </h4>
            <ul className="list-disc list-inside mb-10">
              <span
                className={`block ${montserrat.className} text-xl font-semibold text-yinmn-blue uppercase mb-5`}
              >
                together, we will:
              </span>
              <li
                className={`${cormorant_garamond.className} text-xl font-medium mb-1`}
              >
                Define your audience and clarify your message
              </li>
              <li
                className={`${cormorant_garamond.className} text-xl font-medium mb-1`}
              >
                Organize your thoughts into a detailed outline
              </li>
              <li
                className={`${cormorant_garamond.className} text-lg font-medium mb-1`}
              >
                Communicate your message so compellingly that it’ll bear the
                fruits you envisioned
              </li>
            </ul>
            <Button url="/about" title="meet patience brown" />
          </div>
        </div>
      </div>
    </section>
  );
}
