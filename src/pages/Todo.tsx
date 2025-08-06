import Card from "../components/Card.tsx";

function Todo() {
  return (
    <div className="bg-[url(https://cdn.factorio.com/assets/blog-sync/fff-401-decorative-shots-03.png)] bg-center bg-repeat min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <img
          className="drop-shadow-lg"
          src="https://cdn.factorio.com/assets/img/web/factorio-logo2.png"
          alt="factorio"
        />
      </div>
      <div className="mr-4 sm:mx-34 flex justify-center items-top flex-col sm:flex-row px-2">
        <Card user="Max" />
        <Card user="Oleh" />
      </div>
    </div>
  );
}

export default Todo;
