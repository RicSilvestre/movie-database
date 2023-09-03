import { createAction, props } from "@ngrx/store";
import { MovieFavorite, MovieTitle, MovieFavoritesList } from "./movies-data.interface";

export const updateMoviesList = createAction('[Movie List] Update Movies List', props<{ searchResults: [] }>());
export const updateSelectedMovie = createAction('[Movie] Select Movie', props<{ selectedMovie: MovieTitle }>());
export const updateFavorites = createAction('[Movie Favorites] Update Favorites', props<{ favoritesList: MovieFavoritesList }>());
