import { BrowserRouter } from "react-router";
import { AIProvider } from "./context/AIContext";
import MainRoutes from "./routes";

function App() {
    return (
        <BrowserRouter>
            <AIProvider>
                <MainRoutes />
            </AIProvider>
        </BrowserRouter>
    );
}

export default App;
