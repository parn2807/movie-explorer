import { Link } from "react-router-dom";

type Props = {
    movie: any;
};

export default function MovieCard({ movie }: Props) {
    return (
        <Link to={`/movie/${movie.id}`}>
            <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                className="w-40 rounded hover:scale-105 duration-200"
            />
        </Link>
    );
}
