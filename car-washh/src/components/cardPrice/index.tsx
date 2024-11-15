import { Link } from "react-router-dom";

interface CardPriceProps 
{
    title: string;
    price: number;
    description: string;
}

export function CardPrice(props: CardPriceProps){
    return(
        <div className="flex flex-col justify-center 
        items-center w-full gap-4 text-center
        border-2 border-gray-700
        mt-8 p-4
        rounded-xl
        ">
            <div>
                <img className=""  src="src\assets\price1.svg" alt="Preco" />
            </div>
            <div className="flex flex-col gap-2 bo">
                <h3 className="text-2xl font-bold">{props.title}</h3>
                <span className="text-xl font-bold">Preço R${props.price},00</span>
                <p>{props.description}</p>
            </div>

            <Link to="/agendamento"
            className="rounded-3xl border-2 px-6 py-4 hover:bg-blue-600 transition-all">
                Agendar
            </Link>
        </div>
    )
}