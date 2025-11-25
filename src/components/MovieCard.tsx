import { Link } from "react-router-dom";

type Props = {
    movie: any;
};

export default function MovieCard({ movie }: Props) {
    return (

        <div className="h-100 flex items-center">
            <Link to={`/movie/${movie.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    className="h-86 rounded hover:scale-105 duration-200 flex-shrink-0 rounded-lg shadow-lg object-cover"
                />
            </Link>
        </div>
    );
}
