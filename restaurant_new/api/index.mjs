import http from 'node:http'

import {Product} from './model/Product.mjs'
import { Money } from './model/Money.mjs'

const products = [
    new Product(101,"pizza", "https://rabotaryadom.info/wp-content/cache/thumb/43/5c3293a19b8ac43_350x0.jpg",
        new Money(100, 'MDL')
    ),
    new Product(102,"risotto", "https://img.over-blog-kiwi.com/0/65/19/23/20191209/ob_02d697_risotto-parmesan-chorizo.jpg",
        new Money(25, 'MDL')
    ),
    new Product(103,"lasagna", "https://i.pinimg.com/originals/e6/83/4e/e6834ea984f5f066cddc7730137c2eab.jpg",
        new Money(50, 'MDL')
    ),
];

const server = http.createServer((req,res) => {

    res.setHeader("Content-type","application/json")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    
    if (req.url.startsWith("/api/products")) {
        res.end(JSON.stringify(products))
    } else if (req.url.startsWith("/api/order/"))  {
        // HW1: try to extract/capture the id value - using regex

        let itemId = parseInt(req.url.match(/\/api\/order\/(\d+)/)[1])

        // let itemId = parseInt(req.url.replace('/api/order/',''))
        
        res.end(JSON.stringify({
            message: "Order placed successfully!",
            itemId: itemId
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