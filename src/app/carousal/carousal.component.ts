import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css'],
})
export class CarousalComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  title = 'carouselExample';  
  images : any = [
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg",
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg",
    "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg",
    "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg",  
  ];
  hrefs = ['one', 'two', 'three', 'four', 'five'];
  customOptions: OwlOptions = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
    loop: true,
    dots: false,
    navText: [
      '<i class="fa fa-chevron-circle-left icon-size" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-circle-right icon-size" aria-hidden="true"></i>',
    ],
  };
  options = { fullWidth: false };
  constructor() {}

  ngOnInit() {}

  nextImage() {
    this.owlElement.next([200]);
  }
 }
