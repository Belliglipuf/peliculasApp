import { Component, Input } from '@angular/core';
import { Movie } from '../../../../.history/src/app/interfaces/novedades_response.interface_20230104164346';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  movie: Movie;

}
