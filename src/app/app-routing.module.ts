import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'movie/:id', component:MovieComponent},
  {path: 'search/:texto', component:SearchComponent},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},
  {path: '**', pathMatch:'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
