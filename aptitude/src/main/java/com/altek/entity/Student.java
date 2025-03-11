package com.altek.entity;

import java.time.Instant;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Document(collection = "students")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
public class Student {
    
    @Id
    private String id;

    private String name;

    private String email;

    private String password;

    private String branch;

    private String college;

    // @GeneratedValue(strategy)
    @CreatedDate
    private Instant createdAt;

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