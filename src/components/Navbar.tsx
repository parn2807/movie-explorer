import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-70 p-4 flex justify-between">
            <Link to="/" className="text-red-500 text-2xl font-bold">
                MOVIEFLIX
            </Link>

            <div className="flex gap-6 text-white">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
            </div>
        </nav>
    );
}
