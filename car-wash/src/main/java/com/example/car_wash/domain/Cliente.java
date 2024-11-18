package com.example.car_wash.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "cliente")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nome;
    private String celular;
    private String veiculo;
    private String placa;
    private String dataAgendamento;
    private String mensagem;
}
