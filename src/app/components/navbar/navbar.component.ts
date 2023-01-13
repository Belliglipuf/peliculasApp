import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {

  }


  @HostListener('window:scroll', ['$event'])


  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.remove('navbar-inverse-back')
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
      element.classList.add('navbar-inverse-back');
    }
  }


  buscarPelicula(txtBuscar: string) {


    if ( txtBuscar.trim().length === 0){
      return;
    }

    this.router.navigate(['/search', txtBuscar]);

  }

}
