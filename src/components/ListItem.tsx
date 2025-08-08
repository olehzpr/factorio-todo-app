import Button from "./Button.tsx";
import { type ReactNode, useState } from "react";
import type { Todo } from "./Card.tsx";

interface ListItemProps {
  children: ReactNode;
  item: Todo;
  deleteItem: (id: number) => { restoreDeletedItem: () => void };
}

function ListItem({ children, item, deleteItem }: ListItemProps) {
  const [checked, setChecked] = useState(item.completed);
  const [loading, setLoading] = useState(false);
  const toggleCheck = async () => {
    setLoading(true);
    setChecked((prevState) => !prevState);

    await fetch("https://factorio-api.onrender.com/todo", {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assignee: item.assignee,
        completed: !item.completed,
        id: item.id,
        title: item.title,
      }),
    });
    setLoading(false);
  };
  const handleDelete = async () => {
    const { restoreDeletedItem } = deleteItem(item.id);
    try {
      const response = await fetch(
        `https://factorio-api.onrender.com/todo?id=${item.id}`,
        {
          method: "DELETE",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        restoreDeletedItem();
      }
    } catch (err: unknown) {
      console.error(err);
      restoreDeletedItem();
    }
  };
  return (
    <div className="flex space-x-2">
      <li
        className={`${checked ? "opacity-50" : ""} bg-[#444343] border-2 break-word border-[#2a292a] border-t-[#717071] min-h-10 w-full flex items-center px-2 shadow-md`}
      >
        {children}
      </li>
      <Button disabled={loading} onClick={toggleCheck}>
        ✓
      </Button>
      <Button onClick={handleDelete} variant="danger">
        ✕
      </Button>
    </div>
  );
}

export default ListItem;
