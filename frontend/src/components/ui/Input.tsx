import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      type="text"
      className="bg-zinc-800 px-3 py-2 block my-2 w-full rounded-xl"
      ref={ref}
      {...props}
    />
  );
});

export default Input;