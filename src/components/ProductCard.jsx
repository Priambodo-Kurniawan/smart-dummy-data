import { useState } from "react";

const ProductCard = ({ item }) => {
    const [qty, setQty] = useState(item.quantity);
    const imagePrompt = `${item.description} ${item.name} with color of ${item.color} with wooden background"`;
    return (
        <div className="flex items-center border-b pb-4 mb-4 md:flex-row flex-col gap-4">
            <div className="flex items-center flex-1 w-full">
                <img
                    src={`https://pollinations.ai/p/${encodeURIComponent(
                        imagePrompt
                    )}?width=${500}&height=${500}&nologo=true&model=turbo`}
                    alt={item.description}
                    className="w-32 h-32 rounded-md object-cover"
                />
                <div className="ml-4 flex-1">
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                        Color:{" "}
                        <span
                            className="px-3 py-1 rounded-full mr-1"
                            style={{
                                backgroundColor: item.color
                                    .toLowerCase()
                                    .split(" ")
                                    .join(""),
                            }}
                        ></span>
                        <span className="font-medium">{item.color}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-medium">{item.tag}</span>
                    </p>
                </div>
            </div>
            <div className="flex w-full md:w-1/3 justify-between">
                <div className="flex items-center">
                    <button
                        className="text-gray-500 px-2"
                        onClick={() => {
                            let newQty = qty > 1 ? qty - 1 : 1;
                            setQty(newQty);
                        }}
                    >
                        -
                    </button>
                    <span className="px-4">{qty}</span>
                    <button
                        className="text-gray-500 px-2"
                        onClick={() => {
                            let newQty = qty < 10 ? qty + 1 : 10;
                            setQty(newQty);
                        }}
                    >
                        +
                    </button>
                </div>
                <p className="text-lg font-semibold ml-6 sm:w-32 text-right">
                    ${item.price * qty} USD
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
