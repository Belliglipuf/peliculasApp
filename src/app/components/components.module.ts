import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';






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
    RouterModule
  ]
})
export class ComponentsModule { }
