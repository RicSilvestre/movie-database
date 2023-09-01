import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MoviesState } from "./movies-data.interface";

const getMoviesState = createFeatureSelector<MoviesState>('moviesData');

export const getSearchResults = createSelector(
  getMoviesState,
  (state: MoviesState) => state.searchResults
)

export const getSelectedMovie = createSelector(
  getMoviesState,
  (state: MoviesState) => state.selectedMovie
)
