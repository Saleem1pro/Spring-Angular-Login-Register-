package com.transport.demo.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable= false)
    private String firstName;

    @Column(name = "last_name", nullable= false)
    private String lastName;

    @Column(name = "login", nullable= false)
    private String login;

    @Column(name = "password", nullable= false)
    private String password;
}
