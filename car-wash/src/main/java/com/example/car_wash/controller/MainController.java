package com.example.car_wash.controller;

import com.example.car_wash.domain.Cliente;
import com.example.car_wash.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")

@Controller
@RequestMapping("/api/clientes")
public class MainController {
    @Autowired
    private ClienteRepository clienteRepository;

    @PostMapping("/add")
    public @ResponseBody String addNewCliente(@RequestParam String nome,
                                              @RequestParam String celular,
                                              @RequestParam String veiculo,
                                              @RequestParam String placa,
                                              @RequestParam String dataAgendamento,
                                              @RequestParam String mensagem) {
        Cliente cliente = new Cliente();
        cliente.setNome(nome);
        cliente.setCelular(celular);
        cliente.setVeiculo(veiculo);
        cliente.setPlaca(placa);
        cliente.setDataAgendamento(dataAgendamento);
        cliente.setMensagem(mensagem);
        clienteRepository.save(cliente);
        return "Agendado!";
    }

    @GetMapping("/all")
    public @ResponseBody Iterable<Cliente> getAllUsers() {
        // This returns a JSON or XML with the users
        return clienteRepository.findAll();
    }

    @DeleteMapping(path = "/delete/{id}")
    public @ResponseBody String deleteUser(@PathVariable Integer id) {

        if (!clienteRepository.existsById(id)) {
            return "Usuário não encontrado";
        }

        clienteRepository.deleteById(id);

        return "Usuário deletado";
    }

    @GetMapping("/mensagem/{id}")
    public @ResponseBody String getMensagem(@PathVariable Integer id) {
        if (!clienteRepository.existsById(id)) {
            return "Usuário não encontrado";
        }
        return clienteRepository.findById(id).get().getMensagem();
    }
}
