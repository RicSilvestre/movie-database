import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieFavorite, MovieFavoritesList } from 'src/app/store/movies-data.interface';
import { getFavoritesList } from 'src/app/store/movies-data.selectors';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent {
  favorites$: Observable<MovieFavoritesList | undefined> = this.store.select(getFavoritesList);

  constructor(private store: Store) {};

  hasFavorites(el: MovieFavoritesList) {
    return Object.keys(el).length !== 0;
  }
}
