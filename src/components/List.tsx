import ListItem from "./ListItem.tsx";
import type { Todo } from "./Card.tsx";

interface ListProps {
  user: string;
  data: Todo[];
  deleteItem: (id: number) => { restoreDeletedItem: () => void };
}

function List({ user, data, deleteItem }: ListProps) {
  return (
    <ul className="list-none space-y-2">
      {data
        .filter((item) => item.assignee === user)
        .map((item) => (
          <ListItem key={item.id} deleteItem={deleteItem} item={item}>
            {item.title}
          </ListItem>
        ))}
    </ul>
  );
}

export default List;
