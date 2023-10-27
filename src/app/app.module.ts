import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componetes/principal/principal.component';
import { Principal03Component } from './componetes/principal03/principal03.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './componetes/main/main.component';
import { PersonajesComponent } from './componetes/personajes/personajes.component';
import { PersonajeComponent } from './componetes/personaje/personaje.component';
import { Principal02Component } from './componetes/principal02/principal02.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { RickLocationComponent } from './componetes/rick-location/rick-location.component';
import { RickEpisodeComponent } from './componetes/rick-episode/rick-episode.component';
import { LocationRickComponent } from './interfaces/location-rick/location-rick.component';
import { EpisodeRickComponent } from './interfaces/episode-rick/episode-rick.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Principal02Component,
    Principal03Component,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PersonajesComponent,
    PersonajeComponent,
    RickLocationComponent,
    RickEpisodeComponent,
    LocationRickComponent,
    EpisodeRickComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
