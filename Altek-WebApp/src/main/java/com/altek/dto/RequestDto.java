package com.altek.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RequestDto {
    private String email;
    private String password;

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
