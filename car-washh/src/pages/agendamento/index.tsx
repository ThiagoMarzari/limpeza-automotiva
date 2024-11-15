import { FormEvent } from "react";
import { Container } from "../../components/container";
import { createCliente } from "../../services/api";

export function Agendamento(){

    async function agendar(e: FormEvent) {
        e.preventDefault();

        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const celular = (document.getElementById("celular") as HTMLInputElement).value;
        const veiuclo = (document.getElementById("veiculo") as HTMLInputElement).value;
        const placa = (document.getElementById("placa") as HTMLInputElement).value;
        const data = (document.getElementById("data") as HTMLInputElement).value;
        const mensagem = (document.getElementById("mensagem") as HTMLInputElement).value;
        
        console.log(nome, celular, placa, data, mensagem);

        createCliente({
            nome: nome,
            celular: celular,
            placa: placa,
            veiculo: veiuclo,
            dataAgendamento: data,
            mensagem
        })
        .then((mensagem) => {
            alert(mensagem);
        })
    }

    return(
        <Container>
            <h1 className="text-white text-center text-4xl ">Agendamento</h1>

            <div className="flex w-full justify-center">
                <form className=" w-full flex flex-col gap-4 mt-8 max-w-xl" onSubmit={agendar}>
                    <input type="text" placeholder="Nome" className="p-2 rounded-md" id="nome"/>
                    <input type="text" placeholder="Celular/Telefone" className="p-2 rounded-md" id="celular"/>
                    <input type="text" placeholder="Veiculo" className="p-2 rounded-md" id="veiculo"/>
                    <input type="text" placeholder="Placa" className="p-2 rounded-md" id="placa"/>
                    <input type="text" placeholder="Data" className="p-2 rounded-md" id="data"/>
                    <textarea placeholder="Mensagem" className="p-2 rounded-md" id="mensagem"></textarea>

                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Agendar</button>
                </form>
            </div>
        </Container>
    )
}