import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomPageComponent } from './component/hom-page/hom-page.component';
import { AboutPageComponent } from './component/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
