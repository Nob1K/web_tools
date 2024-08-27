package com.webtools.backend.controllers;

import com.webtools.backend.models.DaysResult;
import com.webtools.backend.services.DaysCalculatorService;
import com.webtools.backend.exceptions.InvalidInputException;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/days-calculator")
public class DaysCalculatorController {

    private final DaysCalculatorService daysService;

    // constructor
    @Autowired
    public DaysCalculatorController(DaysCalculatorService daysService) {
        this.daysService = daysService;
    }

    // calls service
    @GetMapping
    public DaysResult calculateDays(
            @RequestParam String startDate,
            @RequestParam String endDate) {
        LocalDate start = LocalDate.parse(startDate);
        LocalDate end = LocalDate.parse(endDate);
        return daysService.calculateDays(start, end);
    }

    // error handler
    @ExceptionHandler(InvalidInputException.class)
    public ResponseEntity<String> handleInvalidInputException(InvalidInputException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }
}
