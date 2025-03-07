package com.altek.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.altek.entity.Student;
import com.altek.repository.StudentRepository;
import com.altek.service.DataService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin("*")
public class HomeController {

	@Autowired
	DataService dataService;

	@Autowired
	StudentRepository studentRepository;

	@GetMapping("/login")
	public List<Student> loadLoginView() {
		// log.info("In login Controller");

		return studentRepository.findAll();
	}

	@RequestMapping("/text")
	@ResponseBody
	public String loadText() {
		// log.info("In text Controller");

		return "login success message";
	}

	@RequestMapping("/")
	public String loadLoginPage() {
		// log.info("In login Controller");

		return "login";
	}

	@RequestMapping("/sendmail")
	public String loadSendMailPage() {
		// log.info("In send mail page Controller");

		return "sendmail";
	}

	@RequestMapping("/loadtest/{testpaper}")
	public String loadTestPaperPage(@PathVariable String testpaper) {
		// log.info("In test paper page Controller returning " + testpaper);

		return testpaper;
	}

	@GetMapping("/loadthetestresultsfortestingpurposes")
	public ResponseEntity<List<Student>> getAllStudents() {
		List<Student> lstStudents = dataService.getAllStudents();

		if (lstStudents != null && lstStudents.size() > 0) {
			return ResponseEntity.ok(lstStudents);
		}

		return ResponseEntity.badRequest().body(null);
	}

}