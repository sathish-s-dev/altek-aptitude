package com.altek.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.altek.dto.RequestDto;
import com.altek.entity.Student;
import com.altek.service.DataService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin("*")
public class DataController {

	@Autowired
	DataService dataService;

	@PostMapping("/sendMail")
	public ResponseEntity<String> sendMailToStudent(@RequestBody RequestDto requestDto) {
		//// log.info("Get Mails From User Controller Called");
		//// log.info("Data :- {}", requestDto.getMail());
		dataService.getMails(requestDto.getEmail());
		return ResponseEntity.ok("Success");
	}

	@PostMapping("/submit-answers")
	public ResponseEntity<String> validateResults(@RequestBody Map<String, String> formData) {
		// log.info("Data: {}", formData);
		String response = dataService.validateResults(formData);
		return ResponseEntity.ok(response);
	}

	@PostMapping("/authenticateUserLogin")
	public ResponseEntity<String> authenticateUser(@RequestParam String mail, @RequestParam String password) {
		// log.info("Authenticate User Controller Called");
		// log.info("Mail :- {}", mail);
		// log.info("Password :- {}", password);

		Student student = new Student();
		student.setEmail(mail);
		student.setPassword(password);

		String response = dataService.validateStudent(student);
		// log.info("Response from Service -> {}", response);

		return ResponseEntity.ok(response);
	}
}
