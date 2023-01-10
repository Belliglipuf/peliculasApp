import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastingResponse } from 'src/app/interfaces/casting_response.interface';
import { MovieResponse } from 'src/app/interfaces/movie_response.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Cast } from '../../../../.history/src/app/interfaces/casting_response.interface_20230110162619';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id: number;

  movie: MovieResponse;
  casting: Cast[];
  cargando: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService, private location: Location){

  }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe( resp => {
      ({id: this.id} = resp);
    })

    this.cargando = true;
    this.peliculasService.detailMovie(this.id).subscribe(resp => {
      this.movie = resp;
      this.cargando = false;
    });

    this.peliculasService.getCastingMovie(this.id).subscribe(resp => {
      if (!this.cargando) this.cargando = true;
      this.casting = resp;
    })

  }


  regresar() {
      this.location.back();
  }

}
