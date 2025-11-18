import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";

export default function Home() {
    return (
        <div>
            <Banner />

            <div className="flex "><MovieRow title="Trending Now" fetchFunc="trending" /></div>
            <div><MovieRow title="Popular" fetchFunc="popular" /></div>
            <div><MovieRow title="Top Rated" fetchFunc="topRated" /></div>

        </div>
    );
}
