import { CarousalComponent } from './carousal/carousal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel
  @ViewChild(CarousalComponent) CarousalComp: CarousalComponent;
  title = 'carouselExample';
  constructor(){
  }
  ngOnInit(){
  }  
}
