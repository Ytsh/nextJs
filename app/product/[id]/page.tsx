'use client';

import { addToCart } from "@/components/actions/cartActions";
import Loader from "@/components/loader";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}
export default function ProductDetailPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter();
  const [product, setProduct] = useState<Product>();
  
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  const dispatch = useAppDispatch()

  const handleAddItem = (item) =>{
    dispatch(addToCart(item))
    console.log(cartItems);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const data = await response.json();
        console.log(data);

        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [])

  if (product) {

    return (
      <div>
        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          onClick={() => router.back()}
        >
          ← Go Back
        </button>
        {cartItems.length}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={product.image}
              alt="Product Image"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h1>
            <p className="mt-4 text-xl font-semibold text-gray-700">
              Price : ${product.price}
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <button
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
              onClick={()=> handleAddItem(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

    );
  }
  return (<><Loader /></>)
}

