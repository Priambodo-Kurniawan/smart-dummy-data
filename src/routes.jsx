import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import DummyData from "./pages/DummyData";
import Dialog from "./pages/Dialog";

export default function MainRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/dummy-data" element={<DummyData />} />
                <Route path="/dialog" element={<Dialog />} />
            </Route>
        </Routes>
    );
}
