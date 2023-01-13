import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/novedades_response.interface';
import { StarRatingComponent } from 'ng-starrating';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {




  @Input()
  movie: Movie;

  @Output() idPelicula = new EventEmitter<number>();

  usuario = {
    name: 'Nombre',
    lastname: 'Apellido',
    role: [
      'admin',
      'user'
    ]
  }

  constructor(private router: Router) {

  }


  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  esAdmin(): boolean {

    return this.usuario.role.includes('admin');

  }


  abrirPelicula(id: number) {
    this.router.navigate(['/movie', id]);
  }

  borrarPelicula(id: number){
    this.idPelicula.emit(id);
  }

}
