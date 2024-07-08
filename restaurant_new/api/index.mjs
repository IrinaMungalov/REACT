import http from 'node:http'
import postgres from 'postgres'

import {Product} from './model/Product.mjs'
import { Money } from './model/Money.mjs'



const server = http.createServer(async (req,res) => {

    const sql = postgres('postgres://postgres:qazwsx@localhost:12000/react_restaurant_db')

    res.setHeader("Content-type","application/json")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    
    if (req.url.startsWith("/api/products")) {

        let productData = await sql`SELECT * FROM products`

        let products = productData.map(data => new Product(data.id, data.name, data.image, new Money(data.price_amount, data.price_currency)))

        res.end(JSON.stringify(products))

    } else if (req.url.startsWith("/api/order/"))  {

        // HW1: try to extract/capture the id value - using regex
        // let productId = parseInt(req.url.match(/\/api\/order\/(\d+)/)[1])
        
        let pathParts = req.url.split('/')
        let productId = parseInt(pathParts.pop())
        let orderId = pathParts.pop()

        if (orderId === 'null') {
            orderId = parseInt(`${new Date().getTime()}${parseInt(Math.random() * 1000)}`)
            await sql`INSERT INTO orders(id) VALUES(${orderId})`
        }                     
        
        await sql`INSERT INTO order_products VALUES (${orderId},${productId})`
        let count = await sql`SELECT COUNT(*) FROM order_products WHERE order_id = ${orderId};`
        res.end(JSON.stringify({
            message: "Order placed successfully!",
            productId: productId,
            orderId: orderId,
            itemCount: count[0].count
        }))

    } else {
        res.statusCode = 404
        res.end(JSON.stringify({
            status: 404,
            message: "not found"
        }))
    }
});

server.listen("3001","localhost")