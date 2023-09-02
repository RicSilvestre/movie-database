import { Component, Input, OnChanges, OnInit } from '@angular/core';
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

export class FavoriteButtonComponent implements OnChanges {
  @Input() content: string = '';
  @Input() currentMovie: MovieTitle = {};
  @Input() favorites?: MovieFavoritesList | null = {};
  isFavorite: boolean = false;

  constructor(private store: Store) {}
  
  ngOnChanges(): void {
    const id = this.currentMovie.imdbID as string;
    this.isFavorite = !!this.favorites && !!this.favorites[id];
  }

  toggleFavoriteMovie(): void {
    console.log(this.currentMovie.imdbID);
    const id = this.currentMovie.imdbID as string;
    const { Title, Poster } = this.currentMovie;
    const isFavorite = this.isFavorite;
    let favoritesList = {...(this.favorites || {})} as MovieFavoritesList;

    if (isFavorite && favoritesList) {
      delete favoritesList[id];
    } else {
      favoritesList[id] = { title: Title, poster: Poster }
    }
    this.store.dispatch(updateFavorites({ favoritesList}));
  }
}