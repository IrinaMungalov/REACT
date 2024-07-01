import { useState, useEffect } from 'react'

import { SortButton } from './SortButton';
import { Menu } from './Menu';
import { Order } from './Order';

import { getProductItems } from '../services/DataService';


const App = () => {

    let [sortAsc, setSortAsc] = useState(true)
    let [items,setItems]      = useState([])

    useEffect(() => {        
        (async () => {
           let itemsData = await getProductItems()
           setItems(itemsData)
        })()    
    },[]) // single call
    
    
    return (
        <>
            <SortButton sortAsc={sortAsc} setSortAsc={setSortAsc} />
            <Order />
            <Menu items={items} sortAsc={sortAsc} /> 
        </>
    )
}

export {App}