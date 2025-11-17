import { useState } from "react";
import { fetchSearch } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

export default function Search() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<any[]>([]);

    const search = async () => {
        const res = await fetchSearch(query);
        setMovies(res.data.results);
    };

    return (
        <div className="bg-black min-h-screen text-white p-6">
            <input
                type="text"
                className="w-full p-3 bg-gray-800 rounded"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button
                onClick={search}
                className="bg-red-600 px-4 py-2 mt-4 rounded"
            >
                Search
            </button>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                {movies.map((m) => (
                    <MovieCard movie={m} key={m.id} />
                ))}
            </div>
        </div>
    );
}
