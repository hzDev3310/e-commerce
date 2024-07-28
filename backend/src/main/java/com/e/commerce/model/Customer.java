package com.e.commerce.model;

import jakarta.persistence.Entity;


@Entity
public class Customer extends User {
    private String name;
    private String address;
    private String phoneNumber;

    // Protected no-arg constructor required by JPA
    protected Customer() {
        super();
    }

    public Customer(String password, String name, String address, String phoneNumber) {
        super(password);
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
