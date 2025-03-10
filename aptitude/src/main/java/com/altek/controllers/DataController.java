package com.altek.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.altek.entity.Results;
import com.altek.services.DataService;

@RestController
@CrossOrigin({ "http://localhost:5173" })
public class DataController {

    @Autowired
    private DataService dataService;

    @PostMapping("/submit-answers")
    public Results submitAnswers(@RequestBody Results results) {
        Results savedResults = dataService.saveResults(results);
        return savedResults;
    }

    @GetMapping("/all-results")
    public List<Results> allResults() {
        return dataService.allStudents(null);
    }

}
