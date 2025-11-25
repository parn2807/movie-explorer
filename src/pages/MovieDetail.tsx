import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetail } from "../api/tmdb";
// import Banner from "../components/Banner";


export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        fetchMovieDetail(id!).then((res) => setMovie(res.data));
    }, []);

    if (!movie) return null;

    return (
        <div className="">
            {/* <Banner /> */}
            <div className="flex bg-black-300 w-screen min-h-screen items-center justify-center">
                <div className=" w-200">
                    <h1 className="text-4xl text-white font-bold">{movie.title}</h1>
                    <p className="mt-4 text-white-300">{movie.overview}</p>

                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="mt-8 rounded w-64"
                    />
                </div>
            </div>
        </div>
    );
}
