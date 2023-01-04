import { Component } from '@angular/core';
import { Movie } from './interfaces/novedades_response.interface';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  movies: any;

    title = 'peliculasApp';

    constructor(private _peliculasService: PeliculasService){
     this._peliculasService.getMovies().subscribe((peliculas) => {
        this.movies = peliculas;
     });

     console.log(this.movies);

    }

}

