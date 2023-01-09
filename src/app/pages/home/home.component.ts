import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/novedades_response.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public movies: Movie [] = [];


    constructor(private _peliculasService: PeliculasService){

    }

    ngOnInit(): void {
      this._peliculasService.getMovies().subscribe((respuesta) => {
        this.movies = respuesta.results;
        console.log(this.movies);
     });
    }

}
