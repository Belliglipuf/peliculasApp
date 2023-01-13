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

  constructor() {

  }

  borrarPelicula(id: number){
    const indexObject = this.movies.findIndex(movie => movie.id === id);
    this.movies.splice(indexObject, 1);
      console.log(this.movies.filter(movie => movie.id === id));
  }



}
