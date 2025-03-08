package com.altek.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.altek.entity.Results;

@RestController
@CrossOrigin({ "http://localhost:5173" })
public class DataController {

    @PostMapping("/submit-answers")
    public Results submitAnswers(@RequestBody Results results) {

        return results;
    }

}
