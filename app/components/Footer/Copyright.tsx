export default function Copyright() {
  const currentYear: number = new Date().getFullYear();

  return (
    <p>
      <strong className="font-light text-[14px] leading-[23px] tracking-tight">
        Patience Brown © {currentYear}
      </strong>
    </p>
  );
}
