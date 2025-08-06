import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "success" | "danger";
};

function Button({ variant, ...props }: ButtonProps) {
  const base =
    "font-bold text-black py-1 px-3 min-w-10 min-h-10 bg-[#8e8e8e] shadow-md shadow-gray-900 " +
    "hover:bg-orange-400 hover:shadow-orange-400 hover:shadow-sm font-black text-lg text-center border-2 " +
    "border-[#515051] rounded-xs border-t-[#b1b0b1] hover:border-orange-500 hover:border-t-orange-300";
  const variants: Record<string, string> = {
    success:
      "font-bold text-black py-1 px-3 min-w-10 min-h-10 bg-[#5eb663] shadow-md shadow-gray-900 hover:bg-green-300 hover:shadow-green-300" +
      "hover:shadow-sm font-black text-lg text-center border-2 border-green-900 border-t-green-300 rounded-xs hover:border-green-400 hover:border-t-green-200",
    danger:
      "font-bold text-black py-1 px-3 min-w-10 min-h-10 bg-red-500 shadow-md shadow-gray-900 hover:bg-red-400 hover:shadow-red-300" +
      "hover:shadow-sm font-black text-lg text-center border-2 border-red-800 border-t-red-400 rounded-xs hover:border-red-500 hover:border-t-red-300",
  };

  const className = variant && variants[variant] ? variants[variant] : base;
  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
