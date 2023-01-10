import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/novedades_response.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public texto: string;
  movies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) {
    this.activatedRoute.params.subscribe((resp) => {
      ({texto: this.texto} = resp);


      this.buscarPeliculas(this.texto);
        // LLAMAR AL SERVICIO
    });
  }

  buscarPeliculas(texto: string ){
    this.peliculasService.buscarMovies(texto).subscribe((resp) => {
      this.movies = resp;
    });
  }

}
