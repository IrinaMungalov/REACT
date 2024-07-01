const Item = ( {item, idx, setMessage, orderItem} ) => {
    return (
        <li key={idx}>
            <h2>{item.name}</h2>
            <img src={item.image} width="100" />
            <p>{item.price.amount}{item.price.currency}</p>

            <button
                onClick={
                    async (e) => { // <------------------------- wrapper
                        let itemId = e.target.dataset.productId
                        let data = await orderItem(itemId)
                        setMessage(data.message)
                    } // <------------------------------- /wrapper
                }

                data-product-id={item.id}
            >ORDER</button>
        </li>
    )
}

export default Item