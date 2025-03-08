package com.altek.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Testpaper {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment ID
    private Long id;

    private String title;

    private String subject;

    private int duration; // Duration in minutes

    private int totalMarks;

    @OneToMany(mappedBy = "testPaper", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Question> questions; // List of questions in the test

    // ✅ Constructors
    public void TestPaper() {
    }

    public void TestPaper(String title, String subject, int duration, int totalMarks) {
        this.title = title;
        this.subject = subject;
        this.duration = duration;
        this.totalMarks = totalMarks;
    }

    // ✅ Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(int totalMarks) {
        this.totalMarks = totalMarks;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    // ✅ ToString method
    @Override
    public String toString() {
        return "TestPaper{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", subject='" + subject + '\'' +
                ", duration=" + duration +
                ", totalMarks=" + totalMarks +
                '}';
    }
}
