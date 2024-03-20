CREATE TABLE IF NOT EXISTS APP_PRODUCTS (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    item VARCHAR(255),
    use VARCHAR(255),
    condition VARCHAR(255),
    price DECIMAL(10, 2),
    quantity INT
);

INSERT INTO APP_PRODUCTS (name, item, use, condition, price, quantity) VALUES
('MacBook Pro', 'Laptop', 'Work', 'New', 1999.99, 50),
('iPhone 13', 'Smartphone', 'Communication', 'New', 999.99, 100),
('iPad Air', 'Tablet', 'Entertainment', 'New', 599.99, 75),
('Samsung Galaxy S21', 'Smartphone', 'Communication', 'New', 899.99, 80),
('Google Pixel 6', 'Smartphone', 'Communication', 'New', 699.99, 60),
('Sony PlayStation 5', 'Gaming Console', 'Entertainment', 'New', 499.99, 50),
('Microsoft Xbox Series X', 'Gaming Console', 'Entertainment', 'New', 499.99, 50),
('Dell XPS 15', 'Laptop', 'Work', 'New', 1499.99, 60),
('Lenovo ThinkPad X1 Carbon', 'Laptop', 'Work', 'New', 1299.99, 70);
