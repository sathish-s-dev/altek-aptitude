package com.altek.services;

import com.altek.dto.LoginDto;
import com.altek.dto.ResponseDto;
import com.altek.entity.Student;
import com.altek.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    // Save a new student or update an existing one
    public Student saveStudent(Student student) {
        // studentRepository.saveAll(student);
        return studentRepository.save(student);
    }

    public List<Student> saveAllStudent(List<Student> student) {
        // studentRepository.saveAll(student);
        return studentRepository.saveAll(student);
    }

    // Get all students
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // Find a student by ID
    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public Optional<Student> getStudentByEmail(String email) {
        return studentRepository.findByEmail(email);
    }

    // Delete a student by ID
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    public long timeElapsed(Instant timestamp) {
        // Convert Instant to LocalDateTime using system's default timezone
        LocalDateTime givenTime = timestamp.atZone(ZoneId.systemDefault()).toLocalDateTime();

        // Get current time
        LocalDateTime now = LocalDateTime.now();

        // Calculate duration
        Duration duration = Duration.between(givenTime, now);

        // Extract time components
        long days = duration.toDays();
        long hours = duration.toHours() % 24;
        long minutes = duration.toMinutes() % 60;
        long seconds = duration.getSeconds() % 60;

        // Print result
        System.out.println("Time Passed: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds
                + " seconds");

        return days;
    }

    public ResponseDto validateStudent(LoginDto updatedStudent) {

        String email = updatedStudent.getEmail();
        String password = updatedStudent.getPassword();

        Optional<Student> student = studentRepository.findByEmail(email);

        if (student.isPresent()) {
            long time = timeElapsed(student.get().getCreatedAt());
            // long time = timeElapsed();
            System.out.println(time);
            if (time >= 1) {
                return new ResponseDto("Password is expired", 401, null, null);
            } else if (student.get().getPassword().equals(password)) {
                System.out.println("Login successful for: " + email);
                return new ResponseDto("Login successful", 200, "testpaper1", student.get());
            } else {
                System.out.println("Entered password is incorrect");
                return new ResponseDto("Entered password is incorrect", 400, null, null);
            }

        } else {
            System.out.println("Account does not exist");
            return new ResponseDto("Account does not exist", 400, null, null);
        }
    }

}
