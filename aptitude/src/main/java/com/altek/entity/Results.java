package com.altek.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Results {
    private int totalAnswered;
    private int correctAnswers;
    private int marks;
    private int skippedQuestions;
    private String name;
    private String testpaper;
    private String email;
}

// {
//     username,
//     password,
//     testpaper: questionPaper,
//     totalAnswered,
//     correctAnswers,
//     marks: correctAnswers, // 1 mark per correct answer
//     skippedQuestions,
// }
