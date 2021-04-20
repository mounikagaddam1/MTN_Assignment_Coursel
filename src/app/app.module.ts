import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavabarComponent } from './navabar/navabar.component';
import { CarousalComponent } from './carousal/carousal.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './modules/material.module';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    CarousalComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    CarouselModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,
  //   NO_ERRORS_SCHEMA
  // ]
})
export class AppModule { }
