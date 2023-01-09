import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';






@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    SliderComponent,
    MoviesGridComponent
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    MoviesGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
