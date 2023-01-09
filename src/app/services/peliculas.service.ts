import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovedadesResponse } from '../interfaces/novedades_response.interface';

@Injectable({
  providedIn: 'root'
})



export class PeliculasService {

  mainUrl = 'https://api.themoviedb.org/3/movie/';
  apiKey = '231d38bd3926c00c7316804563c2be03'

  constructor(private http: HttpClient) { }




  getMovies(): Observable<NovedadesResponse> {
    return this.http.get<NovedadesResponse>(`${this.mainUrl}now_playing?api_key=${this.apiKey}&language=es-ES&page=1`)
  }
}
