import { useEffect, useState } from "react";
import { Header } from "../../components/header";

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

        const url = 'http://localhost:8080/api/clientes/all';

        fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.log(error));

        console.log(data);
    }, [data]);


    async function deleteCliente(id: number) {
        const url = `http://localhost:8080/api/clientes/delete/${id}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(text => console.log(text))
    }
    

    return (
        <div className="p-6">
            <Header/>
            <h1 className="text-center text-2xl font-bold mb-4">Visão Geral dos Agendamentos</h1>

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
                            <button onClick={() => deleteCliente(item.id)} className="bg-red-700 rounded-md text-white py-1 mt-1 ">Excluir</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
