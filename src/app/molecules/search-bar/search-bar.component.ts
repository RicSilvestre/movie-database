import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateMoviesList, updateSelectedMovie } from 'src/app/store/movies-data.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm: string = '';
  private apiKey = '&apikey=11e92a47';
  public url = 'http://www.omdbapi.com/?t='
  /* Search url */
  /*
  public url = 'http://www.omdbapi.com/?s='
  */

  constructor(private store: Store) {}

  getInput(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  async fetchMoviesData(): Promise<void> {
    try {
      const response = await fetch(this.url + this.searchTerm + this.apiKey );
      const data = await response.json();
      /* Adapter for search */
      /* const searchResults = data?.Search || [];
      this.store.dispatch(updateMoviesList({searchResults})); */
      const selectedMovie = data || {};
      this.store.dispatch(updateSelectedMovie({selectedMovie}));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }
}


