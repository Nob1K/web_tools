package com.webtools.backend.controllers;

import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@RestController
@RequestMapping("/api/days-calculator")
public class DaysCalculatorController {
    // Parse inputs and and calculate
    @GetMapping
    public long calculateDays(@RequestParam String startDate, @RequestParam String endDate) {
        LocalDate start = LocalDate.parse(startDate);
        LocalDate end = LocalDate.parse(endDate);
        return ChronoUnit.DAYS.between(start, end);
    }
}
