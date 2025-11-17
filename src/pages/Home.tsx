import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";

export default function Home() {
    return (
        <div className="bg-black min-h-screen">
            <Banner />

            <MovieRow title="Trending Now" fetchFunc="trending" />
            <MovieRow title="Popular" fetchFunc="popular" />
            <MovieRow title="Top Rated" fetchFunc="topRated" />
        </div>
    );
}
