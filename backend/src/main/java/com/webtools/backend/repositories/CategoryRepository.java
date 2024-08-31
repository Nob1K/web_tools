package com.webtools.backend.repository;

import com.webtools.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

// use jpa default for now
public interface CategoryRepository extends JpaRepository<Category, Long> {
}