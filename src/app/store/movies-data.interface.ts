
export interface MovieSearchResult {
  Title?: string;
  Poster?: string;
}

export interface MovieTitle extends MovieSearchResult {
  Plot?: string;
  Actors?: string;
  Response?: string;
  Error?: string;
  imdbRating?: string;
  imdbID?: string;
}

export interface MovieFavorite {
  id?: string;
  title?: string;
  poster?: string;
}

export interface MovieFavoritesList {
  [key: string]: MovieFavorite;
}

export interface MoviesState {
  searchResults?: [];
  selectedMovie?: MovieTitle;
  favoritesList?: MovieFavoritesList;
}
