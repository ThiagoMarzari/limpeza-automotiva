import { CardPrice } from "../../components/cardPrice"
import { Container } from "../../components/container"
import { ServiceCard } from "../../components/serviceCard"

export function Home() {
    return (
        <Container>

            <div className="flex w-full justify-center flex-col items-center text-center mt-8 space-y-4 min-h-64 bg-cover bg-center relative" style={{ backgroundImage: "url('./src/assets/h1_hero1.png')" }}>
                <div className="absolute inset-0 bg-black opacity-50" style={{ filter: "blur(8px)" }}></div>
                <h2 className="text-4xl md:text-8xl text-white font-bold relative">Limpeza Automotiva</h2>
                <p className="md:text-xl text-white relative">Limpeza de carros, motos, caminhões e etc.</p>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 relative hover:scale-125">
                    Nossos serviços
                </button>
            </div>

            <div className="mt-16 text-white ">
                <h2 className="md:text-4xl font-bold">
                    Oferecemos os melhores serviços ao nosso cliente
                </h2>

                <div className="flex gap-4">
                    <CardPrice title={"Lavagem básica"} price={50} description={"Lavagem básica por fora do veiculo"} />
                    <CardPrice title={"Lavagem intermediaria"} price={100} description={"Lavagem dentro e fora do veiculo"} />
                    <CardPrice title={"Lavagem premium"} price={200} description={"Lavagem completa e com detalhamento"} />
                </div>

            </div>

            <div className="mt-16 flex flex-col">
                <h2 className="md:text-4xl text-white font-bold">Por que escolher nossos serviços</h2>

                <div className="flex gap-4 text-center mt-4">

                    <ServiceCard imgPath={"src/assets/services1.svg"} title={"Qualidade Superior e Atenção aos Detalhes"} description={"Utilizamos produtos de alta qualidade e técnicas especializadas para garantir que seu veículo receba o melhor cuidado, deixando-o como novo."} />

                    <ServiceCard imgPath={"src/assets/services2.svg"}
                        title={"Serviço Rápido e Eficiente"}
                        description={"Sabemos que seu tempo é valioso, por isso oferecemos serviços ágeis sem comprometer a qualidade, garantindo que seu carro esteja pronto o mais rápido possível."} />

                    <ServiceCard imgPath={"src/assets/services3.svg"}
                        title={"Equipe Treinada e Experiente"}
                        description={"Nossa equipe de profissionais qualificados tem ampla experiência em cuidados automotivos, proporcionando um serviço confiável e de confiança."} />
                </div>
            </div>

            <div className="flex justify-cente items-center w-full mt-24 flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <img className="w-full md:w-1/2" src="src/assets/mapa.png" alt="Localizacao" />
                    <img className="w-full md:w-1/2" src="src/assets/wash.jpg" alt="Wash" />
                </div>
            </div>
        </Container>
    )
}