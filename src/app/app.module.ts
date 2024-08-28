import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomPageComponent } from './component/hom-page/hom-page.component';
import { AboutPageComponent } from './component/about-page/about-page.component';
import { ChanalsPageComponent } from './component/chanals-page/chanals-page.component';
import { AdvantagesComponent } from './component/advantages/advantages.component';
import { RevievsComponent } from './component/revievs/revievs.component';
 import Swiper from 'swiper';
import { FormsModule } from '@angular/forms';
import { AtworkComponent } from './component/atwork/atwork.component';
import { ResourcesComponent } from './components/resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    HomPageComponent,
    AboutPageComponent,
    ChanalsPageComponent,
    AdvantagesComponent,
    RevievsComponent,
    AtworkComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [Swiper],
  bootstrap: [AppComponent,]
})
export class AppModule { }
