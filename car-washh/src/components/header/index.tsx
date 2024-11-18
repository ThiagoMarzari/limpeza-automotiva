import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import { useEffect, useState } from "react";

export function Header(){

    const [logado, setLogado] = useState(false);

    function handleSignOut() {
        signOut(auth)
        location.reload(); //Reload na página
    }

    useEffect(() => {

        const unsub = onAuthStateChanged(auth, (user) => {
            if (!user){
                setLogado(false)
            }
            else {
                setLogado(true)
            }
        })

        return () => {
            unsub();
        }
    }, [])

    
    return(
        <header className="flex items-center justify-center p-2 w-full text-white sm:px-4">
            
            <div className="flex w-full items-center max-w-3xl justify-between">

                <h1 className="text-2xl sm:text-3xl font-bold ">Limpeza automotiva</h1>
                <ol className="flex gap-4">
                    <li> <Link className="hover:font-bold sm:text-xl" to="/">Home</Link> </li>
                    {logado && (
                        <li> <Link className="hover:font-bold sm:text-xl" to="/admin">Admin</Link> </li>
                    )}
                    
                    {logado ? (
                        <button
                            onClick={handleSignOut}
                            className="text-lg text-red-600 hover:text-red-800 transition"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="text-lg text-green-600 hover:text-green-800 transition"
                        >
                            Login
                        </Link>
                    )}
                </ol>
            </div>
        </header>
    )
}