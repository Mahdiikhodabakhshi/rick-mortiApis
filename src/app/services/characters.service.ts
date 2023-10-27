import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PersonajesRyMapi, Result } from '../interfaces/personajesRickAndMorty';
import {LocationRick} from "../interfaces/location-rick";
import {EpisodeRick} from "../interfaces/episode-rick";


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  URLBASECHAR = "https://rickandmortyapi.com/api/character";

  URLBASELOCATION = "https://rickandmortyapi.com/api/location";

  URLBASEEPISODE ="https://rickandmortyapi.com/api/episode";
  constructor(private http:HttpClient) { }

  getCharacters(page: number): Observable<PersonajesRyMapi>{
    return this.http.get<PersonajesRyMapi>(this.URLBASECHAR+'/?page='+page)
  }
  getOneCharacter(id : number) : Observable<Result>{
    return this.http.get<Result>(this.URLBASECHAR+'/'+ id)
  }

  getLocations(page :number):Observable<LocationRick>{
    return this.http.get<LocationRick>(this.URLBASELOCATION + "?page="+page)
  }

  getEpisodes(page :number):Observable<EpisodeRick>{
    return this.http.get<EpisodeRick>(this.URLBASEEPISODE + "?page="+page)
  }


}
