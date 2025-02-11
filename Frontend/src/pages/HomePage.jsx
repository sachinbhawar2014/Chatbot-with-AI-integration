import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="flex flex-col justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-2xl mb-2">Welcome to ChatBot</h1>

            <Link to="/login">
                <button className="bg-amber-500 p-3 rounded-md  hover:text-red-500 active:bg-red cursor-pointer">
                    Login to continue
                </button>
            </Link>
        </div>
    );
};

export default HomePage;
