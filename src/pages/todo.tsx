import Card from "../components/Card.tsx";

function Todo(){
    return (
        <div className='bg-[url(https://cdn.factorio.com/assets/blog-sync/fff-401-decorative-shots-03.png)] bg-center bg-repeat h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <img className='drop-shadow-lg' src='https://cdn.factorio.com/assets/img/web/factorio-logo2.png' alt='factorio' />
            </div>
            <div className='flex justify-center items-center'>
                <Card label='Bruh' bottomText='Bruh'>Lol</Card>
            </div>
        </div>
    );
}

export default Todo;