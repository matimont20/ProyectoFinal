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
