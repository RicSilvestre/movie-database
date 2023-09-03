import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieTitle, MovieFavoritesList } from 'src/app/store/movies-data.interface';
import { getFavoritesList, getSelectedMovie } from 'src/app/store/movies-data.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  styleUrls: ['./movie-block.component.scss']
})
export class MovieBlockComponent {
  constructor(private store: Store) {};

  selectedMovie$: Observable<MovieTitle | undefined> = this.store.select(getSelectedMovie);
  favorites$: Observable<MovieFavoritesList | undefined> = this.store.select(getFavoritesList);
}
