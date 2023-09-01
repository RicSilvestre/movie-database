import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MovieSearchResult, MovieTitle } from 'src/app/store/movies-data.interface';
import { getSearchResults, getSelectedMovie } from 'src/app/store/movies-data.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  styleUrls: ['./movie-block.component.scss']
})
export class MovieBlockComponent {
  constructor(private store: Store) {};
 selectedMovie$: Observable<MovieTitle | undefined> = this.store.select(getSelectedMovie)
}
