import { useContext } from "react";
import { AIContext } from "../context/AIContext";

const JSONViewer = ({ data }) => {
    const { aiResponse } = useContext(AIContext);
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
            <pre className="bg-gray-800 p-4 text-white rounded-lg">
                {JSON.stringify(aiResponse || data, null, 2)}
            </pre>
        </>
    );
};

export default JSONViewer;
