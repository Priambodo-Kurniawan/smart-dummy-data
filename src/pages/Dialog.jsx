import TextBuble from "../components/TextBubble";
import useAiPollinations from "../hooks/useAiPollinations";
import { useState, useEffect } from "react";

export default function Dialog() {
    const [dialog, setDialog] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [dialogTopic, setDialogTopic] = useState("");
    const { getResponse, setAIResponse, loading, aiResponse } =
        useAiPollinations();
    const generateDialog = async (e) => {
        e.preventDefault();
        setActiveIndex(0);
        setAIResponse(null);
        setDialog([]);
        const prompt = `buatkan data dialog yang sesuai dengan topik, berikan data (array of chat) dimana setiap chat memiliki properti:
                {
                    id: "ID unik untuk item (Integer).",
                    name: "Nama user yang mengirimkan chat (String).",
                    gender: "Jenis kelamin dari user, 'boy' atau 'girl' (String)."
                    content: "Isi dari chat (String).",
                    position: "Posisi chat bubble, 'left' atau 'right' (String).",
                    timestamp: "Waktu pengiriman chat, misal 11:46 (String)."
                    status: "Status chat, 'delivered' (String)."
                }. Berikan response dalam format JSON. { title: "Summary judul dari percakapan (String)", chats: [ { chat }, { chat }, ... ] }`;

        await getResponse(
            [
                {
                    question: "apa topik chat yang kamu inginkan?",
                    answer: dialogTopic,
                },
            ],
            prompt
        );
    };

    const nextDialog = () => {
        let newIndex = activeIndex + 1;
        if (newIndex < dialog.length) {
            setActiveIndex(newIndex);
        }

        const chatElements = document.getElementById(`chat-${newIndex}`);
        if (chatElements) {
            chatElements.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        }
    };

    const changeStatus = (index, status) => {
        let chat = dialog[index];
        chat.status = status;
        const newChats = JSON.parse(JSON.stringify(dialog));
        newChats[index] = chat;
        setDialog(newChats);
    };

    useEffect(() => {
        if (aiResponse?.chats) {
            setDialog(aiResponse.chats);
        }
    }, [aiResponse]);

    return (
        <>
            <div className="bg-white w-full max-w-3xl mx-auto rounded-lg shadow overflow-hidden mb-5 md:p-6 p-4 flex flex-col">
                <h1 className="text-2xl font-bold mb-2">Dialog Generator</h1>
                <p className="text-gray-500 text-sm">
                    Buat data dialog yang sesuai dengan topik yang kamu
                    inginkan.
                </p>
                <hr className="my-5" />
                <form onSubmit={generateDialog}>
                    {/* input form with label your job and submit button */}
                    <label
                        htmlFor="job"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Apa topik chat yang kamu inginkan?
                    </label>
                    <textarea
                        id="job"
                        onChange={(e) => setDialogTopic(e.target.value)}
                        value={dialogTopic}
                        className="mt-1 p-2 block w-full h-24 mb-4 rounded-lg border border-gray-200"
                        disabled={activeIndex < dialog.length - 1}
                    ></textarea>
                    {loading && (
                        <button
                            type="button"
                            className="w-full bg-amber-600 rounded py-2 text-white inline-flex items-center justify-center"
                            disabled
                        >
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Processing...
                        </button>
                    )}
                    {!loading && (
                        <button
                            className="w-full bg-amber-600 rounded py-2 text-white"
                            type="submit"
                            disabled={activeIndex < dialog.length - 1}
                        >
                            Submit
                        </button>
                    )}
                </form>
            </div>
            <div className="bg-white flex-1 w-full max-w-3xl mx-auto rounded-lg shadow overflow-hidden mb-5 md:p-6 p-4 flex flex-col">
                {loading && (
                    <div className="flex flex-1 justify-center items-center">
                        loading...
                    </div>
                )}
                {!loading && (
                    <h2 className="font-bold text-center">
                        {aiResponse?.title}
                    </h2>
                )}
                {!loading && dialog.length > 0 && (
                    <div className="py-8 gap-4 flex-col flex flex-1 overflow-auto">
                        {dialog?.map((el, idx) => {
                            return (
                                <TextBuble
                                    chat={el}
                                    key={idx}
                                    activeIndex={activeIndex}
                                    index={idx}
                                    nextDialog={nextDialog}
                                    changeStatus={changeStatus}
                                />
                            );
                        })}
                    </div>
                )}
                {/* no data placeholder */}
                {!loading && dialog.length === 0 && (
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <img
                            width="300"
                            src="https://cdni.iconscout.com/illustration/premium/thumb/business-team-doing-discussion-illustration-download-in-svg-png-gif-file-formats--conversation-working-activities-pack-people-illustrations-3749076.png?f=webp"
                            alt="no data"
                        />
                        {/* informative and call to action to generate dialog label */}
                        <h2 className="text-xl font-bold mt-2">
                            Generate dialog to start
                        </h2>
                    </div>
                )}
            </div>
        </>
    );
}
