package com.webtools.backend.models;

public class DaysResult {
    private final long days;
    private final String formattedDuration;

    public DaysResult(long days, String formattedDuration) {
        this.days = days;
        this.formattedDuration = formattedDuration;
    }

    public long getDays() {
        return days;
    }

    public String getFormattedDuration() {
        return formattedDuration;
    }
}