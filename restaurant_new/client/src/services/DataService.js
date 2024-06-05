import { Product } from '../model/Product';
import { Money } from '../model/Money';

const getProductItems = (cb) => {
    fetch('http://localhost:3001/api/products')
        .then((response) => response.json())
        .then((items) => cb(items))
        
}

const orderItem = (itemId) => {
    fetch(`http://localhost:3001/api/order/${itemId}`)
        .then((response) => response.json())
        // .then((items) => cb(items))
    // console.log("SENDING ORDER TO THE API SERVER", itemId)
}

export {getProductItems, orderItem}