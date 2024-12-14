import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="bg-gray-100 md:p-6 p-4 min-h-screen flex items-center flex-col">
            <div className="max-w-3xl w-full mx-auto bg-white rounded-lg shadow overflow-hidden mb-5">
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
}
