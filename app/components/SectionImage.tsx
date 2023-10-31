import Image, { type StaticImageData } from "next/image";

type SectionImageProps = {
  src: StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
};

export default function SectionImage({
  src,
  alt = "picture of patience brown",
  width = 500,
  height = 500,
}: SectionImageProps) {
  return (
    <div className="flex justify-center items-center">
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
