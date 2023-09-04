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
            <Link href={`#`}></Link>
          </li>
          <li>
            <Link href={`#`}></Link>
          </li>
          <li>
            <Link href={`#`}></Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={`#`}></Link>
          </li>
          <li>
            <Link href={`#`}></Link>
          </li>
        </ul>
        <p>
          <strong>patience brown © {currentYear}</strong>
        </p>
      </div>
    </footer>
  );
}
