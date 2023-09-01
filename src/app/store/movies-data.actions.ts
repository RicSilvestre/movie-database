import { createAction, props } from "@ngrx/store";
import { MovieTitle } from "./movies-data.interface";

export const updateMoviesList = createAction('[Movie List] Update Movies List', props<{ searchResults: [] }>())
export const updateSelectedMovie = createAction('[Movie] Select Movie', props<{ selectedMovie: MovieTitle }>())
