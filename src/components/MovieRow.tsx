import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchTrending, fetchPopular, fetchTopRated } from "../api/tmdb";

type Props = {
    title: string;
    fetchFunc: "trending" | "popular" | "topRated";
};

export default function MovieRow({ title, fetchFunc }: Props) {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        const fetchers = {
            trending: fetchTrending,
            popular: fetchPopular,
            topRated: fetchTopRated,
        };
        fetchers[fetchFunc]().then((res) => setMovies(res.data.results));
    }, []);

    return (
        <div className="text-white mt-6">
            <h2 className="text-xl pl-6 font-mediam mb-3">{title}</h2>

            <div className="overflow-x-auto scroll-smooth scrollbar-hide">
                <div className="flex gap-4 pl-6">
                    {movies.map((movie) => (
                        <div key={movie.id} className="flex-shrink-0 min-w-[15%]">
                            <MovieCard movie={movie}  />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
