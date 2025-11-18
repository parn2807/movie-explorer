import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 bg-black">
            <Link to="/" className="!text-red- text-2xl font-bold">
                MOVIEFLIX
            </Link>

            <div className="flex gap-6 text-white">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
            </div>
        </nav>
    );
}
