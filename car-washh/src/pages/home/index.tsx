import { Container } from "../../components/container"
import { Header } from "../../components/header"

export function Home() {
    return (
        <Container>

            <Header />

            <div className="w-full max-w-7xl flex flex-col items-center justify-center sm:px-4">

                <div className="flex w-full justify-center flex-col items-center text-center mt-8 space-y-4 min-h-64 bg-cover bg-center relative" style={{ backgroundImage: "url('./src/assets/h1_hero1.png')" }}>
                    <div className="absolute inset-0 bg-black opacity-50" style={{ filter: "blur(8px)" }}></div>
                    <h2 className="text-4xl md:text-8xl text-white font-bold relative">Limpeza Automotiva</h2>
                    <p className="md:text-xl text-white relative">Limpeza de carros, motos, caminhões e etc.</p>

                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 relative">Nossos serviços</button>
                </div>

                <div className="mt-16 text-white ">
                    <h2 className="md:text-4xl font-bold">
                        Oferecemos os melhores serviços ao nosso cliente
                    </h2>

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
                            <h3 className="text-2xl font-bold">Lavagem básica</h3>
                            <span className="text-xl font-bold">Preço R$50,00</span>
                            <p>Preços acessíveis para todos os tipos de veículos</p>
                        </div>

                        <button className="rounded-full border-2 px-6 py-4 hover:bg-slate-600 transition-all">Agendar</button>
                    </div>
                </div>

            </div>
        </Container>
    )
}