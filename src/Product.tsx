export const Product = (props: { name: string, price: number, description: string }) => {
    const product = {
        name: props.name,
        price: props.price,
        description: props.description
    }
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}