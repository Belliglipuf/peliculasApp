import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }


  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=231d38bd3926c00c7316804563c2be03&language=es-ES&page=1')
  }
}
