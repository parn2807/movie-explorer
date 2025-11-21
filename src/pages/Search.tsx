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
        <div className="min-h-screen w-screen text-white pt-30 ">
            <div className="bg-blue-300 flex items-center justify-center justify-between gap-2">
                <input
                    type="text"
                    className="h-10 w-100 p-3 bg-slate-600 rounded"
                    placeholder="Search movies... "
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button
                    onClick={search}
                    className="hover:bg-rose-900 bg-rose-600 h-10 w-20 rounded"
                >
                    Search
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 mt-6 bg-red-300">
                {movies.map((m) => (
                    <MovieCard movie={m} key={m.id}/>
                ))}
            </div>
        </div>
    );
}
