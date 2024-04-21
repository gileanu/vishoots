import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
  title?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  title,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-md flex items-center justify-center bg-white dark:bg-background border shadow-md p-2 transition",
        className
      )}
    >
      {icon}
      <p className="hover:underline">{title}</p>
    </button>
  );
};

export default IconButton;
