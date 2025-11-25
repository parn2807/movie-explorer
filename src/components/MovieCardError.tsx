import { MdLocalMovies } from "react-icons/md";
import React, {  } from "react";


type Props = {
  src: string;
  alt?: string;
  size?: number; // ขนาด icon fallback
};

export default function MovieCardError({ src, alt = "Movie poster", size = 80 }: Props) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <>
      {!imgError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover rounded"
        />
      ) : (
        <div className="flex justify-center items-center w-full h-full bg-gray-200 rounded">
          <MdLocalMovies size={size} className="text-gray-500" />
        </div>
      )}
    </>
  );
}
