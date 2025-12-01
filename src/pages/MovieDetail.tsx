import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetail } from "../api/tmdb";
import MovieTrailer from "../components/MovieTrailer";



export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        fetchMovieDetail(id!).then((res) => setMovie(res.data));
    }, []);

    if (!movie) return null;

    return (
        <div className="">
            <div className="flex bg-black-300 w-screen min-h-screen items-center justify-center">
                <div className=" w-200">
                    <h1 className="text-4xl text-white font-bold">{movie.title}</h1>
                    <p className="mt-4 text-white-300">{movie.overview}</p>

                    <div className="flex gap-4">
                        <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="rounded w-64 mt-4"
                    />
                        <div className="flex w-screen ">{id && <MovieTrailer movieId={id} />}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
