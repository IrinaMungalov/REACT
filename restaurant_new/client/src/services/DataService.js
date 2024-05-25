import { Product } from '../model/Product';
import { Money } from '../model/Money';

const getProductItems = (cb) => {
    fetch('http://localhost:3001/api/products')
        .then((response) => response.json())
        .then((items) => cb(items))

        
}

export {getProductItems}