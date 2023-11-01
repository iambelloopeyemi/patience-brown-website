import Image, { type StaticImageData } from "next/image";
import { cn } from "@/app/utils";

type SectionImageProps = {
  src: StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export default function SectionImage({
  src,
  alt = "picture of patience brown",
  width = 500,
  height = 500,
  className = "flex justify-center items-center",
}: SectionImageProps) {
  return (
    <div className={cn(className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-auto h-auto"
      />
    </div>
  );
}
