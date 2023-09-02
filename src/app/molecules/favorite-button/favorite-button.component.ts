import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MovieFavorite, MovieSearchResult, MovieTitle, MovieFavoritesList } from 'src/app/store/movies-data.interface';
import { getFavoritesList, getSearchResults, getSelectedMovie } from 'src/app/store/movies-data.selectors';
import { Observable } from 'rxjs';
import { updateFavorites } from 'src/app/store/movies-data.actions';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent {
  @Input() content: string = '';
  @Input() isFavorite: boolean = false;
  @Input() currentMovie: MovieTitle = {};
  @Input() favorites?: MovieFavoritesList | null = {};

  constructor(private store: Store) {};

  toggleFavoriteMovie(): void {
    const id = this.currentMovie.imdbID || "";
    const { Title, Poster } = this.currentMovie;
    const isFavorite = this.isFavorite;
    let favoritesList = {...(this.favorites || {}) as MovieFavoritesList};

    if (isFavorite) {
      delete favoritesList[id];
    } else {
      favoritesList[id] = { title: Title, poster: Poster }
    }

    this.store.dispatch(updateFavorites({ favoritesList}));
    this.isFavorite = !isFavorite;
  }
}