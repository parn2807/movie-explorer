import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetail } from "../api/tmdb";

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        fetchMovieDetail(id!).then((res) => setMovie(res.data));
    }, []);

    if (!movie) return null;

    return (
        
        <div className="bg-black min-h-screen text-white p-10">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="mt-4 opacity-80">{movie.overview}</p>

            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="mt-8 rounded w-64"
            />
        </div>
    );
}
