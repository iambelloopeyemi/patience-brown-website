import { cn } from "@/app/utils";

export default function SubmitButton({
  isSubmitting,
}: {
  isSubmitting: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={cn(
        "bg-platinum px-[12px] sm:px-[15px] py-[8px] lg:py-[10px] hover:scale-105 ease-in-out",
        isSubmitting && "opacity-50"
      )}
    >
      <span className="text-jet text-[20px] sm:text-[22px]">Submit</span>
    </button>
  );
}
