import Input from "./Input.tsx";
import Button from "./Button.tsx";
import List from "./List.tsx";

interface CardProps {
  user: string;
}

function Card({ user }: CardProps) {
  return (
    <div className="p-2 gap-2 shadow-md w-full m-2 flex flex-col justify-center items-center bg-[#313031] border-2 border-[#212021] border-t-[#717071]">
      <h3 className="font-medium text-[#ffe6c0] self-start">{user}</h3>
      <div className="p-2 inset-shadow-xs inset-shadow-black bg-[#414040] text-white w-full h-full border-2 border-[#212021] border-b-[#717071]">
        <List user={user} />
      </div>
      <div className="p-2 inset-shadow-xs inset-shadow-black flex justify-center items-center w-full bg-[#292829] border-2 border-[#212021] border-b-[#717071]">
        <Input />
        <Button variant="success">+</Button>
      </div>
    </div>
  );
}

export default Card;
