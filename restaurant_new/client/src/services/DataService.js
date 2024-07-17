import { Product } from '../model/Product';
import { Money } from '../model/Money';

const getProductItems = async () => {
    return fetch('http://localhost:3001/api/products')
        .then((response) => response.json())

}

const orderItem = async (productId) => {

    // check if the order was created ?
    let orderId = localStorage.getItem('orderId')

    return fetch(`http://localhost:3001/api/order/${orderId}/${productId}`)
        .then((response) => response.json())
}



// HW*: create the function payOrder()


const getOrderCount = async () => {

    let orderId = localStorage.getItem('orderId')

    if (!orderId) 
        return { itemCount: 0, totalAmount: 0, totalCurrency: 'USD' }

    return fetch(`http://localhost:3001/api/order/count/${orderId}`)
        .then((response) => response.json())
}

export { getProductItems, orderItem, getOrderCount }