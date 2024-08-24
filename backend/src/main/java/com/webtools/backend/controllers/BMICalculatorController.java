package com.webtools.backend.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bmi-calculator")
public class BMICalculatorController {

    @GetMapping
    public double calculateBMI(@RequestParam double weight, @RequestParam double height) {
        return weight / (height * height);
    }
}
