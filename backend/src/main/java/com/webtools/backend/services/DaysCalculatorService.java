package com.webtools.backend.services;

import com.webtools.backend.models.DaysResult;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Service
public class DaysCalculatorService {

    // calculate days then return to controller
    public DaysResult calculateDays(LocalDate startDate, LocalDate endDate) {
        long days = ChronoUnit.DAYS.between(startDate, endDate);
        String formattedDuration = formatDuration(days);
        return new DaysResult(days, formattedDuration);
    }

    // build an output string of the days result
    private String formatDuration(long days) {
        long years = days / 365;
        long remainingDays = days % 365;
        long months = remainingDays / 30;
        remainingDays = remainingDays % 30;

        StringBuilder result = new StringBuilder();
        if (years > 0) result.append(years).append(years == 1 ? " year " : " years ");
        if (months > 0) result.append(months).append(months == 1 ? " month " : " months ");
        if (remainingDays > 0 || (years == 0 && months == 0))
            result.append(remainingDays).append(remainingDays == 1 ? " day" : " days");

        return result.toString().trim();
    }
}