import http from 'node:http'
import postgres from 'postgres'

import { Product } from './model/Product.mjs'
import { Money } from './model/Money.mjs'



const server = http.createServer(async (req, res) => {

    const sql = postgres('postgres://postgres:qazwsx@localhost:12000/react_restaurant_db')

    res.setHeader("Content-type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")

    if (req.url.startsWith("/api/products")) {

        let productData = await sql`SELECT * FROM products`

        let products = productData.map(data => new Product(data.id, data.name, data.image, new Money(data.price_amount, data.price_currency)))

        res.end(JSON.stringify(products))

    } else if (req.url.startsWith("/api/pay/")) {

        let pathParts = req.url.split('/')
        let orderId = parseInt(pathParts.pop())  

        let rawData = ''
        req.on('data', chunk => {
            rawData += chunk
        })

        req.on('end', async () => {
            let data = JSON.parse(rawData)
            let {email, phone } = data
            await sql`UPDATE orders SET client_email=${email}, client_phone=${phone} WHERE id = ${orderId}`


            // S2S

            // 1. connect to the payment api (paypal)
            // 2. create an order  + orderId
            // 3. get the payent link
            // 4. return
            // HW*: an alternative gateway


            res.end(JSON.stringify({
                status: 200,
                message: "order updated successfully!"
                // paymentLink: ...
            }))
        })

    } else if (req.url.startsWith("/api/order/count/")) {

        let pathParts = req.url.split('/');
        let orderId = parseInt(pathParts.pop());

        let count = await sql`SELECT COUNT(*) FROM order_products WHERE order_id = ${orderId}`
        let total = await sql`SELECT SUM(price_amount), price_currency 
                          FROM products JOIN order_products 
                          ON order_products.product_id 
                          = products.id WHERE order_products.order_id = ${orderId} GROUP BY (price_currency)`

        res.end(JSON.stringify({
            itemCount: count[0].count,
            totalAmount: total[0].sum,
            totalCurrency: total[0].price_currency
        }))            

    } else if (req.url.startsWith("/api/order/")) {

        // HW: try to extract/capture the id value - using regex
        // let productId = parseInt(req.url.match(/\/api\/order\/(\d+)/)[1])

        let pathParts = req.url.split('/')
        let productId = parseInt(pathParts.pop())
        let orderId = pathParts.pop()

        if (orderId === 'null') {
            orderId = parseInt(`${new Date().getTime()}${parseInt(Math.random() * 1000)}`)
            await sql`INSERT INTO orders(id) VALUES(${orderId})`
        }

        await sql`INSERT INTO order_products VALUES (${orderId},${productId})`
        let count = await sql`SELECT COUNT(*) FROM order_products WHERE order_id = ${orderId}`
        let total = await sql`SELECT SUM(price_amount), price_currency 
                              FROM products JOIN order_products 
                              ON order_products.product_id 
                              = products.id WHERE order_products.order_id = ${orderId} GROUP BY (price_currency)`

        res.end(JSON.stringify({
            message: "Order placed successfully!",
            productId: productId,
            orderId: orderId,
            itemCount: count[0].count,
            totalAmount: total[0].sum,
            totalCurrency: total[0].price_currency
        }))

    } else {
        res.statusCode = 404
        res.end(JSON.stringify({
            status: 404,
            message: "not found"
        }))
    }
});

server.listen("3001", "localhost")