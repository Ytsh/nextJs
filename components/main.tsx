import { useEffect, useState } from "react"
import "../styles/main.css"
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";


export default function Main(){

    // useState hook use gareko them hai, changing variable ko change reflect 
    // garna use bhako thiyo

    // useEffect hook, API call haru garna help garcha hai

    // const products = [
    //     {id:1, name: "Product 1", price: "20", img:"/a.jpg"},
    //     {id:2, name: "Product 2", price: "20", img:"/a.jpg"},
    //     {id:3, name: "Product 3", price: "20", img:"/a.jpg"},
    //     {id:4, name: "Product 4", price: "20", img:"/a.jpg"}

    // ]

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () =>{
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            }catch(error){
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    },[])

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
        <div className = "containerss container max-auto py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(product =>(
                        <div key={product.id}
                        className="border rounded p-4 shadow-md">
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