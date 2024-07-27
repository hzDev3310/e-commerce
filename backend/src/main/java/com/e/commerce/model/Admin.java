package com.e.commerce.model;

public class Admin extends User{
    private String email;

    public Admin(String password, String email) {
        super(password);
        this.email = email;
    }

    public Admin() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
