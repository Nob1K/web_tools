package com.webtools.backend.repository;

import com.webtools.backend.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Category, Long> {
    List<Transaction> findByDate(LocalDate date);
}