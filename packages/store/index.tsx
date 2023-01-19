import * as React from 'react';
import { create } from 'zustand';

export type Movie = {
	title: string;
	image: string;
};

export const useStore = create<{
	movies: Movie[];
	addMovie: (movies: Movie) => void;
}>((set) => ({
	movies: [],
	addMovie: (movie) => set((state) => ({ movies: [movie, ...state.movies] })),
}));
