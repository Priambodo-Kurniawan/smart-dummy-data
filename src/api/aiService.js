import axios from "axios";

/**
 * Kirim jawaban user ke AI Pollinations API
 * @param {Array} answers - Ringkasan jawaban user (array of objects: { question, answer })
 * @param {string} prompt - Prompt untuk AI agar dapat mengolah data
 * @returns {Promise<string>} - Respons dari AI
 */
export async function getAIResponse(answers, prompt) {
    try {
        const userContent = answers
            .map(({ question, answer }) => `${question} ${answer}`)
            .join("\n");

        const requestBody = {
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: `${prompt}\n\n${userContent}` },
            ],
            model: "openai",
            seed: 42,
            jsonMode: true,
        };

        const response = await axios.post(
            "https://text.pollinations.ai/",
            requestBody
        );

        return response.data; // Adjust if response structure differs
    } catch (error) {
        console.error("Error during API call:", error.message);
        throw error;
    }
}
