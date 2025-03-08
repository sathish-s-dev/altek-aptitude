package com.altek.entity;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Entity
@Table(name = "students")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String branch;

    @Column(nullable = false)
    // @GeneratedValue(strategy)
    @CreationTimestamp
    private String createdAt;

    public String getEmail() {
        // log.info("Sending email to: {}", email);
        return this.email;
    }

    public String getPassword() {
        // log.info("Sending email to: {}", email);
        return this.password;
    }

    public String setEmail(String email) {
        // log.info("Sending email to: {}", email);
        return this.email = email;
    }

    public String setPassword(String password) {
        // log.info("Sending email to: {}", email);
        return this.password = password;
    }

}

//