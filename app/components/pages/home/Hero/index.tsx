import HeroContainer from "./HeroContainer";
import HeroMessage from "./HeroMessage";
import HeroImage from "./HeroImage";

export default function Hero(): JSX.Element {
  return (
    <HeroContainer>
      <HeroMessage />
      <HeroImage />
    </HeroContainer>
  );
}
