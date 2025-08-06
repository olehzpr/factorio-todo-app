interface InputProps {
  placeholder?: string;
}

function Input({ placeholder }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder ?? "New task..."}
      className="bg-[#8e8e8e] text-black border-2 border-[#515051] border-b-[#b1b0b1] rounded-sm p-1 pl-2 w-full mr-2
      focus:bg-yellow-100 focus:outline-none focus:border-yellow-200 focus:border-b-yellow-100 h-10 hover:bg-[#aeaeae]"
    />
  );
}

export default Input;
