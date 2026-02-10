export const ProductList = () => {
    const products = [
        { id: 1, name: "Laptop", price: 1000, description: "High performance laptop for gaming and work" },
        { id: 2, name: "Smartphone", price: 500, description: "Latest model smartphone with advanced features" },
        { id: 3, name: "Headphones", price: 200, description: "Noise-cancelling headphones for immersive sound experience" },
    ];

    return (
        <div>
            <h2>Product List</h2>
            {
                products.filter(products => products.price > 300).map((products) => {
                    return (
                    <div>                        
                        <div>{products.id}</div>
                        <h3>{products.name}</h3>
                        <p>{products.description}</p>
                        <p>Price: ${products.price}</p>
                    </div>)                    
                })
            }
        </div>
    )
}