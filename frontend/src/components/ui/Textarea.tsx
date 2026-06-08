import { forwardRef, TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return (
    <textarea
      className="bg-zinc-800 px-3 py-2 block my-2 w-full rounded-xl"
      ref={ref}
      {...props}
    >
      {props.children}
    </textarea>
  );
});

export default Textarea;
