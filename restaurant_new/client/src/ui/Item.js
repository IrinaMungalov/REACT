const Item = ({ item, idx, setMessage, orderItem, setCount } ) => {
    return (
        <li key={idx}>
            <h2>{item.name}</h2>
            <img src={item.image} width="100" />
            <p>{item.price.amount}{item.price.currency}</p>

            <button
                onClick={
                    async (e) => { // <------------------------- wrapper
                        let productId = e.target.dataset.productId
                        let response = await orderItem(productId)
                        localStorage.setItem('orderId', response.orderId)
                        setMessage(response.message)
                        setCount(response.itemCount)
                    } // <------------------------------- /wrapper
                }
                data-product-id={item.id}
            >ORDER</button>
        </li>
    )
}

export default Item