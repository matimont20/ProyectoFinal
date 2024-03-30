CREATE TABLE IF NOT EXISTS APP_PRODUCTS (
    id SERIAL PRIMARY KEY,
    item VARCHAR(255),
    use VARCHAR(255),
    condition VARCHAR(255),
    price DECIMAL(10, 2),
    reservation_date DATE,
    url VARCHAR(255),
    status VARCHAR(255)
);

INSERT INTO APP_PRODUCTS (item, use, condition, price, reservation_date, url, status) VALUES
('Laptop Dell XPS 15', 'Trabajo', 'Reserved', 1499.99, '2024-03-18', 'https://example.com/product/1', 'Activo'),
('Smartphone iPhone 13', 'Comunicación', 'Reserved', 999.99, '2024-03-19', 'https://example.com/product/2', 'Activo'),
('Tablet iPad Air', 'Entretenimiento', 'Reserved', 599.99, '2024-03-20', 'https://example.com/product/3', 'Inactivo'),
('Smartwatch Samsung Galaxy Watch 4', 'Salud y fitness', 'Nuevo', 299.99, '2024-03-21', 'https://example.com/product/4', 'Activo'),
('Monitor LG UltraGear 27GN950-B', 'Juegos', 'available', 799.99, '2024-03-22', 'https://example.com/product/5', 'Activo'),
('Cámara Sony Alpha a7 III', 'Fotografía', 'available', 1999.99, '2024-03-23', 'https://example.com/product/6', 'Inactivo'),
('Auriculares Bose QuietComfort 45', 'Música', 'available', 329.99, '2024-03-24', 'https://example.com/product/7', 'Activo'),
('Teclado mecánico Razer BlackWidow V3', 'Gaming', 'available', 129.99, '2024-03-25', 'https://example.com/product/8', 'Activo'),
('Ratón Logitech MX Master 3', 'Productividad', 'available', 99.99, '2024-03-26', 'https://example.com/product/9', 'Inactivo'),
('Impresora HP LaserJet Pro M404dn', 'Negocios', 'available', 269.99, '2024-03-27', 'https://example.com/product/10', 'Activo');
