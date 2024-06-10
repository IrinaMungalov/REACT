import { Product } from '../model/Product';
import { Money } from '../model/Money';

const getProductItems = async () => {
    return fetch('http://localhost:3001/api/products')
        .then((response) => response.json())       
        
}

const orderItem = async (itemId) => {
    return fetch(`http://localhost:3001/api/order/${itemId}`)
        .then((response) => response.json())     
}

export {getProductItems, orderItem}