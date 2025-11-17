import { create } from "zustand";

type Movie = {
    id: number;
    title: string;
    poster_path: string;
};

type FavState = {
    favorites: Movie[];
    toggleFavorite: (movie: Movie) => void;
};

export const useFavoriteStore = create<FavState>((set, get) => ({
    favorites: [],
    toggleFavorite: (movie) => {
        const exists = get().favorites.find((m) => m.id === movie.id);
        if (exists) {
            set({
                favorites: get().favorites.filter((m) => m.id !== movie.id),
            });
        } else {
            set({
                favorites: [...get().favorites, movie],
            });
        }
    },
}));
