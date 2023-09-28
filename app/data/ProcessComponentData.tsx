export const processOne: string[] = [
  "Define the Target Audience",
  "Cast Your Vision",
  "Market Research to Determine Your Unique Selling Point",
  "Clarify Your Voice",
  "Create a Chapter-by-Chapter Outline",
];

export const processTwo: string[] = [
  "Weekly Zoom meetings",
  "Working collaboratively on Google Docs",
  "Making steady progress together",
];

export const processThree: string[] = [
  "Our editor provides a critical and constructive 3rd set of eyes.",
  "She reads through your book three times, assessing the overall flow and addressing any areas that need clarification.",
  "She rigorously reviews the spelling, grammar, and punctuation.",
  "She will provide insight and suggestions on how to further improve the book.",
];

interface infoCardContentProps {
  src: string;
  alt: string;
  heading: string;
  message: string;
}

export const infoCardContent: infoCardContentProps[] = [
  {
    src: `/schedule-icon.webp`,
    alt: `schedule icon`,
    heading: `SCHEDULE A CALL`,
    message: `I would love to hear more about your book.`,
  },
  {
    src: `/collab-icon.webp`,
    alt: `collab icon`,
    heading: `COLLABORATE WEEKLY`,
    message: `Let's write your book together!`,
  },
  {
    src: `/finishbook-icon.webp`,
    alt: `finishbook icon`,
    heading: `FINISH YOUR BOOK`,
    message: `Imagine how many people your book can impact.`,
  },
];
