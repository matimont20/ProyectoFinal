package com.shopbackend.productbackend.service;
import com.shopbackend.productbackend.model.Products;
import com.shopbackend.productbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    public List<Products> getAllProducts() {

        return productRepository.findAll();
    }
    public Products getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Products not found with id: " + id));
    }
    public Products createProduct(Products Products) {
        return productRepository.save(Products);
    }
    public void deleteProducts(Long id) {
        Products Products = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Products not found with id: " + id));
        productRepository.delete(Products);
    }
}
