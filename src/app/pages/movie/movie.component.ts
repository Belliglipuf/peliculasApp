import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Cast } from 'src/app/interfaces/casting_response.interface';
import { MovieResponse } from 'src/app/interfaces/movie_response.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

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

  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService, private location: Location, private router: Router) {

  }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(resp => {
      ({ id: this.id } = resp);
    })

    this.peliculasService.detailMovie(this.id).subscribe(resp => {
      this.movie = resp;

    });

    console.log(this.cargando);

    this.peliculasService.getCastingMovie(this.id).subscribe({
      next: (casting) => {
        this.cargando = true;
        this.casting = casting;
      },
      error: (error) => {
        if (error.status === 404){
          this.router.navigateByUrl('home')
        }
      },
      complete: () => {
        this.cargando = false;
        console.log(this.cargando);
      }
    })
  }

  regresar() {
    this.location.back();
  }

}
