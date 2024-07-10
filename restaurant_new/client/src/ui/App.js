import { useState, useEffect } from 'react'

import { SortButton } from './SortButton'
import { Menu } from './Menu'
import { Order } from './Order'

import { getProductItems, getOrderCount } from '../services/DataService'

const App = () => {
    let [sortAsc, setSortAsc] = useState(true)
    let [items, setItems] = useState([])
    let [count, setCount] = useState(0)
    let [total, setTotal] = useState({ totalAmount: 0, totalCurrency: '' })

    useEffect(() => {
        let getData = async () => {            
                let itemsData = await getProductItems()
                setItems(itemsData)

                let orderCount = await getOrderCount()
                setCount(orderCount)          
       }
        getData()
    }, [])

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