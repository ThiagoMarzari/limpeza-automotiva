import { useEffect, useState } from "react";
import { deleteClienteById, getAllClientes, readMensagem } from "../../services/api";
import { Container } from "../../components/container";
import { toast } from "react-toastify";

interface dataProps {
    id: number;
    nome: string;
    celular: string;
    placa: string;
    veiculo: string;
    dataAgendamento: string;
}


export function Admin() {
    const [data, setData] = useState<dataProps[]>([]);

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await getAllClientes();
                setData(response.map(item => ({
                    id: item.id ?? 0, 
                    nome: item.nome,
                    celular: item.celular,
                    placa: item.placa,
                    veiculo: item.veiculo,
                    dataAgendamento: item.dataAgendamento
                })));
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [data]);


    async function deleteCliente(id: number) {
        deleteClienteById(id);
        toast.success("Cliente deletado com sucesso");
    }

    async function readMensagemCliente(id: number) {
        let mensagem = await readMensagem(id);
        alert(mensagem);
    }
    
    return (
        <Container>
            <h1 className="text-center text-2xl font-bold mb-4 text-white">Visão Geral dos Agendamentos</h1>

            <table className="table-auto w-full border-collapse border border-gray-200 text-center">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="border border-gray-200 px-4 py-2">ID Cliente</th>
                        <th className="border border-gray-200 px-4 py-2">Nome</th>
                        <th className="border border-gray-200 px-4 py-2">Celular</th>
                        <th className="border border-gray-200 px-4 py-2">Veiculo</th>
                        <th className="border border-gray-200 px-4 py-2">Placa</th>
                        <th className="border border-gray-200 px-4 py-2">Data do agendamento</th>
                        <th className="border border-gray-200 px-4 py-2">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="bg-white">
                            <td className="border border-gray-200 px-4 py-2">{item.id}</td>
                            <td className="border border-gray-200 px-4 py-2">{item.nome}</td>
                            <td className="border border-gray-200 px-4 py-2">{item.celular}</td>
                            <td className="border border-gray-200 px-4 py-2">{item.veiculo}</td>
                            <td className="border border-gray-200 px-4 py-2">{item.placa}</td>
                            <td className="border border-gray-200 px-4 py-2">{item.dataAgendamento}</td>
                            <button onClick={() => deleteCliente(item.id)} className="bg-red-700 p rounded-md text-white py-1 px-4 mt-1 ">Excluir</button>
                            <button onClick={() => readMensagemCliente(item.id)} className="bg-green-700 rounded-md text-white py-1 mt-1 px-4 ml-2">Mensagem</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}
