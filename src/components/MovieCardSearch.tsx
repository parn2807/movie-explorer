import { Link } from "react-router-dom";
import MovieCardError from "./MovieCardError.tsx"


type Props = {
    movie: any;
};

export default function MovieCardSearch({ movie }: Props) {
    return (

    
            <Link to={`/movie/${movie.id}`}>
                <MovieCardError 
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                 />

            </Link>
        
    );
}
