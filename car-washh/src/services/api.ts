export interface apiProps {
    id: number;
    nome: string;
    celular: string;
    placa: string;
    veiculo: string;
    dataAgendamento: string;
}


const baseUrl: string = 'http://localhost:8080';

export async function getAllClientes(): Promise<apiProps[]> {
    const response = await fetch(`${baseUrl}/api/clientes/all`);
    return response.json();
}

export async function deleteClienteById(id: number): Promise<void> {
    try {
        await fetch(`${baseUrl}/api/clientes/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
        
    }
   
}