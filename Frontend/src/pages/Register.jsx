import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const registerUser = async (data) => {
    try {
        const response = await axios.post("/api/register", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Registration failed");
        }
        throw error;
    }
};

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            mutation.mutate({ email, password });
        },
        [email, password]
    );

    const { mutate, isLoading, error } = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            navigate("/login");
        },
        onError: (error) => {
            console.error("Registration error:", error);
        },
    });

    return (
        <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <form
                className="flex flex-col p-6 gap-3 bg-gray-700 rounded-xl text-white"
                onSubmit={handleSubmit}
            >
                <h3 className="flex flex-row items-center justify-center text-2xl">Register Form</h3>

                <label htmlFor="email"> Email</label>
                <input
                    className="mb-3 w-[250px] outline-0 bg-gray-600 rounded-md p-1 px-2 text-white"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    className="mb-3 w-[250px] outline-0 bg-gray-600 rounded-md p-1 px-2 text-white"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="bg-white p-1 rounded-md text-purple-600 hover:text-red-500 hover:font-bold transition ease-in 0.2s cursor-pointer"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Registering..." : "Register"}
                </button>

                {error && (
                    <p className="text-red-500 text-sm">
                        {error instanceof Error ? error.message : "Registration failed"}
                    </p>
                )}

                <h3 className="flex flex-row items-center justify-center">
                    Already registered?&nbsp;
                    <Link className="underline text-blue-500" to="/login">
                        Login
                    </Link>{" "}
                    &nbsp; here.
                </h3>
            </form>
        </div>
    );
};

export default Register;
