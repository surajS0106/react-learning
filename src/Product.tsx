export const Product = ( {name, price, description}: {name: string, price: number, description: string} ) => {
    const product = {
        name: name,
        price: price,
        description: description
    }
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}