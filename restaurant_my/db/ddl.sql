CREATE TABLE products (
    id int PRIMARY KEY,
    name varchar(100),
    image varchar(300),
    price_amount int,
    price_currency varchar(4)
);

CREATE TABLE orders (
    id bigint PRIMARY KEY,
    client_name varchar(100),
    client_email varchar(100),
    client_phone varchar(30)    
);

CREATE TABLE order_products (
    order_id bigint,
    product_id int  
);