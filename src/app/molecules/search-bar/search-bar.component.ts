import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateSelectedMovie } from 'src/app/store/movies-data.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm: string = '';
  url = 'http://www.omdbapi.com/?t='
  private apiKey = '&apikey=11e92a47';

  constructor(private store: Store) {}

  getInput(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  async fetchMoviesData(e: Event): Promise<void> {
    e.preventDefault();
    try {
      const response = await fetch(this.url + this.searchTerm + this.apiKey );
      const data = await response.json();
      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      
      const selectedMovie = data;
      this.store.dispatch(updateSelectedMovie({selectedMovie}));
    } catch (error) {
      console.error( error);
    }
  }
}


