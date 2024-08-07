INSERT INTO products VALUES
(
    101, 
    'pizza', 
    'https://rabotaryadom.info/wp-content/cache/thumb/43/5c3293a19b8ac43_350x0.jpg',
    100,
    'MDL'
),
(
    102, 
    'risotto', 
    'https://img.over-blog-kiwi.com/0/65/19/23/20191209/ob_02d697_risotto-parmesan-chorizo.jpg',
    25,
    'MDL'
),
(
    103, 
    'lasagna', 
    'https://i.pinimg.com/originals/e6/83/4e/e6834ea984f5f066cddc7730137c2eab.jpg',
    50,
    'MDL'
);


SELECT SUM(price_amount), price_currency 
FROM products JOIN order_products 
ON order_products.product_id = products.id 
WHERE order_products.order_id = ${orderId} 
GROUP BY (price_currency)`
        