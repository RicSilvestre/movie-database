import { createReducer, on } from "@ngrx/store";
import { updateMoviesList, updateSelectedMovie, updateFavorites } from "./movies-data.actions";
import { MoviesState } from "./movies-data.interface";

export const initialState: MoviesState = {
  favoritesList: {}
};

export const moviesDataReducer = createReducer(
  initialState,
  on(updateMoviesList, (state, {searchResults}) => ({
    ...state,
    searchResults
  })),
  on(updateSelectedMovie, (state, {selectedMovie}) => ({
    ...state,
    selectedMovie
  })),
  on(updateFavorites, (state, {favoritesList}) => ({
    ...state,
    favoritesList
  }))
)
