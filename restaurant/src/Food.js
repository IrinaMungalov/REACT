const Food = ({ name, image, width, price, ingredients }) => {
    return (
        <div>            
            <hr />
            <h2>{name}</h2>
            <img src={image} alt={name} width={width} />
            <p>Price: {price}</p>
            <p>Ingredients: {ingredients}</p>
            
        </div>
    )
}

export default Food