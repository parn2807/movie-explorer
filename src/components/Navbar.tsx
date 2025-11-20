import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`
                fixed top-0 w-screen p-4 flex text-center justify-between z-50 
                transition-all duration-300
                ${scrolled
                ? "bg-neutral-900 shadow-lg"
                : "bg-gradient-to-b from-neutral-900 to-transparent"}
            `}
        >
            <Link to="/" className="text-rose-500 hover:text-rose-700 text-4xl font-bold">
                MOVIEFLIX
            </Link>

            <div className="flex gap-6 text-white-500 text-lg pr-12">
                <Link to="/" className="hover:text-rose-500">Home</Link>
                <Link to="/search" className="hover:text-rose-500">Search</Link>
            </div>
        </nav>
    );
}
