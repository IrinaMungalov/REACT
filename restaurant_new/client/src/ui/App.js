import { useState } from 'react'

import { SortButton } from './SortButton';
import { Menu } from './Menu';

import { getProductItems } from '../services/DataService';


const App = () => {

    let [sortAsc, setSortAsc] = useState(true)
    let [items,setItems]      = useState([])

    getProductItems(setItems)
    
    return (
        <>
            <SortButton sortAsc={sortAsc} setSortAsc={setSortAsc} />
            <Menu items={items} sortAsc={sortAsc} /> 
        </>
    )
}

export {App}