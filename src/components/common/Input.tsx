import React from "react";

interface inputProps {
  children?: React.ReactNode;
  placeholder: React.ReactNode;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input = ({
  children,
  placeholder,
  type,
  value,
  onChange,
  onKeyPress,
}: inputProps) => {
  return (
    <input
      className="px-4 py-2 border rounded border-medium-purple-700 text-medium-purple-700 focus:outline-none w-full"
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={`${placeholder}`}
    >
      {children}
    </input>
  );
};

export default Input;
