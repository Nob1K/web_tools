package com.webtools.backend.services;

import com.webtools.backend.model.Transaction;
import com.webtools.backend.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll()
    }

    public List<Transaction> getTransactionsOnDate(LocalDate date) {
        return transactionRepository.findByDate(date)
    }

    public void createTransaction(Transaction transaction) {
        transactionRepository.save(transaction)
    }

    public void updateTransaction(Long id, Transaction transaction) {
        transaction.setId(id)
        transactionRepository.save(transaction)
    }

    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }
}
