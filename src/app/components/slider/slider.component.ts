import { AfterContentInit, AfterViewInit, Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/novedades_response.interface';
import Swiper from 'swiper';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent implements AfterViewInit {

  public mySwiper: Swiper;

  @Input()
  movies: Movie[] = []

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });


  }

  //Slider Controls
  onSlideNext(){this.mySwiper.slideNext()}
  onSlidePrev(){this.mySwiper.slidePrev()}

}
