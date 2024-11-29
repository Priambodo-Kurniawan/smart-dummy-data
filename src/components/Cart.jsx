import React from "react";
import ProductCard from "./ProductCard";

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
    },
];

const Cart = () => {
    return (
        <div className="bg-gray-100 md:p-6 p-4 min-h-screen flex items-center">
            <div className="max-w-3xl w-full mx-auto bg-white md:p-6 p-4 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-5">Products</h1>
                {items.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
                <button className="w-full bg-amber-600 rounded py-2 text-white">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
