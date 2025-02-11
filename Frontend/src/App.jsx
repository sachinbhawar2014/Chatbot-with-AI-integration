import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Navbar = lazy(() => import("./components/Navbar"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Register = lazy(() => import("./pages/Register"));
const Chat = lazy(() => import("./pages/Chat"));

function App() {
    return (
        <div className="flex flex-col">
            <ToastContainer position="top-right" autoClose={1500} pauseOnFocusLoss pauseOnHover />
            <Router>
                <Suspense
                    fallback={
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Loading...
                        </div>
                    }
                >
                    <Navbar />
                    <div className="flex flex-col items-center justify-center min-h-full border-2 border-red-400">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/chat" element={<Chat />} />
                        </Routes>
                    </div>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
