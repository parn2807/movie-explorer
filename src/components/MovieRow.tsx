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
        <div className="text-white px-6 mt-6">
            <h2 className="text-xl font-mediam mb-3">{title}</h2>

            <div className="flex scroll-smooth flex-shrink-0 bg-red-300  gap-4 ">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
