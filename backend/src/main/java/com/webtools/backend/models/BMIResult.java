package com.webtools.backend.models;

public class BMIResult {
    private final double bmi;
    private final String category;

    public BMIResult(double bmi, String category) {
        this.bmi = bmi;
        this.category = category;
    }

    public double getBmi() {
        return bmi;
    }

    public String getCategory() {
        return category;
    }
}