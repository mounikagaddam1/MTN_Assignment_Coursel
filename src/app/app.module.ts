import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CuroselComponent } from './curosel/curosel.component';
import { CuroselCard } from './card/card.component';
import { CardforcuroselComponent } from './cardforcurosel/cardforcurosel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    CuroselComponent,
    CuroselCard,
    CardforcuroselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  exports:[NavbarComponent,
    MaincontentComponent,CuroselCard],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
