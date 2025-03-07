package com.altek.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.altek.entity.Student;
import com.altek.repository.StudentRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class DataService {

    @Autowired
    private StudentRepository studentRepository;

    // Method to send emails (Implementation depends on email service)
    public void getMails(String email) {
        // log.info("Sending email to: {}", email);
        // Logic to send email
    }

    // Method to validate answers from submitted form data
    public String validateResults(Map<String, String> formData) {
        // log.info("Validating test answers...");

        // Example: Simple validation logic
        int score = 0;
        for (Map.Entry<String, String> entry : formData.entrySet()) {
            String questionId = entry.getKey();
            String answer = entry.getValue();

            // Fetch the correct answer from the database (Mock logic)
            String correctAnswer = getCorrectAnswerFromDB(questionId);

            if (answer.equalsIgnoreCase(correctAnswer)) {
                score++;
            }
        }

        String result = "Your score: " + score + "/" + formData.size();
        // log.info("Validation complete. {}", result);
        return result;
    }

    // Mock method to get the correct answer (Replace with database query)
    private String getCorrectAnswerFromDB(String questionId) {
        // Example correct answers (Replace with database retrieval)
        Map<String, String> correctAnswers = Map.of(
                "1", "A",
                "2", "B",
                "3", "C",
                "4", "D");

        return correctAnswers.getOrDefault(questionId, "A"); // Default to "A"
    }

    // Method to authenticate student login
    public String validateStudent(Student student) {
        // log.info("Validating student login for email: {}", student.getEmail());

        // Find student by email
        Student existingStudent = studentRepository.findByEmail(student.getEmail());

        if (existingStudent != null && existingStudent.getPassword().equals(student.getPassword())) {
            // log.info("Login successful for: {}", student.getEmail());
            return "Login successful";
        } else {
            // log.warn("Login failed for: {}", student.getEmail());
            return "Invalid email or password";
        }

    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
