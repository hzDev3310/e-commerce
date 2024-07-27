package com.e.commerce.model;

import jakarta.persistence.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.Date;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer userId ;
    protected String password ;
    protected Date registerDate ;
    private static final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    // No-arg constructor
    protected User() {
    }

    // Parameterized constructor
    public User( String password) {
        this.password = password;
    }


    @PrePersist
    protected void onCreate() {
        if (this.registerDate == null) {
            this.registerDate = new Date(); // Set current date and time if not set
        }
    }

    public Integer getUserId() {
        return userId;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public String getPassword() {
        return password;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    public void setPassword(String password) {
        this.password = passwordEncoder.encode(password);
    }
}
