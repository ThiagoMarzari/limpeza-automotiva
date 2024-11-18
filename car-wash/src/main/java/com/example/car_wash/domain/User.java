package com.example.car_wash.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity //PAra dizer que essa classe é uma entidade
@Getter
@Setter
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String name;
    private String email;
    private String password;
}
