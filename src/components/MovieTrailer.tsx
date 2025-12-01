import { useEffect, useState } from "react";
import { fetchMovieVideos } from "../api/tmdb";

type Props = {
  movieId: string;
};

export default function MovieTrailer({ movieId }: Props) {
  const [youtubeKey, setYoutubeKey] = useState<string | null>(null);

  useEffect(() => {
    fetchMovieVideos(movieId).then((res) => {
      const trailer = res.data.results.find(
        (v: any) => v.type === "Trailer" && v.site === "YouTube"
      );
      if (trailer) setYoutubeKey(trailer.key);
    });
  }, [movieId]);

  if (!youtubeKey) return null;

  return (
    <div className="w-full aspect-video mt-4">
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${youtubeKey}`}
        allowFullScreen
      />
    </div>
  );
}
