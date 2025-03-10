package com.altek.dto;

import com.altek.entity.Student;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseDto {
    private String message;
    private int status;
    private String testpaperId;
    private Student student;

    public ResponseDto(String message, int status, String testpaperId, Student student) {
        this.message = message;
        this.status = status;
        this.testpaperId = testpaperId;
        this.student = student;
    }
}
