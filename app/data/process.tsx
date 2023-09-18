import { ReactNode } from "react";
import { cormorant_garamond } from "@/app/utils/font";

interface ProcessProps {
  icon: string;
  heading: string;
  content: ReactNode;
}

export const Process: ProcessProps[] = [
  {
    icon: "/step-1.webp",
    heading: "meeting you & the vision",
    content: <ContentOne />,
  },
  {
    icon: "/step-2.webp",
    heading: "finding clarity",
    content: <ContentTwo />,
  },
  {
    icon: "/step-3.webp",
    heading: "writing & finishing",
    content: <ContentThree />,
  },
];

export function ContentOne() {
  return (
    <>
      <p
        className={`${cormorant_garamond.className} font-medium text-jet text-xl`}
      >
        This is the very first interaction where you and I get to talk. You send
        me your book, tell me what you want to write, and share the vision with
        me.
      </p>
    </>
  );
}

export function ContentTwo() {
  return (
    <>
      <p
        className={`${cormorant_garamond.className} font-medium text-jet text-xl`}
      >
        I&apos;ll ask you questions as I go through your book and as you share
        your vision with me so we can find clarity, define your audience, and
        see if there is a need to go back to the drawing board.
      </p>
      <p
        className={`${cormorant_garamond.className} font-medium text-jet text-xl`}
      >
        A clarity session may have you noting, just like this dear client,
        “Thank you for the correction. Everybody has been telling me how amazing
        it [the book] is. No one pointed out these to me. I listened to your
        voice note thrice, it makes sense to me now. I knew something was
        missing.”
      </p>
    </>
  );
}

export function ContentThree() {
  return (
    <>
      <p
        className={`${cormorant_garamond.className} font-medium text-jet text-xl`}
      >
        This is where you get to watch your vision come alive, page by page,
        sentence by sentence. The thing you&apos;ve been wanting to write, you
        get to see it written.
      </p>
      <p
        className={`${cormorant_garamond.className} font-medium text-jet text-xl`}
      >
        After the work has been completed, your book, or any other written
        project, is fully yours. You and this ghostwriter will collaborate
        again—on your next project!
      </p>
    </>
  );
}
