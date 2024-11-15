import { Header } from "../../components/header"

export function Home(){
    return(
        <div className="w-full flex justify-center items-center flex-col">
            
            <Header/>

            <div className="w-full max-w-7xl flex flex-col items-center justify-center sm:px-4">
                <h1>Bem vindo a home</h1>

            </div>
        </div>
    )
}