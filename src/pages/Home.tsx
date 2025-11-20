import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";

export default function Home() {
    return (
        <div className="w-full">
            <Banner />

            <div><MovieRow title="Trending Now" fetchFunc="trending" /></div>
            <div><MovieRow title="Popular" fetchFunc="popular" /></div>
            <div><MovieRow title="Top Rated" fetchFunc="topRated" /></div>

        </div>
    );
}
