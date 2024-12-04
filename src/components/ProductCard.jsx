import { useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

const ProductCard = ({ item }) => {
    const [qty, setQty] = useState(item.quantity);
    const imagePrompt = `${item.description} ${item.name} with color of ${item.color} with wooden background"`;
    return (
        <div className="flex items-center border-b pb-4 mb-4 md:flex-row flex-col gap-4">
            <div className="flex items-center flex-1 w-full">
                <ImageWithFallback
                    src={`https://pollinations.ai/p/${encodeURIComponent(
                        imagePrompt
                    )}?width=${500}&height=${500}&nologo=true&model=turbo`}
                    alt={item.description}
                    className="w-32 h-32 rounded-md object-cover"
                    errorImage="https://via.placeholder.com/150"
                />
                <div className="ml-4 flex-1">
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-lg font-semibold leading-6">
                        {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                        Color:{" "}
                        <span
                            className="px-3 py-1 rounded-full mr-1 my-1 shadow-md"
                            style={{
                                backgroundColor: item.hexCode,
                            }}
                        ></span>
                        <span className="font-medium">{item.color}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-medium">{item.tag}</span>
                    </p>
                </div>
            </div>
            <div className="flex w-full md:w-2/5 justify-between">
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
                <p className="text-lg font-semibold ml-6 sm:w-32 text-right text-nowrap flex-1">
                    {/* format currency with thousand separator, space between currency and value, without last 2 digit decimals, after "," */}
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: item.currency,
                        maximumFractionDigits: 0,
                    }).format(item.price)}{" "}
                    x {qty}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
