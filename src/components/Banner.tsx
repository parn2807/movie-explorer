import { useEffect, useState } from "react";
import { fetchTrending } from "../api/tmdb";

export default function Banner() {
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        fetchTrending().then((res) => {
            const random = res.data.results[Math.floor(Math.random() * res.data.results.length)];
            setMovie(random);
        });
    }, []);

    if (!movie) return null;

    return (
        <div
            className="h-[70vh] bg-cover bg-center text-white flex items-end p-12"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            }}
        >
            <div>
                <h1 className="text-4xl font-bold">{movie.title}</h1>
                <p className="max-w-xl mt-4 opacity-80">{movie.overview}</p>
            </div>
        </div>
    );
}
