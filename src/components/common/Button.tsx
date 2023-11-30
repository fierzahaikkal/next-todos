import React, { FC, HTMLAttributes, MouseEventHandler } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`flex justify-center px-6 py-2 text-white rounded bg-medium-purple-500 hover:bg-medium-purple-700 active:bg-medium-purple-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
