package com.altek.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.altek.dto.LoginDto;
import com.altek.dto.ResponseDto;
import com.altek.services.StudentService;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    StudentService studentService;

    @GetMapping("/")
    public String home() {
        return "Welcome to ALTEK Aptitude Backend";
    }

    @PostMapping("/login")
    public ResponseDto   login(@RequestBody LoginDto data) {
        System.out.println(data.getEmail() + " " + data.getPassword());

        return studentService.validateStudent(data);
    }
}
