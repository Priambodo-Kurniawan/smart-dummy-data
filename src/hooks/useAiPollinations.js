import { useState } from "react";
import { getAIResponse } from "../api/aiService";

export default function useAiPollinations() {
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
    return {
        aiResponse,
        loading,
        getResponse,
        setAIResponse,
    };
}
