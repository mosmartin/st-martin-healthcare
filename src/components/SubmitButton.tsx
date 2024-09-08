import Image from "next/image";
import { Button } from "./ui/button";

type SubmitButtonProps = {
  children: React.ReactNode;
  isLoading: boolean;
  className?: string;
};

export default function SubmitButton({
  children,
  isLoading,
  className,
}: Readonly<SubmitButtonProps>) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loading icon"
            width={24}
            height={24}
            className="animate-spin"
          />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
