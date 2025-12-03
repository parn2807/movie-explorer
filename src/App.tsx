import { BrowserRouter, Routes, Route,  Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter basename="/movie-explorer">
     <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
