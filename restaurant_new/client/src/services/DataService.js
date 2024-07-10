import { Product } from '../model/Product';
import { Money } from '../model/Money';

const getProductItems = async () => {
    return fetch(`http://localhost:3001/api/products`)
        .then((response) => response.json())

}

const orderItem = async (productId) => {

    // check if the order was created ?
    let orderId = localStorage.getItem('orderId')


    return fetch(`http://localhost:3001/api/order/${orderId}/${productId}`)
        .then((response) => response.json())
}

const getOrderCount = async () => {

    let orderId = localStorage.getItem('orderId')

    return fetch(`http://localhost:3001/api/order/${orderId}/count`)
        .then((response) => response.json())
        
}

export { getProductItems, orderItem, getOrderCount }
