import { useState } from "react";
import { fetchSearch } from "../api/tmdb";
import MovieCardSearch from "../components/MovieCardSearch";

export default function Search() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<any[]>([]);

    const search = async () => {
        const res = await fetchSearch(query);
        setMovies(res.data.results);
    };

    return (
        <div className="flex flex-col min-h-screen w-screen text-white pt-30 items-center">
            <div className="flex justify-between gap-2">
                <input
                    type="text"
                    className="h-10 w-175 p-3 bg-slate-600 rounded"
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
            <div className="grid md:grid-cols-4 grid-cols-4 mt-6 gap-4 p-4">
                {movies.map((m) => (
                    <div key={m.id} className=" object-cover hover:scale-105 place-items-center place-content-center w-50">
                        <MovieCardSearch movie={m} />
                    </div>
                    // <div className="bg-gray-200 place-content-center place-items-center rounded">
                    //     <MovieCardSearch movie={m} key={m.id}/>
                    // </div>

                ))}
            </div>
        </div>
    );
}
