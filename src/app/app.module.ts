import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Container1Component } from './container1/container1.component';
import { Container2Component } from './container2/container2.component';
import { Container3Component } from './container3/container3.component';
import { FooterComponent } from './footer/footer.component';
import { Row5Component } from './row5/row5.component';
import { Row8Component } from './row8/row8.component';
import { Row9Component } from './row9/row9.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Container1Component,
    Container2Component,
    Container3Component,
    FooterComponent,
    Row5Component,
    Row8Component,
    Row9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
