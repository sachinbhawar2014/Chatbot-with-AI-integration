import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
const Navbar = () => {
    return (
        <nav className="bg-gray-600 flex flex-row items-center justify-between p-2 align-middle">
            <div className="flex flex-row items-center gap-2 text-white">
                <div className="h-[40px]">
                    <img className="size-[40px] rounded-2xl" src={logo} alt="Logo" />
                </div>
                <div>ChatBot</div>
            </div>
            <div>
                <Link to="/" className="text-white mr-4 active:text-red-500 hover:text-purple-400">
                    Home
                </Link>
                <Link to="/login" className="text-white mr-4 active:text-red-500 hover:text-purple-400">
                    Login
                </Link>
                <Link to="/register" className="text-white mr-4 active:text-red-500 hover:text-purple-400">
                    Register
                </Link>
                <Link to="/chat" className="text-white active:text-red-500 hover:text-purple-400">
                    Chat
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
