import ListItem from "./ListItem.tsx";
import { useEffect, useState } from "react";

interface TaskItem {
  id: number;
  user: string;
  task: string;
}

interface ListProps {
  user: string;
}

function List({ user }: ListProps) {
  const [data, setData] = useState<TaskItem[]>([]);
  useEffect(() => {
    fetch("https://skibidiworker.ole9zp.workers.dev/?user=" + user).then(
      async (res) => {
        const data = await res.json();
        return setData(data);
      },
    );
  }, [user]);

  return (
    <ul className="list-none space-y-2">
      {data.map((item) => (
        <ListItem key={item.id}>{item.task}</ListItem>
      ))}
    </ul>
  );
}

export default List;
