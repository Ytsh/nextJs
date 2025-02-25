import { useEffect, useRef, useState } from "react"
import "../styles/main.css"
import Link from "next/link";
import Loader from "./loader";
export default function Main() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    let search=""
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data)
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [])

    function handleSearch() {
        console.log(search);
        const p = products.filter(product => product.title.includes(search))
        console.log(products);

        setFilteredProducts(p);
    }
    const handleChange = (event) => {
        search = event.target.value;
    }

    function SearchBar() {
        return (
            <div className="relative flex flex-1 flex-shrink-0">
                <input
                    type="text"
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    onChange={handleChange}
                />
                <button onClick={() => handleSearch()}>Search</button>
            </div>
        )
    }

    return (
        <>
            {loading ? (<Loader />) : (
                <div className="containerss container max-auto py-10">
                    <SearchBar />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            filteredProducts.map(product => (
                                <div key={product.id}
                                    className="border rounded p-4 shadow-md">
                                    <h2 > {product.title} </h2>
                                    <img src={product.image} alt="" />
                                    <p> {product.price} </p>
                                    <Link href={`/product/${product.id}`}>
                                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
        </>
    )
}