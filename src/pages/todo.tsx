import Card from "../components/Card.tsx";
import Button from "../components/Button.tsx";

function Todo() {
  return (
    <div className="bg-[url(https://cdn.factorio.com/assets/blog-sync/fff-401-decorative-shots-03.png)] bg-center bg-repeat h-screen">
      <div className="flex flex-col justify-center items-center">
        <img
          className="drop-shadow-lg"
          src="https://cdn.factorio.com/assets/img/web/factorio-logo2.png"
          alt="factorio"
        />
      </div>
      <div className="mx-32 flex justify-center items-top flex-col sm:flex-row px-2">
        <Card label="Max" bottomText={<Button>+</Button>}>
          <Button>+</Button>
        </Card>
        <Card label="Oleh" bottomText="Bruh">
          Lol
        </Card>
      </div>
    </div>
  );
}

export default Todo;
