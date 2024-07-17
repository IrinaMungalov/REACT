import { useState, useEffect } from 'react'

import { SortButton } from './SortButton';
import { Menu } from './Menu';
import { Order } from './Order';

import { getProductItems, getOrderCount } from '../services/DataService';

// HW1: using new function from data services and use effect hook 
//      load order item count and render it

const App = () => {

    let [sortAsc, setSortAsc] = useState(true)
    let [items, setItems] = useState([])
    let [count, setCount] = useState(0)
    let [total, setTotal] = useState({})

    useEffect(() => {
        (async () => {
            let getData = await getProductItems()
            setItems(getData)

            let orderInfo = await getOrderCount()
            setCount(orderInfo.itemCount)
            setTotal({ totalAmount: orderInfo.totalAmount, totalCurrency: orderInfo.totalCurrency })
        })()
    }, []) // single call

    const setOrderInfo = ({ itemCount, totalAmount, totalCurrency }) => {
        setCount(itemCount)
        setTotal({ totalAmount, totalCurrency })
    }

    return (
        <>
            <SortButton sortAsc={sortAsc} setSortAsc={setSortAsc} />
            <Order count={count} total={total} />
            <Menu items={items} sortAsc={sortAsc} setOrderInfo={setOrderInfo} />
        </>
    )
}

export { App }