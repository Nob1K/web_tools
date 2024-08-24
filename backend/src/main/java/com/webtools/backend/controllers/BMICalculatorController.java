package com.webtools.backend.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bmi-calculator")
public class BMICalculatorController {

    @GetMapping
    public double calculateBMI(
            @RequestParam double weight,
            @RequestParam String weightUnit,
            @RequestParam double height,
            @RequestParam String heightUnit) {

        // Convert weight to kg if in lbs
        if (weightUnit.equalsIgnoreCase("lbs")) {
            weight = weight * 0.453592;
        }

        // Convert height to meters
        if (heightUnit.equalsIgnoreCase("cm")) {
            height = height / 100;
        } else if (heightUnit.equalsIgnoreCase("inches")) {
            height = height * 0.0254;
        }

        return weight / (height * height);
    }
}
