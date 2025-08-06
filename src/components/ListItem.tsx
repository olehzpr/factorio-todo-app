import Button from "./Button.tsx";

interface ListItemProps {
  children: string;
}

function ListItem({ children }: ListItemProps) {
  return (
    <div className="flex space-x-2">
      <li className="bg-[#444343] border-2 border-[#2a292a] border-t-[#717071] min-h-10 w-full flex items-center px-2 shadow-md">
        {children}
      </li>
      <Button>-</Button>
      <Button variant="danger">x</Button>
    </div>
  );
}

export default ListItem;
