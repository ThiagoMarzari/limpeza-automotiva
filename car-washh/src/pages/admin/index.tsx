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
        toast.success("Ticket do cliente fechado com sucesso");
    }

    async function readMensagemCliente(id: number) {
        let mensagem = await readMensagem(id);
        alert(mensagem);
    }

    return (
        <Container>
            <h1 className="text-center text-2xl font-bold mb-4 text-white">Visão Geral dos Agendamentos</h1>

            <table className="w-full border-collapse border border-gray-300 text-center shadow-lg rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-slate-700 text-white">
                        <th className="border border-gray-300 px-4 py-3">ID Cliente</th>
                        <th className="border border-gray-300 px-4 py-3">Nome</th>
                        <th className="border border-gray-300 px-4 py-3">Celular</th>
                        <th className="border border-gray-300 px-4 py-3">Veículo</th>
                        <th className="border border-gray-300 px-4 py-3">Placa</th>
                        <th className="border border-gray-300 px-4 py-3">Data do Agendamento</th>
                        <th className="border border-gray-300 px-4 py-3">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="hover:bg-blue-100 bg-white">
                            <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.nome}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.celular}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.veiculo}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.placa}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.dataAgendamento}</td>
                            <td className="border border-gray-300 px-4 py-2 flex justify-center">
                                <button onClick={() => deleteCliente(item.id)} className="bg-red-600 rounded-md text-white py-1 px-4 mr-2 hover:bg-red-700 transition duration-200">Fechar ticket</button>
                                <button onClick={() => readMensagemCliente(item.id)} className="bg-green-600 rounded-md text-white py-1 px-4 hover:bg-green-700 transition duration-200">Mensagem</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}
