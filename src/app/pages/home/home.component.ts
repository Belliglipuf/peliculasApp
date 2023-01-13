import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie, NovedadesResponse } from 'src/app/interfaces/novedades_response.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlide: Movie[] = [];
  public cargandoGrid: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1500;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      this.masPeliculas();
    }
  }

  constructor(private _peliculasService: PeliculasService) {

  }

  ngOnInit(): void {
    this._peliculasService.getMovies().subscribe((movies) => {
      this.moviesSlide = movies;
      this.movies = movies;
      console.log(this.movies);
    });
  }

  masPeliculas() {
    if (!this._peliculasService.cargando) {
      this._peliculasService.getMovies().subscribe({
        next: (movies) => {
          this.cargandoGrid = true;
          console.log('Cargando peliculas');
          this.movies.push(...movies)
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.cargandoGrid = false;
          console.log('Dejó de carga');
        }
      })
    } else {return;}
  }

  ngOnDestroy(): void {
    this._peliculasService.resetCarteleraPage();
  }

}
