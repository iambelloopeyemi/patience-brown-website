import { laila } from "../utils/font";

export default function Logo(): JSX.Element {
  return (
    <div className="flex items-center gap-1">
      <p className={`${laila.className}`}>
        <strong className="block font-semibold text-4xl">Patience</strong>
        <strong className="block font-semibold text-4xl indent-8">Brown</strong>
      </p>
    </div>
  );
}
