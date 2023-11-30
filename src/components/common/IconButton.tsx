import React, { MouseEventHandler } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";

interface iconButtonProps {
  className?: React.ReactNode;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({
  className,
  children,
  onClick,
}: iconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex [&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-1 [&>svg]:hover:bg-medium-purple-300 [&>svg]:hover:rounded-full [&>svg]:active:bg-medium-purple-200 ${className}`}
    >
      {children}
    </button>
  );
};
