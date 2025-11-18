import { Link } from "react-router-dom";

type Props = {
    movie: any;
};

export default function MovieCard({ movie }: Props) {
    return (

        <div className="w-50 justify-center">
            <Link to={`/movie/${movie.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    className=" rounded hover:scale-105 duration-200 flex-shrink-0 rounded-lg shadow-lg "
                />
            </Link>
        </div>
    );
}
