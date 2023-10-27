import {Component, OnInit} from '@angular/core';
import {LocationRick} from "../../interfaces/location-rick";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-rick-location',
  templateUrl: './rick-location.component.html',
  styleUrls: ['./rick-location.component.css']
})
export class RickLocationComponent implements OnInit{
  infoLoc !: LocationRick;
  currentPage = 1;

  constructor(private locService:CharactersService) {
  }


  ngOnInit(): void {
    this.loadLocations(this.currentPage);
  }

  private loadLocations(page :number) {
    this.locService.getLocations(page).subscribe({
      next:(data:LocationRick):void=>{
      this.infoLoc=data;
      },
      error:err => console.log(err),
      complete:() => console.log()
    })
  }
}
