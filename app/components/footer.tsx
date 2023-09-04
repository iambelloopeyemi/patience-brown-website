import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer>
      <div>
        <div>
          <Image src="" alt="" />
        </div>
        <ul>
          <li>
            <Link href={`#`}>about</Link>
          </li>
          <li>
            <Link href={`#`}>process</Link>
          </li>
          <li>
            <Link href={`#`}>schedule a call</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={`#`}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={`#`}>Terms</Link>
          </li>
        </ul>
        <p>
          <strong>patience brown © {currentYear}</strong>
        </p>
      </div>
    </footer>
  );
}
