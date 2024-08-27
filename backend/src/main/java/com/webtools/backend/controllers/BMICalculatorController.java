package com.webtools.backend.controllers;

import com.webtools.backend.models.BMIResult;
import com.webtools.backend.services.BMICalculatorService;
import com.webtools.backend.exceptions.InvalidInputException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bmi-calculator")
public class BMICalculatorController {

    private final BMICalculatorService bmiService;

    // constructor
    @Autowired
    public BMICalculatorController(BMICalculatorService bmiService) {
        this.bmiService = bmiService;
    }

    // calls service
    @GetMapping
    public BMIResult calculateBMI(
            @RequestParam double weight,
            @RequestParam String weightUnit,
            @RequestParam double height,
            @RequestParam String heightUnit) {
        return bmiService.calculateBMI(weight, weightUnit, height, heightUnit);
    }

    // error handler
    @ExceptionHandler(InvalidInputException.class)
    public ResponseEntity<String> handleInvalidInputException(InvalidInputException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }
}
