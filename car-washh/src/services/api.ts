export interface apiProps {
    id?: number;
    nome: string;
    celular: string;
    placa: string;
    veiculo: string;
    dataAgendamento: string;
    mensagem: string;
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

export async function createCliente(clienteProps: apiProps): Promise<void> {
    try {
        await fetch(`${baseUrl}/api/clientes/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `nome=${clienteProps.nome}&celular=${clienteProps.celular}&placa=${clienteProps.placa}&veiculo=${clienteProps.veiculo}&dataAgendamento=${clienteProps.dataAgendamento}&mensagem=${clienteProps.mensagem}`	
        })
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
        })
    } catch (error) {
        console.log(error);
        
    }
}