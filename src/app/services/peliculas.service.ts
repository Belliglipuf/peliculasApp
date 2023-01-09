import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable, of, tap } from 'rxjs';
import { Movie, NovedadesResponse } from '../interfaces/novedades_response.interface';

@Injectable({
  providedIn: 'root'
})



export class PeliculasService {

  private mainUrl = 'https://api.themoviedb.org/3/movie/';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) { }

  get params () {
    return {
      api_key:'231d38bd3926c00c7316804563c2be03',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  getMovies(): Observable<Movie[]> {

     if(this.cargando){
      return of([]);
     }
    this.cargando = true;
    return this.http.get<NovedadesResponse>(`${this.mainUrl}now_playing`, {params: this.params})
    .pipe(
      map((resp) => resp.results),
      tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    )
  }
}
