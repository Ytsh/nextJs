import "../styles/main.css"


export default function Main(){

    const products = [
        {id:1, name: "Product 1", price: "20", img:"/a.jpg"},
        {id:2, name: "Product 2", price: "20", img:"/a.jpg"},
        {id:3, name: "Product 3", price: "20", img:"/a.jpg"},
        {id:4, name: "Product 4", price: "20", img:"/a.jpg"}

    ]

    const GetAllProduct = () =>{
        products.map(product =>{
            <div key={product.id}
            className="border rounded-lg p-4 shadow-md w-60">
                <img src={product.img} alt="" />
                <h2 > {product.name} </h2>
                <p> {product.price} </p>
            </div>
        })
    }

    return(
        <div className = "containerss">
            <div className="flex flex-row gap-4 p-4">
                <div className="border rounded-lg p-4 shadow-md w-60">1</div>
                <div className="border rounded-lg p-4 shadow-md w-60">2</div>
                <div className="border rounded-lg p-4 shadow-md w-60">3</div>
                <div className="border rounded-lg p-4 shadow-md w-60">4</div>
                {
                    products.map(product =>(
                        <div key={product.id}
                        className="border rounded-lg p-4 shadow-md w-60">
                            <img src={product.img} alt="" />
                            <h2 > {product.name} </h2>
                            <p> {product.price} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}