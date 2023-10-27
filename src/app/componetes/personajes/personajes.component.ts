import { Component, OnInit } from '@angular/core';
import { PersonajesRyMapi } from 'src/app/interfaces/personajesRickAndMorty';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
infoAPI!: PersonajesRyMapi;
  currentPage = 1;
  nextDis= false;
  previosDis=true;

constructor(private charService: CharactersService) { }


ngOnInit(): void {
  this.cargarPersonajes(this.currentPage);
}

private cargarPersonajes(page : number):void {
  this.charService.getCharacters(page).subscribe(
    {
      next: (data: PersonajesRyMapi):void => {
        this.infoAPI = data;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: ():void => {
        console.log('complete');
      }

    }
  )



  }

  changePage(page: string) {
    switch (page){
      case 'first':
        this.currentPage = 1;
        this.cargarPersonajes(this.currentPage);
        break;
      case 'previous':
        if (this.currentPage !== 1){
          this.currentPage--;
          this.cargarPersonajes(this.currentPage);
        }else {
          alert('ya estas en la primera pagina');
        }
        break;
      case 'next':
        if (this.currentPage !== this.infoAPI.info.pages){
          this.currentPage++;
          this.cargarPersonajes(this.currentPage);

        }

        break;

      case 'last':
        this.currentPage = this.infoAPI.info.pages;
        this.cargarPersonajes(this.currentPage);
        break;
      case 'input':
        this.cargarPersonajes(this.currentPage);
        break;

    }
    this.previosDis = this.currentPage === 1 ;
    this.nextDis = this.currentPage === this.infoAPI.info.pages;

  }
}
