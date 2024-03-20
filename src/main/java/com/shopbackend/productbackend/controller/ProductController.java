package com.shopbackend.productbackend.controller;
import com.shopbackend.productbackend.model.Products;
import com.shopbackend.productbackend.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/product")
public class ProductController {
    private static final Logger LOGGER = LoggerFactory.getLogger(ProductController.class);
    @Autowired
    private ProductService productService;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/getAllProducts")
    public List<Products> getAllProduct() {
        LOGGER.info("Solicitud getAllProduct");
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Products getProductById(@PathVariable Long id) {
        LOGGER.info("Solicitud getProductById con ID: {}", id);
        return productService.getProductById(id);
    }
    @PostMapping
    public Products createProduct(@RequestBody Products product) {
        LOGGER.info("Solicitud createProduct");
        return productService.createProduct(product);
    }
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        LOGGER.info("Solicitud deleteProducts con ID: {}", id);
        productService.deleteProducts(id);
    }
}
