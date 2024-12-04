import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { AIContext } from "../context/AIContext";
import ProductCardLoading from "./ProductCardLoading";
import JSONViewer from "./JSONViewer";

const items = [
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        name: "Langit Cerah Series",
        description: "Jam tangan kayu resin",
        color: "Sky Blue",
        tag: "Basic",
        quantity: 1,
        price: 154,
        hexCode: "#87CEEB",
        currency: "USD",
    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        name: "Hutan Tropis Series",
        description: "Jam tangan kayu resin",
        color: "Forest Green",
        tag: "Pro",
        quantity: 1,
        price: 240.4,
        hexCode: "#228B22",
        currency: "USD",
    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
        name: "Laut Ombak Series",
        description: "Jam tangan kayu resin",
        color: "Royal Blue",
        tag: "Pro",
        quantity: 3,
        price: 150,
        hexCode: "#4169E1",
        currency: "USD",
    },
];

const Cart = () => {
    const [cartItems, setCartItems] = useState(items);
    const [showJSON, setShowJSON] = useState(false);
    const { aiResponse, loading } = useContext(AIContext);

    useEffect(() => {
        if (aiResponse) {
            setCartItems(aiResponse.products);
        }
    }, [aiResponse]);

    return (
        <div className="max-w-3xl w-full mx-auto bg-white md:p-6 p-4 rounded-lg shadow mt-5">
            <h1 className="text-2xl font-bold mb-5">Products</h1>
            {loading &&
                [1, 2, 3].map((index) => <ProductCardLoading key={index} />)}
            {!loading && !cartItems.length && (
                <p className="text-center">No products found</p>
            )}
            {!loading &&
                cartItems.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
            <button
                onClick={() => setShowJSON(!showJSON)}
                className="w-full bg-amber-600 rounded py-2 text-white"
            >
                {showJSON ? "Hide" : "Show"} JSON Data
            </button>
            {showJSON && (
                <div className="mt-4">
                    <JSONViewer data={cartItems} />
                </div>
            )}
        </div>
    );
};

export default Cart;
