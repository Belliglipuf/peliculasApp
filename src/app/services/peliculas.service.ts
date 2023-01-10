import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CastingResponse } from '../interfaces/casting_response.interface';
import { MovieResponse } from '../interfaces/movie_response.interface';
import { Movie, NovedadesResponse, SearchResponse } from '../interfaces/novedades_response.interface';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  private mainUrl = 'https://api.themoviedb.org/3/';
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
    return this.http.get<NovedadesResponse>(`${this.mainUrl}movie/now_playing`, {params: this.params})
    .pipe(
      map((resp) => resp.results),
      tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    )
  }

  buscarMovies(termino: string): Observable<Movie[]> {

    const params = {...this.params, page: 1, query: termino}

    return this.http.get<SearchResponse>(`${this.mainUrl}search/movie`, {params: params}).pipe(
      map((resp) => resp.results));
  }


  detailMovie(id: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.mainUrl}movie/${id}`, {params: this.params})
  }

  getCastingMovie(id: number) {
    return this.http.get<CastingResponse>(`${this.mainUrl}movie/${id}/credits`, {params: this.params}).pipe(
      map( resp => resp.cast)
    );
  }


  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

}
