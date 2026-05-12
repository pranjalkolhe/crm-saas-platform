import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
  };

  return (
    <button
      className={`flex h-12 items-center justify-center rounded-2xl px-5 font-semibold transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
