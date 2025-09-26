import Input from "./Input.tsx";
import Button from "./Button.tsx";
import List from "./List.tsx";
import { useEffect, useState } from "react";

interface CardProps {
  user: string;
}

export interface Todo {
  assignee: string;
  completed: boolean;
  created_at: string;
  id: number;
  title: string;
  updated_at: string;
}

function Card({ user }: CardProps) {
  const [todosData, setTodosData] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  useEffect(() => {
    fetch("https://factorio-api.onrender.com/todo")
      .then((res) => res.json())
      .then((dataRes) => setTodosData(dataRes));
  }, []);

  const handleAddTodo = async () => {
    await fetch("https://factorio-api.onrender.com/todo", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assignee: user,
        title: text,
      }),
    })
      .then((res) => res.json())
      .then((data: Todo) => setTodosData([...todosData, data]));
    setText("");
  };

  const deleteItem = (id: number) => {
    const deletedItem = todosData.find((item) => item.id === id);
    setTodosData((prevState) => [
      ...prevState.filter((item) => item.id !== id),
    ]);

    const restoreDeletedItem = () => {
      if (!deletedItem) return;
      return setTodosData((prevState) => [...prevState, deletedItem]);
    };
    return { restoreDeletedItem };
  };

  return (
    <div className="p-2 gap-2 shadow-md w-full m-2 flex flex-col justify-center items-center bg-[#313031] border-2 border-[#212021] border-t-[#717071]">
      <h3 className="font-medium text-[#ffe6c0] self-start">{user}</h3>
      <div className="p-2 inset-shadow-xs inset-shadow-black bg-[#414040] text-white w-full h-full border-2 border-[#212021] border-b-[#717071]">
        <List deleteItem={deleteItem} user={user} data={todosData} />
      </div>
      <div className="p-2 inset-shadow-xs inset-shadow-black flex justify-center items-center w-full bg-[#292829] border-2 border-[#212021] border-b-[#717071]">
        <Input value={text} onChange={setText} />
        <Button variant="success" onClick={handleAddTodo}>
          +
        </Button>
      </div>
    </div>
  );
}

export default Card;
