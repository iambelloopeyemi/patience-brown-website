import Image from "next/image";
import { cormorant, montserrat } from "@/app/utils/font";
import Button from "../ButtonComponent";

interface ListItemProps {
  text: string;
}

const ListItem = ({ text }: ListItemProps): JSX.Element => (
  <li
    className={`${cormorant.className} font-medium text-xl max-lg:text-center mb-1`}
  >
    {text}
  </li>
);

export default function SectionTwo(): JSX.Element {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
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
          <header className="max-lg:text-center mb-10">
            <h4 className={`${cormorant.className} font-medium text-5xl`}>
              Let me ensure you share that message
            </h4>
          </header>
          <ul className="list-disc list-inside mb-12">
            <span
              className={`block ${montserrat.className} text-yinmn-blue font-semibold text-lg max-lg:text-center uppercase mb-2`}
            >
              together, we will:
            </span>
            <ListItem text="Define your audience and clarify your message" />
            <ListItem text="Organize your thoughts into a detailed outline" />
            <ListItem text="Communicate your message so compellingly that it'll bear the fruits you envisioned" />
          </ul>
          <div className="flex max-lg:justify-center">
            <Button url="/about" title="meet patience brown" />
          </div>
        </div>
      </div>
    </section>
  );
}
