import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`h-10 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all focus:border-blue-500 ${className}`}
      {...props}
    />
  );
};

export default Input;
