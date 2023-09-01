
export interface MovieSearchResult {
  Title?: string;
  Poster?: string;
}

export interface MovieTitle extends MovieSearchResult {
  Plot?: string;
  Actors?: string;
  Response?: string;
  imdbRating?: string;
}

export interface MoviesState {
  searchResults?: [];
  selectedMovie?: MovieTitle;
}
