import { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function Label({ children, htmlFor, ...props }: LabelProps) {
  return (
    <label
      className="block text-sm font-medium text-gray-400"
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;