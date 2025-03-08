package com.altek.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.altek.entity.Student;
import com.altek.services.StudentService;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/student")
    public List<Student> student() {
        return studentService.getAllStudents();
    }

    @PostMapping("/student")
    public List<Student> saveAllStudent(@RequestBody List<Student> student) {
        return studentService.saveAllStudent(student);
    }
}
