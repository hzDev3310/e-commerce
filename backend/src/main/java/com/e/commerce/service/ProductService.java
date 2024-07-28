package com.e.commerce.service;

import com.e.commerce.model.Product;
import com.e.commerce.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Create a new product
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    // Retrieve all products

    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }
    public Page<Product> getProductsByCategory(String category, Pageable pageable) {
        return productRepository.findByCategory(category, pageable);
    }

    // Retrieve a product by ID
    public Optional<Product> getProduct(Integer id) {
        return productRepository.findById(id);
    }

    // Update an existing product
    public Product updateProduct(Integer id, Product productdetails) {
        return productRepository.findById(id).map(product -> {
            product.setName(productdetails.getName());
            product.setDescription(productdetails.getDescription());
            product.setPrice(productdetails.getPrice());
            product.setQuantity(productdetails.getQuantity());
            product.setCategory(productdetails.getCategory());
            product.setImageId(productdetails.getImageId());
            return productRepository.save(product);
        }).orElseThrow(() -> new RuntimeException("Product not found with id " + id));
    }

    // Delete a product by ID
    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }
}
