import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: "en-US",
    },
});

export const fetchTrending = () => tmdb.get("/trending/movie/week");
export const fetchPopular = () => tmdb.get("/movie/popular");
export const fetchTopRated = () => tmdb.get("/movie/top_rated");
export const fetchMovieDetail = (id: string) => tmdb.get(`/movie/${id}`);
export const fetchSearch = (q: string) => tmdb.get(`/search/movie?query=${q}`);
export const fetchMovieVideos = (id: string) => tmdb.get(`/movie/${id}/videos`);
