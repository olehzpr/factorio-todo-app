import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

function GreenButton(props: ButtonProps) {
  return (
    <button
      className="font-bold text-black py-1 px-3 min-w-10 min-h-10 bg-[#5eb663] shadow-md shadow-gray-900 hover:bg-green-300 hover:shadow-green-300
      hover:shadow-sm font-black text-lg text-center border-2 border-green-900 border-t-green-200 rounded-xs hover:border-green-400 hover:border-t-green-200"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default GreenButton;
