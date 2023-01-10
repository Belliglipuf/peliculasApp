import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/novedades_response.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.css']
})



export class MoviesGridComponent {


  @Input()
  movies: Movie [];

  constructor(private router: Router) {

  }

  abrirPelicula(id: number) {
    this.router.navigate(['/movie', id]);
  }



}
