import { useContext } from "react";
import { AIContext } from "../context/AIContext";

const JSONViewer = ({ data }) => {
    const { aiResponse } = useContext(AIContext);
    const json = aiResponse || data;
    json.products = json.products.map((product) => {
        let image = `${product.description} ${product.name} with color of ${product.color} with wooden background"`;
        return {
            ...product,
            image: `https://pollinations.ai/p/${encodeURIComponent(
                image
            )}?width=${500}&height=${500}&nologo=true&model=turbo`,
        };
    });
    return (
        <>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-md font-bold">JSON Data</h2>
                <button
                    className="text-sm text-gray-400"
                    onClick={() => {
                        navigator.clipboard.writeText(
                            JSON.stringify(aiResponse || data, null, 2)
                        );
                        alert("JSON data copied to clipboard");
                    }}
                >
                    📋 Copy JSON Data
                </button>
            </div>
            <pre className="bg-gray-800 p-4 text-white rounded-lg overflow-x-auto">
                {JSON.stringify(aiResponse || data, null, 2)}
            </pre>
        </>
    );
};

export default JSONViewer;
