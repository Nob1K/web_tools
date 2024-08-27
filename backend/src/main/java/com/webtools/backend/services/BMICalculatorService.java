package com.webtools.backend.services;

import com.webtools.backend.models.BMIResult;
import com.webtools.backend.exceptions.InvalidInputException;
import org.springframework.stereotype.Service;

@Service
public class BMICalculatorService {

    public BMIResult calculateBMI(double weight, String weightUnit, double height, String heightUnit) {
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

        if (height <= 0 || weight <= 0) {
            throw new InvalidInputException("Height and weight must be positive values");
        }

        double bmi = weight / (height * height);
        String category = getBMICategory(bmi);

        return new BMIResult(bmi, category);
    }

    private String getBMICategory(double bmi) {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 25) return "Normal weight";
        if (bmi < 30) return "Overweight";
        return "Obese";
    }
}