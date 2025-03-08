package com.altek.dto;

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

    public ResponseDto(String message, int status, String testpaperId) {
        this.message = message;
        this.status = status;
        this.testpaperId = testpaperId;
    }
}
