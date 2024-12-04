import React, { createContext, useState } from "react";
import { getAIResponse } from "../api/aiService";

export const AIContext = createContext();

export const AIProvider = ({ children }) => {
    const [aiResponse, setAIResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const getResponse = async (answers, prompt) => {
        setLoading(true);
        try {
            const response = await getAIResponse(answers, prompt);
            setAIResponse(response);
        } catch (error) {
            console.error("Error getting AI response:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AIContext.Provider value={{ aiResponse, getResponse, loading }}>
            {children}
        </AIContext.Provider>
    );
};
