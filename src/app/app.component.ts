import { Component } from '@angular/core';
import { Movie } from './interfaces/novedades_response.interface';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'peliculasApp';
}

