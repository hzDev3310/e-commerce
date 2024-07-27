package com.e.commerce.repository;


import com.e.commerce.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    // You can define custom query methods here if needed
}
