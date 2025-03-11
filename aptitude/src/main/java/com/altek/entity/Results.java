package com.altek.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "results")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Results {

    @Id
    private String id = new ObjectId().toString();

    private int totalAnswered;
    private int correctAnswers;
    private int marks;
    private int skippedQuestions;
    private String name;
    private String testpaper;
    private String email;
    private String college;
}
