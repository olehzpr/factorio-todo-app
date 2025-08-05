import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

function Button(props: ButtonProps) {
  return (
    <button
      className="font-bold text-black py-1 px-3 min-w-10 min-h-10 bg-[#8e8e8e] shadow-md shadow-gray-900 hover:bg-orange-400 hover:shadow-orange-400
      hover:shadow-sm font-black text-lg text-center border-2 border-[#515051] rounded-xs border-t-[#b1b0b1] hover:border-orange-500"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
