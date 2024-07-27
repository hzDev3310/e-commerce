package com.e.commerce.service;

import com.e.commerce.model.Customer;
import com.e.commerce.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    // Create a new customer
    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    // Retrieve all customers
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    // Retrieve a customer by ID
    public Optional<Customer> getCustomerById(Integer id) {
        return customerRepository.findById(id);
    }

    // Update an existing customer
    public Customer updateCustomer(Integer id, Customer customerDetails) {
        return customerRepository.findById(id).map(customer -> {
            customer.setName(customerDetails.getName());
            customer.setAddress(customerDetails.getAddress());
            customer.setPhoneNumber(customerDetails.getPhoneNumber());
            return customerRepository.save(customer);
        }).orElseThrow(() -> new RuntimeException("Customer not found with id " + id));
    }

    // Delete a customer by ID
    public void deleteCustomer(Integer id) {
        customerRepository.deleteById(id);
    }
}
