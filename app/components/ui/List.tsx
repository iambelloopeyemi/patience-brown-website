import Link from "next/link";
import { cn } from "@/app/utils";
import { FaCircle } from "react-icons/fa";

type ListProps = {
  className?: string;
  items: string[];
  isPreviousWorks?: boolean;
};

export default function List({
  className = "mb-10",
  items,
  isPreviousWorks,
}: ListProps) {
  return (
    <ul className={cn(className)}>
      {items.map((item, index: number) => (
        <li key={index} className="flex items-baseline gap-4 mb-1.5">
          <span className="block text-[8px]">
            <FaCircle />
          </span>
          {isPreviousWorks ? (
            <Link
              href={`#`}
              target="_blank"
              className="block text-celestial-blue"
            >
              {item}
            </Link>
          ) : (
            <span className="block font-medium text-[22px] leading-[29px]">
              {item}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
