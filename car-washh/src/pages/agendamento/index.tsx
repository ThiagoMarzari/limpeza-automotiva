import { FormEvent } from "react";
import { Container } from "../../components/container";
import { createCliente } from "../../services/api";
import { toast } from "react-toastify";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function Agendamento(){

    async function agendar(e: FormEvent) {
        e.preventDefault();

        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const celular = (document.getElementById("celular") as HTMLInputElement).value;
        const veiuclo = (document.getElementById("veiculo") as HTMLInputElement).value;
        const placa = (document.getElementById("placa") as HTMLInputElement).value;
        const data = (document.getElementById("data") as HTMLInputElement).value;
        const mensagem = (document.getElementById("mensagem") as HTMLInputElement).value;
        
        if (!nome || !celular || !veiuclo || !placa || !data) {
            toast.error("Preencha todos os campos");
            return;
        }

        console.log(nome, celular, placa, data, mensagem);

        createCliente({
            nome: nome,
            celular: celular,
            placa: placa,
            veiculo: veiuclo,
            dataAgendamento: data,
            mensagem
        })
        .then(() => {
            toast.success("Agendamento realizado com sucesso");
            (document.getElementById("nome") as HTMLInputElement).value = "";
            (document.getElementById("celular") as HTMLInputElement).value = "";
            (document.getElementById("veiculo") as HTMLInputElement).value = "";
            (document.getElementById("placa") as HTMLInputElement).value = "";
            (document.getElementById("data") as HTMLInputElement).value = "";
            (document.getElementById("mensagem") as HTMLInputElement).value = "";
        })
    }

    return(
        <Container>
            <h1 className="text-white text-center text-4xl ">Agendamento</h1>

            <div className="w-full flex items-center justify-center">
                <form className="max-w-xl text-center" onSubmit={agendar}>
                    <Input type="text" placeholder="Nome" id="nome"/>
                    <Input type="text" placeholder="Celular/Telefone" id="celular"/>
                    <Input type="text" placeholder="Veiculo" id="veiculo"/>
                    <Input type="text" placeholder="Placa" id="placa"/>
                    <Input type="date" placeholder="Data" id="data"/>
                    <Input placeholder="Mensagem" id="mensagem"/>

                    <Button>Agendar</Button>
                </form>
            </div>
            
        </Container>
    )
}