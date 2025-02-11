import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <form className="flex flex-col p-6 gap-3 bg-gray-700 rounded-xl text-white">
                <h3 className="flex flex-row items-center justify-center text-2xl">Login Form</h3>
                <label htmlFor="username">Username</label>
                <input
                    className="mb-3 w-[250px] outline-0 bg-gray-600 rounded-md p-1 px-2 text-white"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Username"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    className="mb-3 w-[250px] outline-0 bg-gray-600 rounded-md p-1 px-2 text-white"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    required
                />
                <button
                    className="bg-white p-1 rounded-md text-purple-600 hover:text-red-500 hover:font-bold transition ease-in 0.2s cursor-pointer"
                    type="submit"
                >
                    Login Now
                </button>

                <h3 className="flex flex-row items-center justify-center">
                    New user?&nbsp;
                    <Link className="underline text-blue-500" to="/register">
                        Register
                    </Link>
                </h3>
            </form>
        </div>
    );
};

export default LoginPage;
