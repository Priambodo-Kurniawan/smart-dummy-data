import { useContext, useEffect, useState } from "react";
import { AIContext } from "../context/AIContext";

const Form = () => {
    // get job from search query params url
    const urlParams = new URLSearchParams(window.location.search);
    const job = urlParams.get("job");

    const [yourJob, setYourJob] = useState(job || "");
    const { getResponse, loading } = useContext(AIContext);

    const handleAnswerSubmit = async (e) => {
        e.preventDefault();
        try {
            const prompt = `buatkan dummy data produk yang cocok sesuai dengan data user, berikan 3 data (array of products) dimana setiap produk memiliki properti:
                {
                    id: "ID unik untuk item (Integer).",
                    image: "https://via.placeholder.com/150 (String).",
                    name: "Nama produk atau seri (String).",
                    description: "Deskripsi produk (String). Max 50 character.",
                    color: "Warna utama produk (String).",
                    hexCode: "Kode warna hex (String).",
                    tag: "Kategori atau label produk (String).",
                    quantity: "Jumlah stok tersedia (Integer). Max 10 items",
                    price: "Harga produk (Integer).",
                    currency: "Mata uang harga produk (String).",
                }. Berikan response dalam format JSON. { products: [ { product1 }, { product2 }, { product3 } ] }`;

            // set yourJob to query search params url (URLSearchParams)
            window.history.replaceState(
                null,
                "",
                `?job=${encodeURIComponent(yourJob)}`
            );

            await getResponse(
                [{ question: "apa pekerjaanmu?", answer: yourJob }],
                prompt
            );
        } catch (error) {
            console.error("Error getting AI response:", error.message);
        }
    };

    useEffect(() => {
        if (job) {
            // trigger submit button form if job is available
            const button = document.querySelector("button[type=submit]");
            button.click();
        }
    }, []);

    return (
        <div className="max-w-3xl w-full mx-auto bg-white md:p-6 p-4 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-2">Membuat Dummy Data</h1>
            <p className="text-gray-500 text-sm">
                Ketika kamu mengisi form input di bawah dan menekan tombol
                submit, data tersebut akan dikirimkan ke AI dan AI akan
                mengenerate data dummy produk sesuai dengan tema data
                pekerjaanmu.
            </p>
            <hr className="my-5" />
            <form onSubmit={handleAnswerSubmit}>
                {/* input form with label your job and submit button */}
                <label
                    htmlFor="job"
                    className="block text-sm font-medium text-gray-700"
                >
                    Apa pekerjaanmu?
                </label>
                <input
                    type="text"
                    id="job"
                    name="job"
                    value={yourJob}
                    onChange={(e) => setYourJob(e.target.value)}
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    disabled={loading}
                />
                {loading && (
                    <button
                        type="button"
                        className="w-full bg-amber-600 rounded py-2 text-white mt-4 inline-flex items-center justify-center"
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
                        className="w-full bg-amber-600 rounded py-2 text-white mt-4"
                        type="submit"
                    >
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
};

export default Form;
