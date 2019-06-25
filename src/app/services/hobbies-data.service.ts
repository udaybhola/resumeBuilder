import { Injectable } from '@angular/core';

@Injectable()
export class HobbiesDataService {

  constructor() { }

  hobbies:string[]=['Hobbie'];
  hobbieId:number=0;

  onSetHobbies(hobbies){
    this.hobbies=hobbies;
  }

  onAddHobbies(){
    this.hobbies.push('Hobbie');
  }

  onRemoveHobbies(){
    this.hobbies.pop();
  }

  onSetHobbiesId(id){
    this.hobbieId=id;
  }

}
