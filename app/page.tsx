import Hero from "./components/home/hero";
import SectionOne from "./components/home/sectionOne";
import SectionTwo from "./components/home/sectionTwo";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <SectionOne />
      <SectionTwo />
    </>
  );
}
