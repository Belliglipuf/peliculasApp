import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/novedades_response.interface';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.css']
})
export class MoviesGridComponent {

  @Input()
  movies: Movie [];

}
