import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 bg-gradient-to-b from-neutral-900 to-transparent w-full p-4 flex text-center justify-between">
            <Link to="/" className="text-rose-500 hover:text-rose-700 text-4xl font-bold">
                MOVIEFLIX
            </Link>

            <div className="flex gap-6 text-white-500 text-lg">
                <Link to="/" className="hover:text-rose-500">Home</Link>
                <Link to="/search" className="hover:text-rose-500">Search</Link>
            </div>
        </nav>
    );
}
