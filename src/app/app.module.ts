import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componetes/principal/principal.component';
import { Principal02Component } from './componetes/principal02/principal02.component';
import { Principal03Component } from './componetes/principal03/principal03.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Principal02Component,
    Principal03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
