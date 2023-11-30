import React from "react";

interface checkBoxProps {
  className?: React.ReactNode;
  checked?: boolean;
  onChange: () => void;
}

export const Checkbox = ({ className, checked, onChange }: checkBoxProps) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`w-4 h-4 ${className}`}
    />
  );
};
