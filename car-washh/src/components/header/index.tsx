import { Link } from "react-router-dom";

export function Header(){
    return(
        <header className="flex items-center justify-center p-2 w-full text-black sm:px-4">
            
            <div className="flex w-full items-center max-w-3xl justify-between">

                <h1 className="text-2xl sm:text-3xl font-bold">Wolf Flix</h1>
                <ol className="flex gap-4">
                    <li> <Link className="hover:font-bold sm:text-xl" to="/">Home</Link> </li>
                    <li> <Link className="hover:font-bold sm:text-xl" to="/filmes">Filmes</Link></li>
                    <li> <Link className="hover:font-bold sm:text-xl" to="/admin">Admin</Link> </li>
                </ol>
            </div>

        </header>
    )
}