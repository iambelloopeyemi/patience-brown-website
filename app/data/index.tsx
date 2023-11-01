import type { ReactNode } from "react";
import type { CardProps } from "@/app/libs/types";
import type { testimonialsProps } from "@/app/libs/types";

// ui
export const testimonials: testimonialsProps[] = [
  {
    quote: `Working with Patience was a joy! I loved how she guided me through the process and made sure we touched base every week. 
      I felt she captured my voice and message so well. I love how simple and clear her process was for getting my book finally finished.
      Thank you!!`,
    author: "Opeyemi Bello",
  },
  {
    quote: `Another testimonial goes here.`,
    author: "Author 2",
  },
  {
    quote: `And one more testimonial here.`,
    author: "Author 3",
  },
];

// home page
export const beneficiaries: CardProps[] = [
  {
    src: "/preacher-icon.webp",
    alt: "preacher icon",
    width: 128,
    height: 128,
    heading: "professionals & speakers",
    message:
      "Make your powerful speeches and wealth of experience into a life changing book that further testifies of your authority in your field, and reaches even more people",
  },
  {
    src: "/missionaries-icon.webp",
    alt: "missionaries icon",
    width: 128,
    height: 128,
    heading: "visionaries",
    message:
      "Sell your great vision to those whose support you need. Sell it to those who will be willing to run with it",
  },
  {
    src: "/volunteer-icon.webp",
    alt: "volunteer icon",
    width: 128,
    height: 128,
    heading: "change agents",
    message:
      "Turn your burning message into a compelling call to action. Get support for your cause",
  },
];

export const process: CardProps[] = [
  {
    src: "/step-1.webp",
    alt: "step 1 icon",
    width: 80,
    height: 80,
    heading: "meeting you & the vision",
    message: (
      <>
        <ProcessContent>
          This is the very first interaction where you and I get to talk. You
          send me your book, tell me what you want to write, and share the
          vision with me.
        </ProcessContent>
      </>
    ),
  },
  {
    src: "/step-2.webp",
    alt: "step 2 icon",
    width: 80,
    height: 80,
    heading: "finding clarity",
    message: (
      <>
        <ProcessContent>
          I&apos;ll ask you questions as I go through your book and as you share
          your vision with me so we can find clarity, define your audience, and
          see if there is a need to go back to the drawing board.
        </ProcessContent>
        <ProcessContent>
          A clarity session may have you noting, just like this dear client,
          “Thank you for the correction. Everybody has been telling me how
          amazing it (the book) is. No one pointed out these to me. I listened
          to your voice note thrice, it makes sense to me now. I knew something
          was missing.”
        </ProcessContent>
      </>
    ),
  },
  {
    src: "/step-3.webp",
    alt: "step 3 icon",
    width: 80,
    height: 80,
    heading: "writing & finishing",
    message: (
      <>
        <ProcessContent>
          This is where you get to watch your vision come alive, page by page,
          sentence by sentence. The thing you&apos;ve been wanting to write, you
          get to see it written.
        </ProcessContent>
        <ProcessContent>
          After the work has been completed, your book, or any other written
          project, is fully yours. You and this ghostwriter will collaborate
          again—on your next project!
        </ProcessContent>
      </>
    ),
  },
];

function ProcessContent({ children }: { children: ReactNode }) {
  return <p className="font-medium text-xl mb-1">{children}</p>;
}

// process page
export const StepOne: string[] = [
  "Define the Target Audience",
  "Cast Your Vision",
  "Market Research to Determine Your Unique Selling Point",
  "Clarify Your Voice",
  "Create a Chapter-by-Chapter Outline",
];

export const StepTwo: string[] = [
  "Weekly Zoom meetings",
  "Working collaboratively on Google Docs",
  "Making steady progress together",
];

export const StepThree: string[] = [
  "Our editor provides a critical and constructive 3rd set of eyes.",
  "She reads through your book three times, assessing the overall flow and addressing any areas that need clarification.",
  "She rigorously reviews the spelling, grammar, and punctuation.",
  "She will provide insight and suggestions on how to further improve the book.",
];

export const callToActionItems: CardProps[] = [
  {
    src: "/schedule-icon.webp",
    alt: "schedule icon",
    width: 80,
    height: 80,
    heading: "SCHEDULE A CALL",
    message: "I would love to hear more about your book.",
  },
  {
    src: "/collab-icon.webp",
    alt: "collab icon",
    width: 80,
    height: 80,
    heading: "COLLABORATE WEEKLY",
    message: "Let's write your book together!",
  },
  {
    src: "/finishbook-icon.webp",
    alt: "finishbook icon",
    width: 80,
    height: 80,
    heading: "FINISH YOUR BOOK",
    message: "Imagine how many people your book can impact.",
  },
];
