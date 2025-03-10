package com.altek.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Results {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private int totalAnswered;
    @Column
    private int correctAnswers;
    @Column
    private int marks;
    @Column
    private int skippedQuestions;
    @Column
    private String name;
    @Column
    private String testpaper;
    @Column
    private String email;
    @Column
    private String college;
}
