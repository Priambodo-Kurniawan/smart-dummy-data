import Cart from "./components/Cart";
import Form from "./components/Form";
import { AIProvider } from "./context/AIContext";

function App() {
    return (
        <AIProvider>
            <div className="bg-gray-100 md:p-6 p-4 min-h-screen flex items-center flex-col">
                <Form />
                <Cart />
            </div>
        </AIProvider>
    );
}

export default App;
